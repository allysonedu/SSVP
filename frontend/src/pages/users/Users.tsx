import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';


import {
  TextField,
  Grid,
  Button,
  Typography,
} from '@mui/material';

import {
  users,
  getOneuser,
  updateUsers,
  deleteUsers,
} from '../../api/api';

import { IUser } from '../../shared/dtos/IUser';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useToast } from '../../shared/hooks/Toast';

export const Users: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToast } = useToast();

  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      password: '',
      username: '',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      
      
      try {
        const response = await getOneuser(Number(id));
        if (response?.data) {
          reset(response.data);
        }
      } catch (err) {
        setError('Erro ao carregar os dados.');
      } finally {
      
      }
    };
    if (id) {
      fetchData();
    } else {
     // Se não há id, é um novo registro, não precisa carregar dados
    }
  }, [id, reset]);

  const handleDelete = (id: number) => {
    try {
      deleteUsers(id);
      addToast({
        type: 'success',
        title: `Usúario deletado com sucesso!!`,
      });
      navigate('/usersView');
    } catch (error: any) {
      addToast({
        type: 'error',
        title: 'Erro ao Deletar o Usúario',
        description: error?.message,
      });
    }
  };
  const onSubmit: SubmitHandler<IUser> = async (data: IUser) => {
    try {
      if (!id) {
        await users(data);
        alert('Usúario salva com sucesso!');
      } else {
        await updateUsers(data);
        alert('Usúario atualizada com sucesso!');
      }
      navigate('/usersView');
    } catch (err) {
      console.error('Erro ao salvar a conferência!', err);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3, padding: 3 }}
      style={{ marginTop: '10vh' }}
    >
      <Typography variant="h6" gutterBottom>
        Cadastro Usúario {error}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Nome"
                fullWidth
                error={!!errors.name}
                helperText={errors.name ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="estado"
                fullWidth
                error={!!errors.state}
                helperText={errors.state ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid> */}
        <Grid item xs={12} sm={3}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Tipo do Usúario"
                fullWidth
                error={!!errors.username}
                helperText={errors.username ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Controller
            name="whatsapp"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Telefone"
                fullWidth
                error={!!errors.whatsapp}
                helperText={errors.whatsapp ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>
       

        <Grid item xs={12} sm={6}>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Senha"
                fullWidth
                error={!!errors.password}
                helperText={errors.password ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>
      </Grid>

      <Box mt={3}>
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
        <Button
          type="button"
          onClick={() => {
            navigate('/usersView');
          }}
          variant="contained"
          color="warning"
          sx={{ marginLeft: '10px' }}
        >
          Cancelar
        </Button>
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={() => {
            handleDelete(Number(id));
          }}
          sx={{ marginLeft: '10px' }}
        >
          Excluir
        </Button>
        <Button
          type="button"
          onClick={() => {
            navigate('/usersView');
          }}
          variant="contained"
          color="primary"
          sx={{ marginLeft: '10px' }}
        >
          Voltar
        </Button>
      </Box>
    </Box>
  );
};
