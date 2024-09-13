import { api } from '../shared/services/api';

import { IResetPassword } from '../shared/dtos';

const forgotPassword = async (email: string) => {
  try {
    const result = await api.post('/forgot_users', { email });

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const login = async (email: string, password: string) => {
  try {
    const result = await api.post('/login', {
      email,
      password,
    });
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const resetPassword = async ({ token, password }: IResetPassword) => {
  try {
    const result = await api.patch(`/reset_password_users/${token}`, {
      password,
    });

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

interface IUsersRegisterProps {
  name: string;
  email: string;
  password: string;
}

const users = async (data: IUsersRegisterProps) => {
  try {
    const result = await api.post('/users', data);

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

interface IAssistedsCreateProps {
  name: string;
  age: string;
  whatsapp: string;
  profession: string;
  district: string;
  cpf: string;
  Case_report: string;
  family_income: string;
  dependents: [{ nome: string; idade: string; relacao: string }];
  explain: string;
  Spouse: string;
  home: string;
  maritalStatus: string;
}

const createAssistids = async (data: IAssistedsCreateProps) => {
  try {
    const result = await api.post('/assistids', data);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { login, users, forgotPassword, resetPassword, createAssistids };
