import { Select, MenuItem, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "it", label: "Italiano", country: "IT" },
  { code: "en", label: "English", country: "GB" },
  { code: "fr", label: "Français", country: "FR" },
  { code: "es", label: "Español", country: "ES" },
  { code: "de", label: "Deutsch", country: "DE" },
  { code: "pt", label: "Português", country: "PT" },
  { code: "zh", label: "中文", country: "CN" },
  { code: "ar", label: "العربية", country: "SA" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", minWidth: 160 }}>
      <Select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        size="small"
        sx={{ bgcolor: "white", borderRadius: 2, minWidth: 120, fontWeight: 500 }}
        renderValue={(selected) => {
          const lang = languages.find(l => l.code === selected);
          return (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <ReactCountryFlag countryCode={lang?.country ?? "IT"} svg style={{ width: 20, height: 20 }} />
              <Typography variant="body2">{lang?.label}</Typography>
            </Box>
          );
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ReactCountryFlag countryCode={lang.country} svg style={{ width: 20, height: 20 }} />
            <Typography variant="body2">{lang.label}</Typography>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

export default LanguageSelector;
