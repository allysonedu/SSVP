import React from 'react';

import { BrowserRouter } from 'react-router-dom';



import { AppProvider } from './shared/hooks';

import { AppRoutes } from './routes/index';

import './global.css';

export const App: React.FC = () => (

  <AppProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProvider>

);
