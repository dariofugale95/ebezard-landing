import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Typography, Button } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import RegisterModal from "./RegisterModal";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../assets/eBezard_logo.png';

type StrengthBoxProps = {
  color: string;
  icon: string;
  title: string;
  desc: string;
};
function StrengthBox({ color, icon, title, desc }: StrengthBoxProps) {
  return (
    <Box sx={{ p: 3, minWidth: 220, background: '#fff', borderRadius: 3, boxShadow: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ bgcolor: color, borderRadius: '50%', p: 1, mb: 1 }}>
        <span role="img" aria-label={title} style={{ fontSize: 32 }}>{icon}</span>
      </Box>
      <Typography variant="subtitle1" fontWeight={700} color="#2d2918">{title}</Typography>
      <Typography variant="body2" color="#64635a" sx={{ mt: 1 }}>{desc}</Typography>
    </Box>
  );
}

type MainContentProps = {
  info: any;
  loading: boolean;
  error: string | null;
  user: any;
};

function MainContent({ info, loading, error, user }: MainContentProps) {
  const { t } = useTranslation();
  const strengths = [
    {
      color: '#d3ad46',
      icon: '📈',
      title: t('infoGrowth', 'Grow your business'),
      desc: t('infoGrowthDesc', 'Reach new customers and increase your sales with our marketplace.'),
    },
    {
      color: '#4390a9',
      icon: '🛠️',
      title: t('infoTools', 'Smart tools'),
      desc: t('infoToolsDesc', 'Manage products, customers and analytics with ease.'),
    },
    {
      color: '#64635a',
      icon: '💬',
      title: t('infoSupport', 'Dedicated support'),
      desc: t('infoSupportDesc', 'Our team is always available to help you succeed.'),
    },
  ];
  // Modal registration
  const [modalOpen, setModalOpen] = React.useState(false);
  const [registerType, setRegisterType] = React.useState<'customer' | 'business'>('customer');
  console.debug("User info:", user);
  return (
    <Box sx={{ minHeight: '100vh', width: '100vw', bgcolor: 'transparent', background: 'linear-gradient(135deg, #fffbe6 0%, #f8f5e6 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', pt: 10, overflowX: 'hidden', px: 0, m: 0 }}>
      <Routes>
        <Route path="/login" element={
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
        } />
        <Route path="/" element={
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', px: 2, gap: 4 }}>
            <Box component="img" src={logo} alt="eBezard Logo" sx={{ height: 200, mb: 2 }} />
            <Typography variant="h4" color="#4390a9" gutterBottom sx={{ fontWeight: 700 }}>
              {info?.description ?? t("description")}
            </Typography>
            <Typography variant="body1" mb={2} color="#64635a" sx={{ maxWidth: 600 }}>
              {info?.longDescription ?? t("longDescription")}
            </Typography>
            {/* Strengths */}
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
              {strengths.map((s, i) => (
                <StrengthBox key={i} color={s.color} icon={s.icon} title={s.title} desc={s.desc} />
              ))}
            </Box>
            {/* Reviews */}
            <Box sx={{ mt: 4, maxWidth: 500, mx: 'auto', background: '#fffbe6', borderRadius: 3, boxShadow: 1, p: 3, textAlign: 'left' }}>
              <Typography variant="subtitle2" color="#4390a9" fontWeight={700} gutterBottom>{t('infoTestimonial', 'eBezard helped us double our sales in just 3 months! The platform is intuitive and the support is fantastic.')}</Typography>
              <Typography variant="body2" color="#64635a">- {t('infoTestimonialAuthor', 'Martina, Store Owner')}</Typography>
            </Box>
            {/* Call to action */}
            <Button variant="contained" size="large" sx={{ mt: 4, px: 5, py: 2, fontWeight: 700, fontSize: '1.2rem', bgcolor: '#d3ad46', color: '#2d2918', boxShadow: 2, '&:hover': { bgcolor: '#4390a9', color: '#fff' } }} onClick={() => { setRegisterType('customer'); setModalOpen(true); }}>{t("heroCTA")}</Button>
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
          <Box sx={{ py: 6, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 500 }}>
            <Typography variant="h4" mb={2} color="#2d2918" sx={{ fontWeight: 700 }}>{t("joinTitle")}</Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 2 }}>
              <Button variant="outlined" sx={{ px: 4, py: 2, fontWeight: 700, fontSize: '1rem', color: '#2d2918', borderColor: '#d3ad46', bgcolor: '#fffbe6', '&:hover': { bgcolor: '#d3ad46', color: '#2d2918' } }} onClick={() => { setRegisterType('business'); setModalOpen(true); }}>{t('registerBusiness', 'Register as Business')}</Button>
              <Button variant="outlined" sx={{ px: 4, py: 2, fontWeight: 700, fontSize: '1rem', color: '#2d2918', borderColor: '#4390a9', bgcolor: '#fffbe6', '&:hover': { bgcolor: '#4390a9', color: '#fff' } }} onClick={() => { setRegisterType('customer'); setModalOpen(true); }}>{t('registerCustomer', 'Register as Customer')}</Button>
            </Box>
            <Typography variant="body2" mt={4} color="#64635a">{t("alreadyAccount")} <Button variant="text" sx={{ color: '#4390a9', fontWeight: 700 }}>{t("login")}</Button></Typography>
            <RegisterModal open={modalOpen} type={registerType} onClose={() => setModalOpen(false)} />
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
