import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import { Box, CssBaseline } from '@mui/material';

export default function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Menu />
        <Outlet />
      </Box>

  );
}
