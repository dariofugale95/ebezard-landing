import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";

const FaqPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: 6, px: 2, maxWidth: 700, mx: "auto", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <Typography variant="h4" mb={2} color="#2d2918" sx={{ fontWeight: 700 }}>{t("faqTitle")}</Typography>
      <Box sx={{ width: '100%', maxWidth: 500, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Accordion sx={{ bgcolor: '#fffbe6', boxShadow: 2, borderRadius: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} color="#4390a9">{t("faqRegisterQ")}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2, pb: 2 }}>
            <Typography variant="body2" color="#64635a">{t("faqRegisterA")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: '#fffbe6', boxShadow: 2, borderRadius: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} color="#4390a9">{t("faqFreeQ")}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2, pb: 2 }}>
            <Typography variant="body2" color="#64635a">{t("faqFreeA")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ bgcolor: '#fffbe6', boxShadow: 2, borderRadius: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2 }}>
            <Typography variant="subtitle2" fontWeight={700} color="#4390a9">{t("faqSupportQ")}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2, pb: 2 }}>
            <Typography variant="body2" color="#64635a">{t("faqSupportA")}</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FaqPage;
