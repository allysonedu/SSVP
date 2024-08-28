import React from 'react';

import { AuthProvider } from './auth';
import { DrawerProvider } from './drawer';

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => (
  <AuthProvider>
    <DrawerProvider>{children}</DrawerProvider>
  </AuthProvider>
);

export { AppProvider };
