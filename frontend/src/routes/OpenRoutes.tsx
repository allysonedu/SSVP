import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import {
  SignIn,
  SignUp,
  ForgotPassword,
  ResetPassword
} from '../pages';

export const OpenRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
