import React from 'react';

import { AuthProvider } from './auth';
import { DrawerProvider } from './drawer';
import { AppThemeProvider } from './theme';
import { SnackbarProvider } from './SnackbarProvider';

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => (
  <AppThemeProvider>
    <SnackbarProvider>
      <AuthProvider>
        <DrawerProvider>{children}</DrawerProvider>
      </AuthProvider>
    </SnackbarProvider>
  </AppThemeProvider>
);

export { AppProvider };
