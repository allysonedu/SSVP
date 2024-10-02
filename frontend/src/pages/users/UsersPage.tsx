import { useEffect, useState } from 'react';

import { ListUsers } from './UsersView';

import { getAllUsers } from '../../api/api';

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const GetUsers = async () => {
      setUsers(await getAllUsers());
    };
    GetUsers();
  }, []);

  return (
    <div style={{ marginTop: '100px' }}>
      <ListUsers usersViews={users} />
    </div>
  );
};
