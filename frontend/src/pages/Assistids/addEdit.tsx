import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { TextField, Grid, Box, Button, Typography, MenuItem, FormControl, InputLabel, Select, FormHelperText } from '@mui/material';

interface Dependente {
    nome: string;
    idade: string;
    relacao: string;
}

interface FormValues {
    nome: string;
    endereco: string;
    numero: string;
    bairro: string;
    cpf: string;
    estadoCivil: string;
    idade: string;
    profissao: string;
    dependentes: Dependente[];
    casa: string;
    rendaFamiliar: string;
    grauInstrucao: string;
    situacao: string;
}

export const AssistidsAddEdit: React.FC = () => {
    const { control, handleSubmit, formState: { errors }, register } = useForm<FormValues>({
        defaultValues: {
            nome: '',
            endereco: '',
            numero: '',
            bairro: '',
            cpf: '',
            estadoCivil: '',
            idade: '',
            profissao: '',
            dependentes: [{ nome: '', idade: '', relacao: '' }],
            casa: '',
            rendaFamiliar: '',
            grauInstrucao: '',
            situacao: '',
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "dependentes"
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3, padding: 3 }}>
            <Typography variant="h6" gutterBottom>Cadastro de Sindicância</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Controller
                        name="nome"
                        control={control}

                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant='standard'
                                label="Nome"
                                fullWidth
                                error={!!errors.nome}
                                helperText={errors.nome ? 'Campo obrigatório' : ''}
                            />
                        )}
                        rules={{ required: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Controller
                        name="endereco"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant='standard'
                                label="Endereço"
                                fullWidth
                                error={!!errors.endereco}
                                helperText={errors.endereco ? 'Campo obrigatório' : ''}
                            />
                        )}
                        rules={{ required: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Controller
                        name="numero"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant='standard'
                                label="Número"
                                fullWidth
                                error={!!errors.numero}
                                helperText={errors.numero ? 'Campo obrigatório' : ''}
                            />
                        )}
                        rules={{ required: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Controller
                        name="bairro"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant='standard'
                                label="Bairro"
                                fullWidth
                                error={!!errors.bairro}
                                helperText={errors.bairro ? 'Campo obrigatório' : ''}
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
                                variant='standard'
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
                        name="estadoCivil"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth variant='standard' error={!!errors.estadoCivil}>
                                <InputLabel>Estado Civil</InputLabel>
                                <Select {...field}
                                    variant='standard' label="Estado Civil">
                                    <MenuItem value="solteiro">Solteiro(a)</MenuItem>
                                    <MenuItem value="casado">Casado(a)</MenuItem>
                                    <MenuItem value="separado">Separado(a)</MenuItem>
                                </Select>
                                <FormHelperText>{errors.estadoCivil ? 'Campo obrigatório' : ''}</FormHelperText>
                            </FormControl>
                        )}
                        rules={{ required: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Controller
                        name="idade"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant='standard'
                                label="Idade"
                                fullWidth
                                error={!!errors.idade}
                                helperText={errors.idade ? 'Campo obrigatório' : ''}
                            />
                        )}
                        rules={{ required: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={12}>
                    <Controller
                        name="profissao"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant='standard'
                                label="Profissão"
                                fullWidth
                                error={!!errors.profissao}
                                helperText={errors.profissao ? 'Campo obrigatório' : ''}
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
                                    name={`dependentes.${index}.nome`}
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            variant='standard'
                                            label={`Dependente ${index + 1} - Nome`}
                                            fullWidth
                                            error={!!errors.dependentes?.[index]?.nome}
                                            helperText={errors.dependentes?.[index]?.nome ? 'Campo obrigatório' : ''}
                                        />
                                    )}
                                    rules={{ required: true }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Controller
                                    name={`dependentes.${index}.idade`}
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            variant='standard'
                                            label="Idade"
                                            fullWidth
                                            error={!!errors.dependentes?.[index]?.idade}
                                            helperText={errors.dependentes?.[index]?.idade ? 'Campo obrigatório' : ''}
                                        />
                                    )}
                                    rules={{ required: true }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Controller
                                    name={`dependentes.${index}.relacao`}
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            variant='standard'
                                            label="Relação"
                                            fullWidth
                                            error={!!errors.dependentes?.[index]?.relacao}
                                            helperText={errors.dependentes?.[index]?.relacao ? 'Campo obrigatório' : ''}
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
                        onClick={() => append({ nome: '', idade: '', relacao: '' })}
                    >
                        Adicionar Dependente
                    </Button>
                </Grid>
                </Grid>


                

                <Grid item xs={12} sm={6}>
                    <Controller
                        name="casa"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth error={!!errors.casa}>
                                <InputLabel>Casa</InputLabel>
                                <Select {...field}
                                    variant='standard' label="Casa">
                                    <MenuItem value="propria">Própria</MenuItem>
                                    <MenuItem value="alugada">Alugada</MenuItem>
                                    <MenuItem value="gratuita">Gratuita</MenuItem>
                                    <MenuItem value="parentes">Parentes/Outros</MenuItem>
                                </Select>
                                <FormHelperText>{errors.casa ? 'Campo obrigatório' : ''}</FormHelperText>
                            </FormControl>
                        )}
                        rules={{ required: true }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Controller
                        name="rendaFamiliar"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant='standard'
                                label="Renda Familiar"
                                fullWidth
                                error={!!errors.rendaFamiliar}
                                helperText={errors.rendaFamiliar ? 'Campo obrigatório' : ''}
                            />
                        )}
                        rules={{ required: true }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Controller
                        name="situacao"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                variant='standard'
                                label="Situação Sócio-Econômica"
                                fullWidth
                                multiline
                                rows={4}
                                error={!!errors.situacao}
                                helperText={errors.situacao ? 'Campo obrigatório' : ''}
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
