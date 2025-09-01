import React, { createContext, useContext, useEffect, useState } from "react";

// Decode base64url (to extract payload from JWT)
function decodeJWT(token: string): any {
  try {
    const payload = token.split(".")[1];
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(json);
  } catch {
    return null;
  }
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  accessToken: string | null;
  login: (access: string, refresh?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Always check session validity with the API Gateway on mount
    const checkSession = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_GATEWAY_URL || "https://localhost:8300"}/api/me`,
          { credentials: "include" }
        );
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
          setAccessToken(localStorage.getItem("access_token"));
        } else {
          // Session invalid: clear everything
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          setAccessToken(null);
          setUser(null);
        }
      } catch {
        // Network error: treat as logged out
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setAccessToken(null);
        setUser(null);
      }
    };
    checkSession();
  }, []);

  const login = (access: string, refresh?: string) => {
    localStorage.setItem("access_token", access);
    if (refresh) localStorage.setItem("refresh_token", refresh);
    setAccessToken(access);
    setUser(decodeJWT(access));
  };

  const logout = async () => {
    try {
      // Call the API Gateway logout endpoint
      await fetch(
        `${import.meta.env.VITE_API_GATEWAY_URL || "https://localhost:8300"}/api/users/logout`,
        {
          method: "POST",
          credentials: "include"
        }
      );
    } catch (e) {
      // Ignore network errors
    }
    // Always clear local tokens
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    // Forza controllo sessione lato backend
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_GATEWAY_URL || "https://localhost:8300"}/api/me`,
        { credentials: "include" }
      );
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
        setAccessToken(localStorage.getItem("access_token"));
      } else {
        setUser(null);
        setAccessToken(null);
      }
    } catch {
      setUser(null);
      setAccessToken(null);
    }
    // Redirect to landing page
    window.location.href = "http://localhost:8088/";
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!accessToken,
      user,
      accessToken,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
