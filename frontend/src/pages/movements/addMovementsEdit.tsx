import { useForm, Controller, SubmitHandler, useFieldArray } from 'react-hook-form';

import { TextField, Grid, Box, Button, Typography, Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import { IMovements } from '../../shared/dtos/IMovements';
import { createMovements, getOneMovements, deleteMovements, updateMovements } from '../../api/movements';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '../../shared/hooks/Toast';
import { getAllAssisteds } from "../,,/../../api/assisteds";
import { IAssisteds } from '../../shared/dtos/IAssisteds';


export const MovementsAddEdit: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToast } = useToast()
  const navigate = useNavigate()


  interface FormData {
    withdrawnBy: string;
    deliveredBy: string;
    products: string;
    date: string;
    time: string;
  }

  const [formData, setFormData] = useState<FormData>({
    withdrawnBy: "",
    deliveredBy: "",
    products: "",
    date: "",
    time: "",
  });

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


  const [assisteds, setAssisteds] = useState([])

  useEffect(() => {
    const GetAssisteds = async () => {
      setAssisteds(await getAllAssisteds())
    };

    GetAssisteds()
  }, [])

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        Cadastro Movimentações
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Controller
            name="assisteds_list"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth variant="outlined" error={!!errors.assisteds_list}>
                <InputLabel>Assistidos</InputLabel>
                <Select
                  {...field}
                  
                  value={field.value || ""}  // Assegura que o valor inicial seja uma string vazia caso não haja valor
                  label="Assistidos"
                >
                  {
                    assisteds.map((item : IAssisteds, index)  => {
                      return (
                        <>
                          <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                        </>
                      )
                    })
                  }
                </Select>
                <FormHelperText>
                  {errors.assisteds_list ? 'Campo obrigatório' : ''}
                </FormHelperText>
              </FormControl>
            )}
            rules={{ required: true }}
          />
         
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Quem entregou a doação"
            name="deliveredBy"
            value={formData.deliveredBy}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Quem entregou a doação"
            name="deliveredBy"
            value={formData.deliveredBy}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Produtos levados"
            name="products"
            value={formData.products}
            onChange={handleChange}
            required
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Data"
            name="date"
            type="datetime-local"
            value={formData.date}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            required
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
