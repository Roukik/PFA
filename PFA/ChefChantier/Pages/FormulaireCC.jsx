import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, TextField, Grid, Box, Card, CardContent, IconButton } from '@mui/material';
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

const FormulaireCC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/formulairecc2');
  };

  return (
    <Content>
      <Typography variant="h4">Enregistrez un nouveau !</Typography>
      <WelcomeText variant="h6" style={{ marginTop: 20 }}>
        Step 01
      </WelcomeText>
      <Typography variant="body1">Informations principales du bâtiment*</Typography>
      <TextField fullWidth label="Nom du chantier" margin="normal" />
      <TextField fullWidth label="Référence du chantier" margin="normal" />
      <TextField fullWidth label="Adresse" margin="normal" />
      <TextField fullWidth label="N°" margin="normal" />
      <TextField fullWidth label="Code postal" margin="normal" />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Démarrez l’état des lieux
        </Button>
      </Box>
    </Content>
  );
};

export default FormulaireCC;
