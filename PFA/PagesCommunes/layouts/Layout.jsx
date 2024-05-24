import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import { styled } from '@mui/system';
import MainContent from '../components/MainContent';

const Root = styled('div')({
  display: 'flex',
});

const Layout = () => {
  return (
    <Root>
      <Menu />
      <MainContent />
    </Root>
  );
};

export default Layout;

