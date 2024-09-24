import { useEffect, useState } from 'react';
import { ListPositions } from './positionsView';
import { getAllPositions } from '../../api/positions';

export const PositionsPage: React.FC = () => {
  const [positions, setPositions] = useState([])

  useEffect(() => {
    const GetPositions = async () => {
      setPositions(await getAllPositions())
    };
   
   GetPositions()
  }, [])
  
  return (
    <div style={{ marginTop: '100px' }}>
      <ListPositions cadastros={positions} />
    </div>
  );
};
