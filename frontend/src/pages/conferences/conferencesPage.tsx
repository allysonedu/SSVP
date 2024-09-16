import { useEffect, useState } from 'react';
import { ListConferences } from './conferencesView';
import { getAllConferences } from '../../api/conferences';

export const ConferencePage: React.FC = () => {
  const [conferences, setConferences] = useState([])

  useEffect(() => {
    const GetConferences = async () => {
      setConferences(await getAllConferences())
    };
   
   GetConferences()
  }, [])
  
  return (
    <div style={{ marginTop: '100px' }}>
      <ListConferences cadastros={conferences} />
    </div>
  );
};
