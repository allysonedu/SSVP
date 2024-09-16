import { api } from '../shared/services/api';

import { IMovements } from '../shared/dtos/IMovements';



const createMovements = async (data: IMovements) => {
  try {
    const result = await api.post('/conferences',  data );

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateMovements = async (data: IMovements) => {
  try {
    const result = await api.put(`/conferences/${data.id}`, data);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteMovements = async (id: number) => {
  try {
    const result = await api.delete(`/conferences/${id}`);

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};


const getAllMovements = async () => {
  try {
   
    const result = await api.get('/conferences');
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getOneMovements = async (id: Number) => {
  try {

    return await api.get(`/conferences/${id}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { createMovements, deleteMovements, updateMovements, getAllMovements, getOneMovements };
