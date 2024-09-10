import { api } from '../shared/services/api';

import { IAssisteds } from '../shared/dtos/IAssisteds';



const createAssisteds = async (data: IAssisteds) => {
  try {
    const result = await api.post('/assisteds',  data );

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updateAssisteds = async (data: IAssisteds) => {
  try {
    const result = await api.put(`/assisteds/${data.id}`, data);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteAssisteds = async (id: number) => {
  try {
    const result = await api.delete(`/assisteds/${id}`);

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};


const getAllAssisteds = async () => {
  try {
   
    const result = await api.get('/assisteds');
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getOneAssisteds = async (id: Number) => {
  try {
    const result = await api.get(`/assisteds/${id}`);
    
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { createAssisteds, deleteAssisteds, updateAssisteds, getAllAssisteds, getOneAssisteds };
