import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn, SignUp } from '../pages'

export const OpenRoutes: React.FC = () => {
  return(
    <Routes>
     
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/" />} />


    </Routes>
  )
}
