import { AppBar, Tabs, Tab, Toolbar, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logo from '../assets/eBezard_horizontal.png';

function TopBarTabs() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const tabPaths = ["/", "/features", "/pricing", "/faq", "/join"];
  const currentTab = tabPaths.findIndex((p) => p === location.pathname);
  return (
    <AppBar position="fixed" color="inherit" elevation={0} sx={{ zIndex: 1201, background: 'linear-gradient(90deg, #fffbe6 0%, #d3ad46 100%)', boxShadow: 'none', border: 'none', width: '100vw', left: 0, right: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box component="img" src={logo} alt="eBezard Horizontal" sx={{ height: 56, mr: 3, p: 0.5 }} />
        <Tabs
          value={currentTab === -1 ? false : currentTab}
          onChange={(_, v) => navigate(tabPaths[v])}
          textColor="primary"
          indicatorColor="primary"
          sx={{ minHeight: 48 }}
        >
          <Tab label={t("tabInfo", "Info")} />
          <Tab label={t("tabFeatures", "Features")} />
          <Tab label={t("tabPricing", "Pricing")} />
          <Tab label={t("tabFAQ", "FAQ")} />
          <Tab label={t("tabJoin", "Join")} />
        </Tabs>
        <Box sx={{ minWidth: 120 }}>
          <LanguageSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBarTabs;
