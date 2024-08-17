import React, { useCallback, useState } from 'react';

import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Checkbox,
  createTheme,
  ThemeProvider,
  LinearProgress,
} from '@mui/material';
import { useAuth } from '../../shared/hooks/auth';

import { FaUser } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputText } from '../../shared/components/hook-form/input-text';

const loginFormValidationSchema = zod.object({
  email: zod.string().email('Digite um email válido'),
  password: zod.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type LoginFormType = zod.infer<typeof loginFormValidationSchema>;

const defaultTheme = createTheme();

export const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const methods = useForm<LoginFormType>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit, control } = methods;

  const handleSubmitLogin = useCallback(
    async (data: LoginFormType) => {
      try {
        setLoading(true);
        const result = await signIn({
          email: data.email,
          password: data.password,
        });

        console.log(result?.user);
      } catch (err: any) {
        console.error(err);
        // Handle error as needed
      } finally {
        setLoading(false);
      }
    },
    [signIn]
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
            Faça seu Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleSubmitLogin)}
            noValidate
            sx={{ mt: 1 }}
          >
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

            <InputText
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              control={control}
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembre-me"
            />
            {loading && <LinearProgress />}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {'Você não tem uma conta? Cadastro '}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
