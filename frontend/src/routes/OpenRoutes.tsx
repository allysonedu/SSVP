import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn, SignUp, AssistidsAddEdit, List } from '../pages'

export const OpenRoutes: React.FC = () => {
  return(
    <Routes>
     
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/Assistids/Add" element={<AssistidsAddEdit />} />
      <Route path="/Assistids" element={<List />} />
      <Route path="*" element={<Navigate to="/" />} />


    </Routes>
  )
}
