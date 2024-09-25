import React, { useState, useEffect } from 'react';
import {
  TextField,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  InputAdornment,
  Paper,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { IPosition } from '../../shared/dtos/IPosition';


export const ListPositions: React.FC<{ cadastros: IPosition[] }> = ({
  cadastros,
}) => {
  const [filteredCadastros, setFilteredCadastros] =
    useState<IPosition[]>(cadastros);
  const [searchNome, setSearchNome] = useState('');

  const navigate = useNavigate();

  const handleListItemClick = (id: number) => {
    navigate(`/positions/${id}`);
  };

  useEffect(() => {
    const filterCadastros = () => {
      let filtered = cadastros;

      if (searchNome) {
        filtered = filtered.filter(cadastro =>
          cadastro.positionName.toLowerCase().includes(searchNome.toLowerCase())
        );
      }
      setFilteredCadastros(filtered);
    };
    filterCadastros();
  }, [searchNome, cadastros]);

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={12} >
          <Button type="button" onClick={() => { navigate("/positions") }} variant="contained" color="primary">
            Novo Cargo
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Pesquisar por Cargos"
            fullWidth
            value={searchNome}
            onChange={e => setSearchNome(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'primary.main',
                },
                '&:hover fieldset': {
                  borderColor: 'primary.dark',
                },
              },
            }}
          />
        </Grid>
      </Grid>

      <List sx={{ padding: 0 }}>
        {filteredCadastros.length === 0 ? (
          <Typography>Nenhum cadastro encontrado.</Typography>
        ) : (
          filteredCadastros.map((cadastro, index) => (
            <Paper
              key={index}
              sx={{
                marginBottom: 2,
                padding: 2,
                border: '1px solid',
                borderColor: 'primary.light',
                backgroundColor: 'primary.lighter',
              }}
            >
              <ListItem
                sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
                onClick={() => handleListItemClick(cadastro.id)}
              >
                <ListItemText
                  primary={
                    <Typography variant="h6" color="primary.main">
                      Cargo: {cadastro.positionName}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle1" color="primary.dark">
                      
                      Possui Mandato: {cadastro.hasMandate ? "Sim" : "Não"}
                    </Typography>
                  }
                />
              </ListItem>
            </Paper>
          ))
        )}
      </List>
    </Box>
  );
};
