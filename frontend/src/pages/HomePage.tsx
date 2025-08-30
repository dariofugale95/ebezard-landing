import React from "react";
import { Box, Typography, Button } from "@mui/material";
import StrengthBox from "../components/StrengthBox";
import logo from '../assets/eBezard_logo.png';
import { useTranslation } from "react-i18next";

const HomePage: React.FC<{ info: any; strengths: any[]; setRegisterType: any; setModalOpen: any; }> = ({ info, strengths, setRegisterType, setModalOpen }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', px: 2, gap: 4 }}>
      <Box component="img" src={logo} alt="eBezard Logo" sx={{ height: 200, mb: 2 }} />
      <Typography variant="h4" color="#4390a9" gutterBottom sx={{ fontWeight: 700 }}>
        {info?.description ?? t("description")}
      </Typography>
      <Typography variant="body1" mb={2} color="#64635a" sx={{ maxWidth: 600 }}>
        {info?.longDescription ?? t("longDescription")}
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mt: 2 }}>
        {strengths.map((s, i) => (
          <StrengthBox key={i} color={s.color} icon={s.icon} title={s.title} desc={s.desc} />
        ))}
      </Box>
      <Box sx={{ mt: 4, maxWidth: 500, mx: 'auto', background: '#fffbe6', borderRadius: 3, boxShadow: 1, p: 3, textAlign: 'left' }}>
        <Typography variant="subtitle2" color="#4390a9" fontWeight={700} gutterBottom>{t('infoTestimonial', 'eBezard helped us double our sales in just 3 months! The platform is intuitive and the support is fantastic.')}</Typography>
        <Typography variant="body2" color="#64635a">- {t('infoTestimonialAuthor', 'Martina, Store Owner')}</Typography>
      </Box>
      <Button variant="contained" size="large" sx={{ mt: 4, px: 5, py: 2, fontWeight: 700, fontSize: '1.2rem', bgcolor: '#d3ad46', color: '#2d2918', boxShadow: 2, '&:hover': { bgcolor: '#4390a9', color: '#fff' } }} onClick={() => { setRegisterType('customer'); setModalOpen(true); }}>{t("heroCTA")}</Button>
    </Box>
  );
};

export default HomePage;
