import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { AppProvider } from './shared/hooks';

import { AppRoutes } from './routes/index';

import './global.css';

import Light from './shared/themes/Light';

export const App: React.FC = () => (
  <ThemeProvider theme={Light}>
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  </ThemeProvider>
);
