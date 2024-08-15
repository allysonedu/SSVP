import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { OpenRoutes } from './routes/OpenRoutes'

import './global.css'

import Light from './shared/themes/Light'

export const App: React.FC = () => (
  <ThemeProvider theme={Light}>
  <BrowserRouter>
  <OpenRoutes />

  </BrowserRouter>
  </ThemeProvider>
)
