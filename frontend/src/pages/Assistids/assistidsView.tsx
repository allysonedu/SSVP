import React, { useState, useEffect } from 'react';
import { TextField, Grid, Box, List, ListItem, ListItemText, Typography, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Dependente {
    nome: string;
    idade: string;
    relacao: string;
}

interface Cadastro {
    nome: string;
    cpf: string;
    dependentes: Dependente[];
}

export const ListAssistids: React.FC<{ cadastros: Cadastro[] }> = ({ cadastros }) => {
    const [filteredCadastros, setFilteredCadastros] = useState<Cadastro[]>(cadastros);
    const [searchNome, setSearchNome] = useState('');
    const [searchCpf, setSearchCpf] = useState('');
    const [searchDependente, setSearchDependente] = useState('');

    useEffect(() => {
        const filterCadastros = () => {
            let filtered = cadastros;

            if (searchNome) {
                filtered = filtered.filter(cadastro =>
                    cadastro.nome.toLowerCase().includes(searchNome.toLowerCase())
                );
            }

            if (searchCpf) {
                filtered = filtered.filter(cadastro =>
                    cadastro.cpf.toLowerCase().includes(searchCpf.toLowerCase())
                );
            }

            if (searchDependente) {
                filtered = filtered.filter(cadastro =>
                    cadastro.dependentes.some(dependente =>
                        dependente.nome.toLowerCase().includes(searchDependente.toLowerCase())
                    )
                );
            }

            setFilteredCadastros(filtered);
        };

        filterCadastros();
    }, [searchNome, searchCpf, searchDependente, cadastros]);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                Lista de Cadastros 
            </Typography>

            <Grid container spacing={2} sx={{ marginBottom: 2 }}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Pesquisar por Nome"
                        fullWidth
                        value={searchNome}
                        onChange={(e) => setSearchNome(e.target.value)}
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

                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Pesquisar por CPF"
                        fullWidth
                        value={searchCpf}
                        onChange={(e) => setSearchCpf(e.target.value)}
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

                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Pesquisar por Nome de Dependente"
                        fullWidth
                        value={searchDependente}
                        onChange={(e) => setSearchDependente(e.target.value)}
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
                            <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" color="primary.main">
                                            Nome: {cadastro.nome}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="subtitle1" color="primary.dark">
                                            CPF: {cadastro.cpf}
                                        </Typography>
                                    }
                                />
                                {cadastro.dependentes.length > 0 && (
                                    <Box sx={{ paddingLeft: 2, width: '100%' }}>
                                        <Typography variant="subtitle2" color="primary.main">
                                            Dependentes:
                                        </Typography>
                                        <List disablePadding sx={{ paddingLeft: 2 }}>
                                            {cadastro.dependentes.map((dependente, depIndex) => (
                                                <ListItem
                                                    key={depIndex}
                                                    sx={{
                                                        paddingLeft: 0,
                                                        paddingTop: 0,
                                                        paddingBottom: 0,
                                                        borderLeft: '4px solid',
                                                        borderColor: 'primary.light',
                                                        marginTop: 1,
                                                        marginBottom: 1,
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={
                                                            <Typography variant="body1" color="primary.dark">
                                                                - {dependente.nome} ({dependente.relacao})
                                                            </Typography>
                                                        }
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                )}
                            </ListItem>
                        </Paper>
                    ))
                )}
            </List>
        </Box>
    );
};



