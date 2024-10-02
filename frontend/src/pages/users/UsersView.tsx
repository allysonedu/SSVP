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

interface UsersView {
  id: number;
  name: string;
  email: string;
  username: string;
  // cep: string;
  // state: string;
}

export const ListUsers: React.FC<{ usersView: UsersView[] }> = ({
  usersView,
}) => {
  const [filteredUsersView, setFilteredUsersView] =
    useState<UsersView[]>(usersView);
  const [searchName, setSearchName] = useState('');

  const navigate = useNavigate();

  const handleListItemClick = (id: number) => {
    navigate(`/users/${id}`);
  };

  useEffect(() => {
    const filterUsersView = () => {
      let filtered = usersView;

      if (searchName) {
        filtered = filtered.filter(usersView =>
          usersView.name.toLowerCase().includes(searchName.toLowerCase())
        );
      }
      setFilteredUsersView(filtered);
    };
    filterUsersView();
  }, [searchName, usersView]);

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={12}>
          <Button
            type="button"
            onClick={() => {
              navigate('/users');
            }}
            variant="contained"
            color="primary"
          >
            Novo Usúario
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Pesquisar por Usúario"
            fullWidth
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
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
        {filteredUsersView.length === 0 ? (
          <Typography>Nenhum Usúario encontrado.</Typography>
        ) : (
          filteredUsersView.map((usersView, index) => (
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
                onClick={() => handleListItemClick(usersView.id)}
              >
                <ListItemText
                  primary={
                    <Typography variant="h6" color="primary.main">
                      Usúario: {usersView.name}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle1" color="primary.dark">
                      Email: {usersView.email}
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
