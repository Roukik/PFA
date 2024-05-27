import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function MesChantierCC() {
  // État pour le sélecteur
  const [age, setAge] = React.useState('');

  // Fonction de gestion des changements
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ padding: 6 }}>
      <TextField 
        fullWidth 
        variant="outlined" 
        placeholder="Recherche" 
        sx={{ marginBottom: 5, width: '70%' }} 
      />
      <Typography sx={{ fontSize: '40px', fontWeight: 'bold', marginBottom: 1 }}  >
        Vos chantiers
      </Typography>
      
      <FormControl fullWidth sx={{ marginBottom: 5 }}>
        <InputLabel id="demo-simple-select-label">Dernières modifications</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Dernières modifications"
          onChange={handleChange}
        >
          <MenuItem value={10}>Option 1</MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
          <MenuItem value={30}>Option 3</MenuItem>
        </Select>
      </FormControl>

      {[...Array(8)].map((_, index) => (
        <List 
          key={index}
          sx={{ 
            width: '200%', 
            maxWidth: 760, 
            bgcolor: 'background.paper', 
            borderRadius: '20px', 
            border: '1px solid grey', 
            mb: 2 // Ajoute une marge inférieure de 2 (unités MUI) entre chaque ListItem
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Chantier Paris Sud"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Typography sx={{ ml: 1 }}>12 membres</Typography>
                  </Box>
                  <Box>
                    
                  </Box>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      ))}
    </Box>
  );
}

export default MesChantierCC;
