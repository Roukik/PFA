import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, Divider } from '@mui/material';
import {
  DashboardOutlined,
  BuildOutlined,
  FolderOutlined,
  ChatOutlined,
  SettingsOutlined,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [sharedOpen, setSharedOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSharedClick = () => {
    setSharedOpen(!sharedOpen);
  };

  return (
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
  );
};

export default Menu;

