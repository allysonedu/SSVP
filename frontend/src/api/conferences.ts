import { api } from '../shared/services/api';

import { IConferences } from '../shared/dtos/IConferences';



const createConferences = async (data: IConferences) => {
  try {
    const result = await api.post('/conferences',  data );

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateConferences = async (data: IConferences) => {
  try {
    const result = await api.put(`/conferences/${data.id}`, data);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteConferences = async (id: number) => {
  try {
    const result = await api.delete(`/conferences/${id}`);

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};


const getAllConferences = async () => {
  try {
   
    const result = await api.get('/conferences');
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getOneConferences = async (id: Number) => {
  try {

    return await api.get(`/conferences/${id}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { createConferences, deleteConferences, updateConferences, getAllConferences, getOneConferences };
