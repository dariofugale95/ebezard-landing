import React from "react";
import { AppBar, Tabs, Tab, Toolbar, Box, Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logo from '../assets/eBezard_horizontal.png';
import { useAuth } from "./AuthContext";

// Add props type
type TopBarTabsProps = {
  user: any;
};

function TopBarTabs({ user }: TopBarTabsProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  // Determine if the user is authenticated based on the presence of user
  const isAuthenticated = !!user;
  // Avatar menu state
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const tabPaths = ["/", "/features", "/pricing", "/faq", "/join"];
  const currentTab = tabPaths.findIndex((p) => p === location.pathname);
  const { logout } = useAuth();
  
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 120 }}>
          <LanguageSelector />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <button
              style={{
                background: '#ffe9a0',
                color: '#2d2918',
                border: 'none',
                borderRadius: 6,
                padding: '7px 18px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background 0.2s',
                marginLeft: 4
              }}
              onClick={() => navigate('/join')}
            >{t('register', 'Sign Up')}</button>
            {!isAuthenticated ? (
              <button
                style={{
                  background: '#4390a9',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '7px 18px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  marginLeft: 4
                }}
                onClick={() => navigate('/login')}
              >{t('login', 'Sign In')}</button>
            ) : (
              <>
                <IconButton onClick={handleAvatarClick} sx={{ ml: 1 }}>
                  <Avatar sx={{ bgcolor: '#4390a9', width: 38, height: 38 }}>
                    {user?.username?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U'}
                  </Avatar>
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  <MenuItem disabled>{user?.username || user?.email || 'Utente'}</MenuItem>
                  <MenuItem onClick={() => { handleMenuClose(); logout(); }}>{t('logout', 'Logout')}</MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBarTabs;