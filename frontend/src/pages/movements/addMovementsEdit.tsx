import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { TextField, Grid, Box, Button, Typography } from '@mui/material';
import {  IMovements} from '../../shared/dtos/IMovements';
import { createMovements, getOneMovements, deleteMovements, updateMovements } from '../../api/movements';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '../../shared/hooks/Toast';


export const MovementsAddEdit: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToast } = useToast()
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IMovements>({
    defaultValues: {
      name: '',
      username: '',
      state: '',
      email: '',
      city: '',
      cep: '',
    },
  });


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getOneMovements(Number(id));
        if (response?.data) {
          reset(response.data);
        }
      } catch (err) {
        setError('Erro ao carregar os dados.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    } else {
      setLoading(false); // Se não há id, é um novo registro, não precisa carregar dados
    }
  }, [id, reset]);

  const handleDelete = (id: number) => {
    try {
      deleteMovements(id)
      addToast({
        type: 'success',
        title: `Conferência deletada com sucesso!!`,
      })
      navigate('/conferencesView')
    } catch (error: any) {
      addToast({
        type: 'error',
        title: 'Erro ao Deletar a Conferencia',
        description: error?.message,
      })
    }


  }

  const onSubmit: SubmitHandler<IMovements> = async (data: IMovements) => {
    try {
      if (!id) {
        await createMovements(data);
        alert('Conferência salva com sucesso!');
      } else {
        await updateMovements(data)
        alert('Conferência atualizada com sucesso!');
      }
      navigate('/conferencesView')
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
        Cadastro Conferencia
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
        <Grid item xs={12} sm={6}>
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
        </Grid>
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
            name="city"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Cidade"
                fullWidth
                error={!!errors.city}
                helperText={errors.city ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="cep"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="cep"
                fullWidth
                error={!!errors.cep}
                helperText={errors.cep ? 'Campo obrigatório' : ''}
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
        <Button type="button" onClick={() => { navigate("/conferencesView") }} variant="contained" color="warning" sx={{ marginLeft: "10px" }}>
          Cancelar
        </Button>
        <Button type="button" variant="contained" color="error" onClick={() => { handleDelete(Number(id)) }} sx={{ marginLeft: "10px" }}>
          Excluir
        </Button>
      </Box>
    </Box>
  );
};
