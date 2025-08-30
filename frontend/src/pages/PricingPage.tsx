import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: 6, px: 2, display: "flex", flexDirection: "column", gap: 2, alignItems: "center", justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h4" mb={2} color="#2d2918" sx={{ fontWeight: 700 }}>{t("pricingTitle")}</Typography>
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
        <Box sx={{ p: 3, minWidth: 220, background: "#d3ad46", borderRadius: 3, color: '#2d2918', boxShadow: 1 }}>
          <Typography variant="subtitle1" fontWeight={700} color="#2d2918">{t("pricingFree")}</Typography>
          <Typography variant="body2" color="#64635a">{t("pricingFreeDesc")}</Typography>
        </Box>
        <Box sx={{ p: 3, minWidth: 220, background: "#4390a9", borderRadius: 3, color: '#fff', boxShadow: 1 }}>
          <Typography variant="subtitle1" fontWeight={700} color="#fff">{t("pricingPro")}</Typography>
          <Typography variant="body2" color="#fff">{t("pricingProDesc")}</Typography>
        </Box>
        <Box sx={{ p: 3, minWidth: 220, background: "#64635a", borderRadius: 3, color: '#fff', boxShadow: 1 }}>
          <Typography variant="subtitle1" fontWeight={700} color="#fff">{t("pricingEnterprise")}</Typography>
          <Typography variant="body2" color="#fff">{t("pricingEnterpriseDesc")}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingPage;
