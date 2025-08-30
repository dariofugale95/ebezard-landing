import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
      <Typography variant="h4" mb={2} color="#2d2918" sx={{ fontWeight: 700 }}>
        {t("loginTitle", "Accedi a eBezard")}
      </Typography>
      <Typography variant="body1" mb={4} color="#64635a" sx={{ maxWidth: 400, textAlign: 'center' }}>
        {t("loginDescription", "Per accedere a tutte le funzionalità, effettua il login tramite il nostro provider sicuro.")}
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ px: 5, py: 2, fontWeight: 700, fontSize: '1.1rem', bgcolor: '#4390a9', color: '#fff', boxShadow: 2, '&:hover': { bgcolor: '#d3ad46', color: '#2d2918' } }}
        onClick={() => { window.location.href = `${import.meta.env.VITE_API_GATEWAY_URL}/api/oauth/login`; }}
      >
        {t("loginButton", "Accedi con Single Sign-On")}
      </Button>
    </Box>
  );
};

export default LoginPage;
