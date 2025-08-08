import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

function Footer({ year }: { year?: string }) {
  const { t } = useTranslation();
  const projectName = import.meta.env.VITE_PROJECT_NAME || "eBezard";
  return (
    <Box component="footer" sx={{ width: '100%', py: 3, textAlign: 'center', bgcolor: '#2d2918', color: '#d3ad46', borderTop: 'none', position: 'relative' }}>
      <Typography variant="body2" sx={{ color: '#d3ad46', fontWeight: 500 }}>
            &copy; {year ?? t("year", "2025")} {projectName}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', fontSize: 14 }}>
        <Link href="/" color="inherit" underline="hover">{t("home", "Home")}</Link>
        <Link href="/features" color="inherit" underline="hover">{t("tabFeatures", "Features")}</Link>
        <Link href="/pricing" color="inherit" underline="hover">{t("tabPricing", "Pricing")}</Link>
        <Link href="/faq" color="inherit" underline="hover">{t("tabFAQ", "FAQ")}</Link>
        <Link href="/join" color="inherit" underline="hover">{t("tabJoin", "Join")}</Link>
        <Link href="/privacy" color="inherit" underline="hover">{t("privacy", "Privacy")}</Link>
        <Link href="/terms" color="inherit" underline="hover">{t("terms", "Terms")}</Link>
      </Box>
    </Box>
  );
}

export default Footer;
