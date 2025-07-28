import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Typography, Button } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../assets/eBezard_logo.png';

function MainContent({ info, loading, error }: { info: any, loading: boolean, error: string | null }) {
  const { t } = useTranslation();
  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', bgcolor: 'transparent', background: 'linear-gradient(135deg, #fffbe6 0%, #f8f5e6 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', pt: 10, overflowX: 'hidden', px: 0, m: 0 }}>
      <Routes>
        <Route path="/" element={
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', px: 2 }}>
            <Box component="img" src={logo} alt="eBezard Logo" sx={{ height: 200, mb: 2 }} />
            <Typography variant="h5" color="#4390a9" gutterBottom sx={{ fontWeight: 600 }}>
              {info?.description ?? t("description")}
            </Typography>
            <Typography variant="body1" mb={2} color="#64635a" sx={{ maxWidth: 600 }}>
              {info?.longDescription ?? t("longDescription")}
            </Typography>
            <Button variant="contained" size="large" sx={{ mt: 2, px: 4, py: 1.5, fontWeight: 700, fontSize: '1.1rem', bgcolor: '#d3ad46', color: '#2d2918', '&:hover': { bgcolor: '#4390a9', color: '#fff' } }}>{t("heroCTA")}</Button>
          </Box>
        } />
        <Route path="/features" element={
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
        } />
        <Route path="/pricing" element={
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
        } />
        <Route path="/faq" element={
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
        } />
        <Route path="/join" element={
          <Box sx={{ py: 6, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Typography variant="h4" mb={2} color="#2d2918" sx={{ fontWeight: 700 }}>{t("joinTitle")}</Typography>
            <Button variant="contained" size="large" sx={{ mt: 2, px: 4, py: 1.5, fontWeight: 700, fontSize: '1.1rem', bgcolor: '#d3ad46', color: '#2d2918', '&:hover': { bgcolor: '#4390a9', color: '#fff' } }}>{t("register")}</Button>
            <Typography variant="body2" mt={2} color="#64635a">{t("alreadyAccount")} <Button variant="text" sx={{ color: '#4390a9', fontWeight: 700 }}>{t("login")}</Button></Typography>
          </Box>
        } />
        <Route path="*" element={<Typography variant="h5" sx={{ py: 6, textAlign: 'center' }}>404 - Not Found</Typography>} />
      </Routes>
      {loading && <Typography color="text.secondary">Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
}

export default MainContent;
