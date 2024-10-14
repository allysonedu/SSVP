import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { IConferences } from '../../dtos/IConferences';
import { useAuth } from '../../hooks/auth';



// Definindo a interface das props do componente
interface ConferencesSelectProps {
  control: Control<any>; // O controle vindo do useForm
  name: string;          // Nome do campo
  conferences: IConferences[]; // A lista de assistidos que será exibida no select
  error?: boolean;       // Se existe erro no campo
  errorMessage?: string; // Mensagem de erro personalizada
}

const ConferencesSelect: React.FC<ConferencesSelectProps> = ({ control, name, conferences, error, errorMessage }) => {
  const { user } = useAuth();

  const defaultConference = user.conference_id || ""



  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth variant="outlined" error={error}>
          <InputLabel>Conferências</InputLabel>
          <Select
            {...field}
            value={field.value || defaultConference}  // Garantindo que o valor inicial seja uma string vazia se não houver valor
            label="Conferências"
          >
            {conferences.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{errorMessage}</FormHelperText>
        </FormControl>
      )}
      rules={{ required: true }} // Validação: obrigatório
    />
  );
};

export default ConferencesSelect;
