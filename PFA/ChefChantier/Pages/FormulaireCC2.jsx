import React, { useState } from 'react';
import { 
  Typography, 
  Button, 
  TextField, 
  Grid, 
  Box, 
  Card, 
  CardContent, 
  IconButton, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl 
} from '@mui/material';
import { styled } from '@mui/system';

const Content = styled('div')({
  padding: 20,
  flex: 1,
});

const WelcomeText = styled(Typography)({
  marginBottom: 40,
});

const StyledCard = styled(Card)({
  marginBottom: 70,
});

const FormulaireCC2 = () => {
  const [rooms, setRooms] = useState([{
    type: '',
    pieces: 0,
    elements: '',
    walls: [{ type: '', length: 0 }],
    thickness: 0,
    windows: 0,
    doors: 0,
    flooring: '',
    heating: '',
    images: []
  }]);

  const handleAddRoom = () => {
    setRooms([...rooms, {
      type: '',
      pieces: 0,
      elements: '',
      walls: [{ type: '', length: 0 }],
      thickness: 0,
      windows: 0,
      doors: 0,
      flooring: '',
      heating: '',
      images: []
    }]);
  };

  const handleInputChange = (index, event) => {
    const newRooms = rooms.slice();
    newRooms[index][event.target.name] = event.target.value;
    setRooms(newRooms);
  };

  const handleWallChange = (roomIndex, wallIndex, event) => {
    const newRooms = rooms.slice();
    newRooms[roomIndex].walls[wallIndex][event.target.name] = event.target.value;
    setRooms(newRooms);
  };

  const handleAddWall = (roomIndex) => {
    const newRooms = rooms.slice();
    newRooms[roomIndex].walls.push({ type: '', length: 0 });
    setRooms(newRooms);
  };

  const handleFileChange = (index, event) => {
    const newRooms = rooms.slice();
    newRooms[index].images = Array.from(event.target.files);
    setRooms(newRooms);
  };

  return (
    <Content>
      <Typography variant="h4">Commencez l’état des lieux !</Typography>
      {rooms.map((room, index) => (
        <StyledCard key={index}>
          <CardContent>
            <WelcomeText variant="h6">Step {index + 1}</WelcomeText>
            <Typography variant="body1">Premier type de pièce(s)</Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel>Type de pièce</InputLabel>
              <Select
                name="type"
                value={room.type}
                onChange={(e) => handleInputChange(index, e)}
              >
                <MenuItem value="cuisine">Cuisine</MenuItem>
                <MenuItem value="toilettes">Toilettes</MenuItem>
                <MenuItem value="pièce simple">Pièce simple</MenuItem>
                <MenuItem value="escaliers">Escaliers</MenuItem>
                <MenuItem value="salle de bain">Salle de bain</MenuItem>
                <MenuItem value="ascenseur">Ascenseur</MenuItem>
              </Select>
            </FormControl>
            <TextField 
              fullWidth 
              label="Nombre de pièces" 
              margin="normal" 
              type="number" 
              name="pieces" 
              value={room.pieces} 
              onChange={(e) => handleInputChange(index, e)} 
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Antécédents des pièces</InputLabel>
              <Select
                name="elements"
                value={room.elements}
                onChange={(e) => handleInputChange(index, e)}
              >
                <MenuItem value="aucun">Aucun</MenuItem>
                <MenuItem value="neuf">Neuf</MenuItem>
                <MenuItem value="ancien">Ancien</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Définissez le type et la longueur de chaque mur
            </Typography>
            {room.walls.map((wall, wallIndex) => (
              <Grid container spacing={2} key={wallIndex}>
                <Grid item xs={6}>
                  <FormControl fullWidth margin="normal">
                    <InputLabel>Type</InputLabel>
                    <Select
                      name="type"
                      value={wall.type}
                      onChange={(e) => handleWallChange(index, wallIndex, e)}
                    >
                      <MenuItem value="type1">Type 1</MenuItem>
                      <MenuItem value="type2">Type 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    fullWidth 
                    label="Longueur (cm)" 
                    margin="normal" 
                    type="number" 
                    name="length" 
                    value={wall.length} 
                    onChange={(e) => handleWallChange(index, wallIndex, e)} 
                  />
                </Grid>
              </Grid>
            ))}
            <Button variant="outlined" color="primary" onClick={() => handleAddWall(index)}>
              Ajouter un mur
            </Button>
            <TextField 
              fullWidth 
              label="Épaisseur du mur (cm)" 
              margin="normal" 
              type="number" 
              name="thickness" 
              value={room.thickness} 
              onChange={(e) => handleInputChange(index, e)} 
            />
            <TextField 
              fullWidth 
              label="Nombre de fenêtres" 
              margin="normal" 
              type="number" 
              name="windows" 
              value={room.windows} 
              onChange={(e) => handleInputChange(index, e)} 
            />
            <TextField 
              fullWidth 
              label="Nombre de portes" 
              margin="normal" 
              type="number" 
              name="doors" 
              value={room.doors} 
              onChange={(e) => handleInputChange(index, e)} 
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Type de plafond</InputLabel>
              <Select
                name="flooring"
                value={room.flooring}
                onChange={(e) => handleInputChange(index, e)}
              >
                <MenuItem value="sous plafond">Sous plafond</MenuItem>
                <MenuItem value="plafond suspendu">Plafond suspendu</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Type d'isolation</InputLabel>
              <Select
                name="heating"
                value={room.heating}
                onChange={(e) => handleInputChange(index, e)}
              >
                <MenuItem value="extérieur">Extérieur</MenuItem>
                <MenuItem value="intérieur">Intérieur</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Téléchargez des images
            </Typography>
            <Button variant="outlined" component="label"
            fullWidth style={{ marginTop: 10 }}>
            Faites glisser vos fichiers ou parcourez les
            <input 
              type="file" 
              hidden 
              multiple 
              onChange={(e) => handleFileChange(index, e)} 
            />
            </Button>
            <Typography variant="body2" style={{ marginTop: 10 }}>
            Ne prend en charge que les fichiers .jpg, .png, .svg et les fichiers zip
            </Typography>
            <Typography variant="body2" style={{ marginTop: 10 }}>
            ou
            </Typography>
            <TextField 
            fullWidth 
            label="Ajouter un lien URL" 
            margin="normal" 
            type="url" 
            />
            <Button variant="contained" color="secondary" style={{ marginTop: 10 }}>
            Télécharger
            </Button>
            </CardContent>
            </StyledCard>
            ))}
            <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleAddRoom}>
            Ajouter une pièce
            </Button>
            </Box>
            <Box mt={2}>
            <Button variant="contained" color="primary">
            Enregistrer
            </Button>
            </Box>
            <Box mt={2}>
            <Button variant="contained" color="secondary">
            Télécharger en .XLS
            </Button>
            </Box>
            </Content>
            );
            };

            export default FormulaireCC2;
