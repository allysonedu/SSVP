import React, { useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawer } from '../shared/hooks/drawer';
import {
  Home,
  AssistidsPage,
  ConferencesAddEdit,
  ConferencePage,
  AssistidsAddEdit,
  UsersPage,
} from '../pages';

import { Users } from '../pages/users/Users';

import { MenuSideBar } from '../shared/components';
import { menu } from '../shared/utils/menu';
import { MovementsAddEdit } from '../pages/movements/addMovementsEdit';
import { MovementsPage } from '../pages/movements/movementsPage';
import { PositionsPage } from '../pages/positions/positionsPage';
import { PositionAddEdit } from '../pages/positions/positionsAddEdit';

export const PrivateRoutes: React.FC = () => {
  const { setDrawerOptions } = useDrawer();

  useEffect(() => {
    setDrawerOptions(menu);
  }, [setDrawerOptions]);

  return (
    <MenuSideBar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/assisteds-page" element={<AssistidsPage />} />
        <Route path="/assisteds" element={<AssistidsAddEdit />} />
        <Route path="/assisteds/:id" element={<AssistidsAddEdit />} />
        <Route path="/conferences" element={<ConferencesAddEdit />} />
        <Route path="/conferences/:id" element={<ConferencesAddEdit />} />
        <Route path="/conferencesView" element={<ConferencePage />} />
        <Route path="/positions" element={<PositionAddEdit />} />
        <Route path="/positions/:id" element={<PositionAddEdit />} />
        <Route path="/positionsView" element={<PositionsPage />} />
        <Route path="/movements" element={<MovementsAddEdit />} />
        <Route path="/movements/:id" element={<MovementsAddEdit />} />
        <Route path="/movementsView" element={<MovementsPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/usersView" element={<UsersPage />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </MenuSideBar>
  );
};
