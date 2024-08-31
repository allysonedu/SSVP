import React from 'react';
// import { Container } from './styles';
import { BaseLayoutPage } from '../../shared/layouts';
import logo from '../../assets/ssvp.png'
import { Box } from '@mui/material';

export const Home: React.FC = () => {
  return (
    <BaseLayoutPage>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"

        >
          <h1>
          Bem-Vindo 
        </h1>
        <img  style={{ maxWidth: '100%', maxHeight: '100%', width:"1000px"}}  src={logo} alt="ssvp.svg.png" />
        
      </Box>
    </BaseLayoutPage>
  );
};
