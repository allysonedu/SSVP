import { useEffect, useState } from 'react';
import { ListMovements } from './movementsView';
import { getAllMovements } from '../../api/movements';

export const MovementsPage: React.FC = () => {
  const [movements, setMovimentss] = useState([])

  useEffect(() => {
    const GetMoviments = async () => {
      setMovimentss(await getAllMovements())
    };
   
   GetMoviments()
  }, [])
  
  return (
    <div style={{ marginTop: '100px' }}>
      <ListMovements cadastros={movements} />
    </div>
  );
};
