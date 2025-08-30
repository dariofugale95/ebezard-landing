import React from "react";
import { Box, Typography, Button } from "@mui/material";
import RegisterModal from "../components/RegisterModal";
import { useTranslation } from "react-i18next";

type RegisterType = 'customer' | 'business';
interface JoinPageProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  registerType: RegisterType;
  setRegisterType: (type: RegisterType) => void;
}

const JoinPage: React.FC<JoinPageProps> = ({ modalOpen, setModalOpen, registerType, setRegisterType }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ py: 6, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 500 }}>
      <Typography variant="h4" mb={2} color="#2d2918" sx={{ fontWeight: 700 }}>{t("joinTitle")}</Typography>
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 2 }}>
        <Button variant="outlined" sx={{ px: 4, py: 2, fontWeight: 700, fontSize: '1rem', color: '#2d2918', borderColor: '#d3ad46', bgcolor: '#fffbe6', '&:hover': { bgcolor: '#d3ad46', color: '#2d2918' } }} onClick={() => { setRegisterType('business'); setModalOpen(true); }}>{t('registerBusiness', 'Register as Business')}</Button>
        <Button variant="outlined" sx={{ px: 4, py: 2, fontWeight: 700, fontSize: '1rem', color: '#2d2918', borderColor: '#4390a9', bgcolor: '#fffbe6', '&:hover': { bgcolor: '#4390a9', color: '#fff' } }} onClick={() => { setRegisterType('customer'); setModalOpen(true); }}>{t('registerCustomer', 'Register as Customer')}</Button>
      </Box>
      <Typography variant="body2" mt={4} color="#64635a">{t("alreadyAccount")} <Button variant="text" sx={{ color: '#4390a9', fontWeight: 700 }}>{t("login")}</Button></Typography>
      <RegisterModal open={modalOpen} type={registerType} onClose={() => setModalOpen(false)} />
    </Box>
  );
};

export default JoinPage;
