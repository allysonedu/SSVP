import React from 'react';
import { Container } from './styles';
import { BaseLayoutPage } from '../../shared/layouts';

export const Home: React.FC = () => {
  return (
    <BaseLayoutPage>
      <Container>
        <img src="ssvp.png" alt="ssvp.svg.png" />
        <h1>
          Bem-Vindo ao <span>Ally</span>
        </h1>
      </Container>
    </BaseLayoutPage>
  );
};
