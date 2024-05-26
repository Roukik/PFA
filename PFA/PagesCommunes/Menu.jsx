import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, Collapse, Divider } from '@mui/material';
import { Menu as MenuIcon, DashboardOutlined, BuildOutlined, FolderOutlined, ChatOutlined, SettingsOutlined, ExpandLess, ExpandMore } from '@mui/icons-material';

const Menu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sharedOpen, setSharedOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSharedClick = () => {
    setSharedOpen(!sharedOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={handleMenuClick}>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            {menuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={menuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <DashboardOutlined />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <BuildOutlined />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FolderOutlined />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ChatOutlined />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsOutlined />
                </ListItemIcon>
              </ListItem>
            </List>
          </Collapse>
          <Divider />
          <ListItem button onClick={handleSharedClick}>
            <ListItemIcon>
              <FolderOutlined />
            </ListItemIcon>
            {sharedOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={sharedOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Chantiers ParisS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Chantiers Ballot" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Chantiers Ivry" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </Box>
  );
};

export default Menu;


