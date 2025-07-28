import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer({ year }: { year?: string }) {
  const { t } = useTranslation();
  return (
    <Box component="footer" sx={{ width: '100%', py: 3, textAlign: 'center', bgcolor: '#2d2918', color: '#d3ad46', borderTop: 'none', position: 'relative' }}>
      <Typography variant="body2" sx={{ color: '#d3ad46', fontWeight: 500 }}>
        &copy; {year ?? t("year")} eBezard
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', fontSize: 14 }}>
        <Link href="/" color="inherit" underline="hover">Home</Link>
        <Link href="/features" color="inherit" underline="hover">{t("tabFeatures")}</Link>
        <Link href="/pricing" color="inherit" underline="hover">{t("tabPricing")}</Link>
        <Link href="/faq" color="inherit" underline="hover">{t("tabFAQ")}</Link>
        <Link href="/join" color="inherit" underline="hover">{t("tabJoin")}</Link>
        <Link href="/privacy" color="inherit" underline="hover">Privacy</Link>
        <Link href="/terms" color="inherit" underline="hover">Terms</Link>
      </Box>
    </Box>
  );
}

export default Footer;
