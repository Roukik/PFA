import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import { styled } from '@mui/system';
import HomePageCC from '../../ChefChantier/Pages/HomePageCC';

const Root = styled('div')({
  display: 'flex',
});

const Layout = () => {
  return (
    <Root>
      <Menu />
      <HomePageCC />
    </Root>
  );
};

export default Layout;

