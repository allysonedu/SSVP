import { api } from '../shared/services/api';

import { IPosition } from '../shared/dtos/IPosition';



const createPositions = async (data: IPosition) => {
  try {
    const result = await api.post('/positions',  data );

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const updatePositions = async (data: IPosition) => {
  try {
    const result = await api.put(`/positions/${data.id}`, data);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deletePositions = async (id: number) => {
  try {
    const result = await api.delete(`/positions/${id}`);

    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};


const getAllPositions = async () => {
  try {
   
    const result = await api.get('/positions');
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getOnePositions = async (id: Number) => {
  try {

    return await api.get(`/positions/${id}`);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { createPositions, deletePositions, updatePositions, getAllPositions, getOnePositions };
