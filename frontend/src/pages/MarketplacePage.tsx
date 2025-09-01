import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const MarketplacePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
      <Typography variant="h4" mb={2} color="#2d2918" sx={{ fontWeight: 700 }}>
        {t("marketplaceTitle", "Marketplace")}
      </Typography>
      <Typography variant="body1" mb={4} color="#64635a" sx={{ maxWidth: 400, textAlign: 'center' }}>
        {t("marketplaceDesc", "Questa è la pagina placeholder del marketplace. Funzionalità in arrivo!")}
      </Typography>
      <Button variant="contained" size="large" sx={{ px: 5, py: 2, fontWeight: 700, fontSize: '1.1rem', bgcolor: '#4390a9', color: '#fff', boxShadow: 2 }} disabled>
        {t("marketplaceGo", "Vai al Marketplace")}
      </Button>
    </Box>
  );
};

export default MarketplacePage;
