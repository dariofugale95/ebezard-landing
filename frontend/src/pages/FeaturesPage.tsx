import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const FeaturesPage: React.FC<{ info: any }> = ({ info }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: 6, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h4" mb={2} color="#2d2918" sx={{ fontWeight: 700 }}>{t("platformInfo")}</Typography>
      <Box sx={{ maxWidth: 600 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: 'left' }}>
          {(info?.features ?? t("features", { returnObjects: true })).map((f: string) => (
            <li key={f} style={{ marginBottom: "0.7rem", color: "#4390a9", fontSize: "1.1rem", fontWeight: 500 }}>
              <span style={{ marginRight: 8, color: "#d3ad46" }}>●</span>{f}
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default FeaturesPage;
