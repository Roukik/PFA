import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Divider } from '@mui/material';
import {
  DashboardOutlined,
  BuildOutlined,
  FolderOutlined,
  ChatOutlined,
  SettingsOutlined,
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon
} from '@mui/icons-material';
import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';


const Menu = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sharedOpen, setSharedOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSharedClick = () => {
    setSharedOpen(!sharedOpen);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
        {menuOpen && (
          <div style={{ width: 320 }}>
            <List>
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Menu" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemIcon>
                      <DashboardOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <BuildOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Chantiers" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <FolderOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Médiathèque" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ChatOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <SettingsOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Réglages" />
                  </ListItem>
                </List>
              </Collapse>
              <Divider />
              <ListItem button onClick={handleSharedClick}>
                <ListItemText primary="Fichiers partagés" />
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
          </div>
        )}
      </Box>
    </div>
  );
};

export default Menu;



