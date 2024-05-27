import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
{/*import Fleche from '../imgChefChantier/Fleche.png';*/}
import '../styles/MesChantierCC.css';
import ImgChantier from '../imgChefChantier/imgChantier.png';
import Collab from '../imgChefChantier/Collaborateurs.png'
import {Link} from 'react-router-dom'

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
            maxWidth: 620, 
            bgcolor: 'background.paper', 
            borderRadius: '20px', 
            border: '1px solid grey', 
            mb: 2 // Ajoute une marge inférieure de 2 (unités MUI) entre chaque ListItem
          }}
        >
          <ListItem alignItems="flex-start">
            <img src={ImgChantier} alt="" className='imgChantier' />
            <ListItemText
              primary={
                <Typography sx={{ marginLeft: 2, fontSize: '28px', fontWeight: 'bold' }}>
                  Chantier Paris Sud
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 3 }}>
                      <img src={Collab} alt="" className='CollabImg' />
                      <Typography sx={{ ml: 1 }}>12 membres</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography>Depuis le 18 juin</Typography>
                      <Link to="/ParisS"  >
                        <img src={Fleche} alt="" className='btnFleche' />
                      </Link>
                    </Box>
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
