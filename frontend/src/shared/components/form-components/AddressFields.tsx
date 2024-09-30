import React from 'react';
import { Grid, TextField } from '@mui/material';
import { Controller, Control, FieldErrors } from 'react-hook-form';

type AddressFieldsProps = {
  control: Control<any>;
  errors: FieldErrors<any>;
};

const AddressFields: React.FC<AddressFieldsProps> = ({ control, errors }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              label="Endereço"
              fullWidth
              error={!!errors.address}
              helperText={errors.address ? 'Campo obrigatório' : ''}
            />
          )}
          rules={{ required: true }}
        />
      </Grid>

      <Grid item xs={1} sm={1}>
        <Controller
          name="address_number"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              label="Número"
              fullWidth
              error={!!errors.address_number}
              helperText={errors.address_number ? 'Campo obrigatório' : ''}
            />
          )}
          rules={{ required: true }}
        />
      </Grid>

      <Grid item xs={12} sm={2}>
        <Controller
          name="neighborhood"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              label="Bairro"
              fullWidth
              error={!!errors.neighborhood}
              helperText={errors.neighborhood ? 'Campo obrigatório' : ''}
            />
          )}
          rules={{ required: true }}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Controller
          name="zip_code"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              label="CEP"
              fullWidth
              error={!!errors.zip_code}
              helperText={errors.zip_code ? 'Campo obrigatório' : ''}
            />
          )}
          rules={{ required: true }}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Controller
          name="address_complement"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              label="Complemento"
              fullWidth
              error={!!errors.address_complement}
              helperText={errors.address_complement ? 'Campo obrigatório' : ''}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
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
              label="UF"
              fullWidth
              error={!!errors.state}
              helperText={errors.state ? 'Campo obrigatório' : ''}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="standard"
              label="País"
              fullWidth
              error={!!errors.country}
              helperText={errors.country ? 'Campo obrigatório' : ''}
            />
          )}
          rules={{ required: true }}
        />
      </Grid>
    </>
  );
};

export default AddressFields;
