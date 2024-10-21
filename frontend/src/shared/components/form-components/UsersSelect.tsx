import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

import { IUser } from '../../dtos';



// Definindo a interface das props do componente
interface UsersSelectProps {
  control: Control<any>; // O controle vindo do useForm
  name: string;          // Nome do campo
  users: IUser[]; // A lista de assistidos que será exibida no select
  error?: boolean;       // Se existe erro no campo
  errorMessage?: string;
  hasMandate?: Function; // Caso o cargo tenha mandato ou não
}

const UsersSelect: React.FC<UsersSelectProps> = ({ control, name, users, error, errorMessage, hasMandate }) => {

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth variant="outlined" error={error}>
          <InputLabel>Usuários</InputLabel>
          <Select
            {...field}
            value={field.value || ""}  // Garantindo que o valor inicial seja uma string vazia se não houver valor
            label="Usuários"
          
          >
            {users.map((item, index) => (
              <MenuItem key={item.id} value={Number(item.id)}>
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

export default UsersSelect;
