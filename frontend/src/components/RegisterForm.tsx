import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, Typography, TextField, Button, Box, Alert, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Person, Email, Lock } from '@mui/icons-material';

export default function RegisterForm({ userType = 'customer', onRegister }: { userType?: 'customer' | 'business'; onRegister?: (user?: { email: string; username: string; password: string }) => void }) {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (password !== password2) {
      setError(t('passwordsDontMatch'));
      return;
    }
    setLoading(true);
    try {
      // Choose the correct endpoint based on userType
      const endpoint = `${import.meta.env.VITE_API_GATEWAY_URL}/api/users/register/`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          user_type: userType,
        }),
      });
      if (!res.ok) {
        let msg = t('registerError', 'Registration error');
        try {
          const data = await res.json();
          if (data?.detail) msg = data.detail;
          else if (typeof data === 'object') msg = Object.values(data).flat().join(' ');
        } catch {}
        setError(msg);
        return;
      }
      setSuccess(true);
      setUsername("");
      setEmail("");
      setPassword("");
      setPassword2("");
      if (onRegister) onRegister({ email, username, password });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card elevation={3} sx={{ p: 2, borderRadius: 3, boxShadow: 4 }}>
      <CardContent>
        <Typography variant="h5" fontWeight={700} color="primary" gutterBottom align="center">
          {t('createAccount', 'Create a new account')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label={t('username')}
            variant="outlined"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label={t('email')}
            variant="outlined"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label={t('newPassword')}
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(v => !v)} edge="end" tabIndex={-1}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label={t('repeatPassword')}
            variant="outlined"
            type={showPassword2 ? "text" : "password"}
            value={password2}
            onChange={e => setPassword2(e.target.value)}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword2(v => !v)} edge="end" tabIndex={-1}>
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              fontWeight: 700,
              py: 1.5,
              bgcolor: '#d3ad46',
              color: '#2d2918',
              '&:hover': { bgcolor: '#4390a9', color: '#fff' }
            }}
            disabled={loading}
          >
            {loading ? t('registering', 'Registering...') : t('register')}
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{t('registerSuccess', 'Registration successful! You can now log in.')}</Alert>}
        </Box>
      </CardContent>
    </Card>
  );
}
