import { useEffect, useState } from 'react';
import { ListMovements } from './movementsView';
import { getAllMovements } from '../../api/movements';

export const MovementsPage: React.FC = () => {
  const [movements, setMoviments] = useState([])

  useEffect(() => {
    const GetMoviments = async () => {
      setMoviments(await getAllMovements())
    };
   
   GetMoviments()
  }, [])
  
  return (
    <div style={{ marginTop: '100px' }}>
      <ListMovements cadastros={movements} />
    </div>
  );
};
