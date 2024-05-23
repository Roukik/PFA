// PagesCommunes/Menu.jsx
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore, Dashboard, Folder, Chat, Settings } from '@mui/icons-material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const Menu = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List>
        <StyledLink to="/app/maincontent">
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </StyledLink>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
          <ListItemText primary="Chantiers" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledLink to="/app/fonctionnalite1">
              <ListItem button style={{ paddingLeft: 32 }}>
                <ListItemText primary="Chantiers ParisS" />
              </ListItem>
            </StyledLink>
            <StyledLink to="/app/fonctionnalite2">
              <ListItem button style={{ paddingLeft: 32 }}>
                <ListItemText primary="Chantiers Ballot" />
              </ListItem>
            </StyledLink>
            <StyledLink to="/app/fonctionnalite3">
              <ListItem button style={{ paddingLeft: 32 }}>
                <ListItemText primary="Chantiers Ivry" />
              </ListItem>
            </StyledLink>
          </List>
        </Collapse>
        <StyledLink to="/app/chat">
          <ListItem button>
            <ListItemIcon>
              <Chat />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/app/settings">
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Réglages" />
          </ListItem>
        </StyledLink>
      </List>
    </div>
  );
};

export default Menu;
