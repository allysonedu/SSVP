import { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Button,
  CssBaseline,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  LinearProgress,
} from '@mui/material';

import { FaUser } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputText } from '../../shared/components/hook-form/input-text';
import { forgotPassword } from '../../api/api';

const forgotPasswordValidationSchema = zod.object({
  email: zod.string().email('Digite um email válido'),
});

const defaultTheme = createTheme();

type ForgotPasswordFormType = zod.infer<typeof forgotPasswordValidationSchema>;

export const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const timeToBack = useRef<ReturnType<typeof setTimeout>>();

  const methods = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordValidationSchema),
    defaultValues: {
      email: '',
    },
  });

  const { handleSubmit, control } = methods;

  const handleSubmitForgotPassword = useCallback(
    async (data: ForgotPasswordFormType) => {
      try {
        setLoading(true);

        await forgotPassword(data.email);

        if (timeToBack.current) {
          clearTimeout(timeToBack.current);
        }
        timeToBack.current = setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (err: any) {
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FaUser />
          </Avatar>
          <Typography component="h1" variant="h5">
            Esqueceu sua senha?
          </Typography>

          <form onSubmit={handleSubmit(handleSubmitForgotPassword)}>
            <InputText
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              control={control}
              type="email"
              id="email"
              autoComplete="current-email"
            />

            {loading && <LinearProgress />}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar reset
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {'Voltar para login '}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
