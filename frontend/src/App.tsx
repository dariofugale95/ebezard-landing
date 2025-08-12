import { useEffect, useState } from "react";
import "./i18n";

import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import TopBarTabs from "./components/TopBarTabs";
import Footer from "./components/Footer";

function App() {
  const [info, setInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Load platform info
    fetch(`${import.meta.env.VITE_API_GATEWAY_URL}/info`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch info");
        return res.json();
      })
      .then((data) => {
        setInfo(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load platform info.");
        setLoading(false);
      });

    // Verify user session
    fetch(`${import.meta.env.VITE_API_GATEWAY_URL}/api/me`, { credentials: 'include' })
      .then(res => {
        if (res.status === 200) return res.json();
        return null;
      })
      .then(user => {
        if (user) {
          setUser(user);
        }
      });
  }, []);

  return (
    <BrowserRouter>
      <TopBarTabs user={user} />
      <Box sx={{ pt: 1, minHeight: "100vh", width: '100vw', background: "linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%)", px: 0, m: 0 }}>
        <Routes>
          <Route path="*" element={<MainContent info={info} loading={loading} error={error} user={user} />} />
        </Routes>
      </Box>
      <Footer year={info?.year} />
    </BrowserRouter>
  );
}

export default App;