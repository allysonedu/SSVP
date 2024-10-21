import { api } from '../shared/services/api';

import { IHelpingHands } from '../shared/dtos/IHelpingHands';

const createHelpingHands = async (data: IHelpingHands) => {
  try {
    const result = await api.post('/helping_hands', data);
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export { createHelpingHands };
