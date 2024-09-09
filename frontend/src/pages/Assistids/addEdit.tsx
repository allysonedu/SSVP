import React from 'react';
import { useForm, Controller, useFieldArray, SubmitHandler } from 'react-hook-form';
import {
  TextField,
  Grid,
  Box,
  Button,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from '@mui/material';
import { IAssisteds } from '../../shared/dtos/IAssisteds';


import {createAssisteds} from "../,,/../../api/assisteds";
import { useParams } from 'react-router-dom';

export const AssistidsAddEdit: React.FC = () => {

  const { id } = useParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IAssisteds>({
    defaultValues: {
      dependents: [{ name: '', age: 0, relationship: '', assisted_id: Number(id)}] // valores iniciais para dependents
    }
  });




  const { fields, append, remove } = useFieldArray({
    control,
    name: 'dependents',  // Corrigido o nome do campo dependents
  });

  const onSubmit: SubmitHandler<IAssisteds> = (data) => {
    createAssisteds(data)
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 5, padding: 3 }}
    >
      <Typography variant="h6" gutterBottom>
        Cadastro de Sindicância
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
            name="cpf"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="CPF"
                fullWidth
                error={!!errors.cpf}
                helperText={errors.cpf ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Idade"
                fullWidth
                error={!!errors.age}
                helperText={errors.age ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="profession"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Profissão"
                fullWidth
                error={!!errors.profession}
                helperText={errors.profession ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="district"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Bairro"
                fullWidth
                error={!!errors.district}
                helperText={errors.district ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="maritalStatus"
            control={control}
            render={({ field }) => (
              <FormControl
                fullWidth
                variant="standard"
                error={!!errors.maritalStatus}
              >
                <InputLabel>Estado Civil</InputLabel>
                <Select {...field} variant="standard" label="Estado Civil">
                  <MenuItem value="solteiro">Solteiro(a)</MenuItem>
                  <MenuItem value="casado">Casado(a)</MenuItem>
                  <MenuItem value="separado">Separado(a)</MenuItem>
                </Select>
                <FormHelperText>
                  {errors.maritalStatus ? 'Campo obrigatório' : ''}
                </FormHelperText>
              </FormControl>
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="home"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth error={!!errors.home}>
                <InputLabel>Casa</InputLabel>
                <Select {...field} variant="standard" label="Casa">
                  <MenuItem value="propria">Própria</MenuItem>
                  <MenuItem value="alugada">Alugada</MenuItem>
                  <MenuItem value="gratuita">Gratuita</MenuItem>
                  <MenuItem value="parentes">Parentes/Outros</MenuItem>
                </Select>
                <FormHelperText>
                  {errors.home ? 'Campo obrigatório' : ''}
                </FormHelperText>
              </FormControl>
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="family_income"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Renda Familiar"
                fullWidth
                error={!!errors.family_income}
                helperText={errors.family_income ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          {fields.map((item, index) => (
            <Grid container spacing={2} key={item.id}>
              <Grid item xs={12} sm={4}>
                <Controller
                  name={`dependents.${index}.name`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="standard"
                      label={`Dependente ${index + 1} - Nome`}
                      fullWidth
                      error={!!errors.dependents?.[index]?.name}
                      helperText={
                        errors.dependents?.[index]?.name
                          ? 'Campo obrigatório'
                          : ''
                      }
                    />
                  )}
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Controller
                  name={`dependents.${index}.age`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="standard"
                      label="Idade"
                      fullWidth
                      error={!!errors.dependents?.[index]?.age}
                      helperText={
                        errors.dependents?.[index]?.age
                          ? 'Campo obrigatório'
                          : ''
                      }
                    />
                  )}
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Controller
                  name={`dependents.${index}.relationship`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="standard"
                      label="Parentesco"
                      fullWidth
                      error={!!errors.dependents?.[index]?.relationship}
                      helperText={
                        errors.dependents?.[index]?.relationship
                          ? 'Campo obrigatório'
                          : ''
                      }
                    />
                  )}
                  rules={{ required: true }}
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                append({ name: '', age: 0, relationship: '', assisted_id: Number(id) })
              }
            >
              Adicionar Dependente
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="explain"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="standard"
                label="Explique sua Situação"
                fullWidth
                multiline
                rows={4}
                error={!!errors.explain}
                helperText={errors.explain ? 'Campo obrigatório' : ''}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>
      </Grid>

      <Box mt={3}>
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Box>
    </Box>
  );
};
