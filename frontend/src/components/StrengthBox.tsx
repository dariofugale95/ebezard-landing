import React from "react";
import { Box, Typography } from "@mui/material";

type StrengthBoxProps = {
  color: string;
  icon: string;
  title: string;
  desc: string;
};

const StrengthBox: React.FC<StrengthBoxProps> = ({ color, icon, title, desc }) => (
  <Box sx={{ p: 3, minWidth: 220, background: '#fff', borderRadius: 3, boxShadow: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Box sx={{ bgcolor: color, borderRadius: '50%', p: 1, mb: 1 }}>
      <span role="img" aria-label={title} style={{ fontSize: 32 }}>{icon}</span>
    </Box>
    <Typography variant="subtitle1" fontWeight={700} color="#2d2918">{title}</Typography>
    <Typography variant="body2" color="#64635a" sx={{ mt: 1 }}>{desc}</Typography>
  </Box>
);

export default StrengthBox;
