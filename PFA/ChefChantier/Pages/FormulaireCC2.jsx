import React, { useState } from 'react';
import { Typography, Button, TextField, Grid, Box, Card, CardContent, IconButton, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/system';

const Content = styled('div')({
  margin: '20px',
});

const WelcomeText = styled(Typography)({
  fontWeight: 'bold',
});

const StyledCard = styled(Card)({
  marginBottom: 70,
});

const FormulaireCC2 = () => {
  const [rooms, setRooms] = useState([{
    type: '',
    pieces: 0,
    elements: '',
    width: 0,
    height: 0,
    length: 0,
    windows: 0,
    doors: 0,
    flooring: '',
    heating: '',
    images: [],
  }]);

  const handleAddRoom = () => {
    setRooms([...rooms, {
      type: '',
      pieces: 0,
      elements: '',
      width: 0,
      height: 0,
      length: 0,
      windows: 0,
      doors: 0,
      flooring: '',
      heating: '',
      images: [],
    }]);
  };

  const handleInputChange = (index, event) => {
    const newRooms = rooms.slice();
    newRooms[index][event.target.name] = event.target.value;
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
            <Typography variant="body1">Définissez le type de pièce(s)</Typography>
            <TextField
              fullWidth
              label="Type de pièce"
              margin="normal"
              name="type"
              value={room.type}
              onChange={(e) => handleInputChange(index, e)}
            />
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
                <MenuItem value="neuf">Neuf</MenuItem>
                <MenuItem value="ancien">Ancien</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Largeur (m)"
                  margin="normal"
                  type="number"
                  name="width"
                  value={room.width}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Hauteur (m)"
                  margin="normal"
                  type="number"
                  name="height"
                  value={room.height}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label="Longueur (m)"
                  margin="normal"
                  type="number"
                  name="length"
                  value={room.length}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </Grid>
            </Grid>
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
              <InputLabel>Type de plancher</InputLabel>
              <Select
                name="flooring"
                value={room.flooring}
                onChange={(e) => handleInputChange(index, e)}
              >
                <MenuItem value="wood">Bois</MenuItem>
                <MenuItem value="tile">Carrelage</MenuItem>
                <MenuItem value="carpet">Moquette</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Type d'échauffement</InputLabel>
              <Select
                name="heating"
                value={room.heating}
                onChange={(e) => handleInputChange(index, e)}
              >
                <MenuItem value="central">Central</MenuItem>
                <MenuItem value="electric">Électrique</MenuItem>
                <MenuItem value="none">Aucun</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body1" style={{ marginTop: 20 }}>
              Téléchargement des images
            </Typography>
            <Button variant="outlined" component="label" fullWidth style={{ marginTop: 10 }}>
              Upload File
              <input
                type="file"
                hidden
                multiple
                onChange={(e) => handleFileChange(index, e)}
              />
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
        <Button variant="contained" color="secondary">
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
