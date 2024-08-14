import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import { OpenRoutes } from './routes/OpenRoutes'

import './global.css'

export const App: React.FC = () => (
  <>
  <BrowserRouter>
  <OpenRoutes />

  </BrowserRouter>
  </>
)
