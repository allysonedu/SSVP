import { ListConferences } from './conferencesView';
export const ConferencePage: React.FC = () => {
  const cadastros = [
    {
      name: 'Mariza de Angelis',
      email: 'allyson@gmail',
    },
    // ... outros cadastros
  ];

  return (
    <div style={{ marginTop: '100px' }}>
      <ListConferences cadastros={cadastros} />
    </div>
  );
};
