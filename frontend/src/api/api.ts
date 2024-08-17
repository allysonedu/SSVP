import { api } from '../shared/services/api';

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

export { login, users, forgotPassword };
