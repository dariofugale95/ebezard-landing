import React, { createContext, useContext, useEffect, useState } from "react";

// Decodifica base64url (per estrarre payload dal JWT)
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
    const token = localStorage.getItem("access_token");
    setAccessToken(token);
    setUser(token ? decodeJWT(token) : null);
  }, []);

  const login = (access: string, refresh?: string) => {
    localStorage.setItem("access_token", access);
    if (refresh) localStorage.setItem("refresh_token", refresh);
    setAccessToken(access);
    setUser(decodeJWT(access));
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setAccessToken(null);
    setUser(null);
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
