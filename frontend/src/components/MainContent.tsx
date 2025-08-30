import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import FeaturesPage from "../pages/FeaturesPage";
import PricingPage from "../pages/PricingPage";
import FaqPage from "../pages/FaqPage";
import JoinPage from "../pages/JoinPage";

// ...existing code...

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
  <Route path="/login" element={<LoginPage />} />
  <Route path="/" element={<HomePage info={info} strengths={strengths} setRegisterType={setRegisterType} setModalOpen={setModalOpen} />} />
  <Route path="/features" element={<FeaturesPage info={info} />} />
  <Route path="/pricing" element={<PricingPage />} />
  <Route path="/faq" element={<FaqPage />} />
  <Route path="/join" element={<JoinPage modalOpen={modalOpen} setModalOpen={setModalOpen} registerType={registerType} setRegisterType={setRegisterType} />} />
        <Route path="*" element={<Typography variant="h5" sx={{ py: 6, textAlign: 'center' }}>404 - Not Found</Typography>} />
      </Routes>
      {loading && <Typography color="text.secondary">Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
}

export default MainContent;
