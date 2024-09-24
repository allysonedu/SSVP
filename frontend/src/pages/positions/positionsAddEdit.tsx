import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { TextField, Grid, Box, Button, Typography, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { IConferences } from '../../shared/dtos/IConferences';
import { createConferences, getOneConferences, deleteConferences, updateConferences } from '../../api/conferences';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '../../shared/hooks/Toast';
import { IPosition } from '../../shared/dtos/IPosition';
import { createPositions, updatePositions } from '../../api/positions';


export const PositionAddEdit: React.FC = () => {
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
  } = useForm<IPosition>({
    defaultValues: {
      positionName: '',
      endDateMandate: null,
    },
  });


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getOneConferences(Number(id));
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
      deleteConferences(id)
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

  const onSubmit: SubmitHandler<IPosition> = async (data: IPosition) => {
    try {
      if (!id) {
        await createPositions(data);
        alert('Cargo salvo com sucesso!');
      } else {
        await updatePositions(data)
        alert('Cargo atualizado com sucesso!');
      }
      navigate('/positionsView')
    } catch (err) {
      console.error('Erro ao salvar o cargo!', err);
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
        <Grid item xs={12} sm={4}>
          <Controller
            name="positionName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Nome"
                fullWidth
                error={!!errors.positionName}
                helperText={errors.positionName ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="hasMandate"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth variant="standard" error={!!errors.hasMandate}>
                <InputLabel>Com Mandato</InputLabel>
                <Select
                  {...field}
                  value={field.value || "false"}  // Assegura que o valor inicial seja uma string vazia caso não haja valor
                  label="Com Mandato"
                  
                >
                  <MenuItem value="false" >Não</MenuItem>
                  <MenuItem value="true">Sim</MenuItem>
               
                </Select>
                <FormHelperText>
                  {errors.hasMandate ? 'Campo obrigatório' : ''}
                </FormHelperText>
              </FormControl>
            )}
            rules={{ required: true }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name="endDateMandate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Data do Mandato"
                fullWidth
                error={!!errors.endDateMandate}
                helperText={errors.endDateMandate ? 'Campo obrigatório' : ''}
                type='date'
                InputLabelProps={{ shrink: true }}
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
        <Button type="button" onClick={() => { navigate("/positionsView") }} variant="contained" color="warning" sx={{ marginLeft: "10px" }}>
          Cancelar
        </Button>
        <Button type="button" variant="contained" color="error" onClick={() => { handleDelete(Number(id)) }} sx={{ marginLeft: "10px" }}>
          Excluir
        </Button>
      </Box>
    </Box>
  );
};
