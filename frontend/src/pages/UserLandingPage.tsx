import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

interface UserLandingPageProps {
  user: any;
}

const UserLandingPage: React.FC<UserLandingPageProps> = ({ user }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
      <Typography variant="h4" mb={2} color="#2d2918" sx={{ fontWeight: 700 }}>
        {t("welcomeUser", "Benvenuto, ")}{user?.username || user?.email || "Utente"}
      </Typography>
      <Typography variant="body1" mb={4} color="#64635a" sx={{ maxWidth: 400, textAlign: 'center' }}>
        {t("chooseDestination", "Dove vuoi andare?")}
      </Typography>
      {user?.user_type === "customer" && (
        <Button
          variant="contained"
          size="large"
          sx={{ px: 5, py: 2, fontWeight: 700, fontSize: '1.1rem', bgcolor: '#4390a9', color: '#fff', boxShadow: 2, '&:hover': { bgcolor: '#d3ad46', color: '#2d2918' } }}
          href="/marketplace"
        >
          {t("goMarketplace", "Vai al Marketplace")}
        </Button>
      )}
      {user?.user_type === "business" && (
        <Button
          variant="contained"
          size="large"
          sx={{ px: 5, py: 2, fontWeight: 700, fontSize: '1.1rem', bgcolor: '#d3ad46', color: '#2d2918', boxShadow: 2, '&:hover': { bgcolor: '#4390a9', color: '#fff' } }}
          onClick={() => { window.location.href = import.meta.env.VITE_FRONTEND_URL; }}
        >
          {t("goDashboard", "Vai alla Dashboard")}
        </Button>
      )}
    </Box>
  );
};

export default UserLandingPage;
