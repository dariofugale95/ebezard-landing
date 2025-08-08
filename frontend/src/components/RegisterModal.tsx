import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RegisterForm from './RegisterForm';
import { useTranslation } from "react-i18next";

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
  type: 'business' | 'customer';
}
export default function RegisterModal({ open, onClose, type }: RegisterModalProps) {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pr: 2 }}>
        {type === 'business' ? t('registerBusiness', 'Register as Business') : t('registerCustomer', 'Register as Customer')}
        <IconButton onClick={onClose} sx={{ ml: 2 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <RegisterForm userType={type} />
      </DialogContent>
    </Dialog>
  );
}
