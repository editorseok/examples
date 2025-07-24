import React from 'react';
import AppNavBar from '../components/AppNavBar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <AppNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
