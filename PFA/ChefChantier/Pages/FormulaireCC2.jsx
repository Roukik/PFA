import React, { useState } from 'react';
import {
  Typography,
  Button,
  TextField,
  Grid,
  Box,
  Card,
  CardContent,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper
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

const steps = [
  {
    label: 'Définissez les détails de la pièce',
    description: 'Saisissez les informations sur le type de pièce, le nombre de pièces, etc.',
  },
  {
    label: 'Définissez les murs et les ouvertures',
    description: 'Ajoutez des murs, des fenêtres, des portes, et définissez leurs caractéristiques.',
  },
  {
    label: 'Téléchargez des images',
    description: 'Téléchargez des images de la pièce et ajoutez des liens URL si nécessaire.',
  },
];

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
  const [activeStep, setActiveStep] = useState(0);

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Content>
      <Typography variant="h4">Commencez l’état des lieux !</Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {rooms.map((room, roomIndex) => (
                <StyledCard key={roomIndex}>
                  <CardContent>
                    <WelcomeText variant="h6">Step {roomIndex + 1}</WelcomeText>
                    {index === 0 && (
                      <>
                        <FormControl fullWidth margin="normal">
                          <InputLabel>Type de pièce</InputLabel>
                          <Select
                            name="type"
                            value={room.type}
                            onChange={(e) => handleInputChange(roomIndex, e)}
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
                          onChange={(e) => handleInputChange(roomIndex, e)} 
                        />
                        <FormControl fullWidth margin="normal">
                          <InputLabel>Antécédents des pièces</InputLabel>
                          <Select
                            name="elements"
                            value={room.elements}
                            onChange={(e) => handleInputChange(roomIndex, e)}
                          >
                            <MenuItem value="aucun">Aucun</MenuItem>
                            <MenuItem value="neuf">Neuf</MenuItem>
                            <MenuItem value="ancien">Ancien</MenuItem>
                          </Select>
                        </FormControl>
                      </>
                    )}
                    {index === 1 && (
                      <>
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
                                  onChange={(e) => handleWallChange(roomIndex, wallIndex, e)}
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
                                onChange={(e) => handleWallChange(roomIndex, wallIndex, e)} 
                              />
                            </Grid>
                          </Grid>
                        ))}
                        <Button variant="outlined" color="primary" onClick={() => handleAddWall(roomIndex)}>
                          Ajouter un mur
                        </Button>
                        <TextField 
                          fullWidth 
                          label="Épaisseur du mur (cm)" 
                          margin="normal" 
                          type="number" 
                          name="thickness" 
                          value={room.thickness} 
                          onChange={(e) => handleInputChange(roomIndex, e)} 
                        />
                        <TextField 
                          fullWidth 
                          label="Nombre de fenêtres" 
                          margin="normal" 
                          type="number" 
                          name="windows" 
                          value={room.windows} 
                          onChange={(e) => handleInputChange(roomIndex, e)} 
                        />
                        <TextField 
                          fullWidth 
                          label="Nombre de portes" 
                          margin="normal" 
                          type="number" 
                          name="doors" 
                          value={room.doors} 
                          onChange={(e) => handleInputChange(roomIndex, e)} 
                        />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <Typography variant="body1" style={{ marginTop: 20 }}>
                          Téléchargez des images
                        </Typography>
                        <Button variant="outlined" component="label" fullWidth style={{ marginTop: 10 }}>
                          Faites glisser vos fichiers ou parcourez les
                          <input 
                            type="file" 
                            hidden 
                            multiple 
                            onChange={(e) => handleFileChange(roomIndex, e)} 
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
                      </>
                    )}
                  </CardContent>
                </StyledCard>
              ))}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Terminer' : 'Continuer'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Retour
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Toutes les étapes sont terminées - vous avez fini</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Réinitialiser
          </Button>
        </Paper>
      )}
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

