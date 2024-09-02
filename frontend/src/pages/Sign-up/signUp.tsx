import React, { useCallback, useState } from 'react';
import { createTheme } from '@mui/material/styles';
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
  ThemeProvider,
  LinearProgress,
} from '@mui/material';

import { FaUser } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputText } from '../../shared/components/hook-form/input-text';
import { users } from '../../api/api';

const SignUpFormValidationSchema = zod.object({
  name: zod.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: zod.string().email('Digite um email válido'),
  password: zod.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type SignUpFormType = zod.infer<typeof SignUpFormValidationSchema>;

const defaultTheme = createTheme();

export const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const methods = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { handleSubmit, control } = methods;

  const handleSubmitUsersRegister = useCallback(
    async (data: SignUpFormType) => {
      try {
        setLoading(true);

        await users(data);
      } catch (err: any) {
      } finally {
        setLoading(false);
      }
    },
    []
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
            Faça seu Cadastro
          </Typography>
          <form onSubmit={handleSubmit(handleSubmitUsersRegister)} noValidate>
            <InputText
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              control={control}
              type="name"
              id="name"
              autoComplete="current-name"
            />

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
              Logar-se
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {'Você já tem uma conta? Login '}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
