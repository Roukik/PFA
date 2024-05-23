import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu'
import { styled } from '@mui/system';

const Root = styled('div')({
  display: 'flex',
});

const Layout = () => {
  return (
    <Root>
      <Menu />
      <Outlet />
    </Root>
  );
};

export default Layout;

