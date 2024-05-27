import React from 'react';
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

const Formulaire2 = () => {
  return (
    <Content>
      <Typography variant="h4">Commencez l’état des lieux !</Typography>
      <WelcomeText variant="h6" style={{ marginTop: 20 }}>
        Step 02
      </WelcomeText>
      <Typography variant="body1">Premier type de pièce(s)</Typography>
      <TextField fullWidth label="Type de pièce" margin="normal" />
      <TextField fullWidth label="Nombre de pièces" margin="normal" />
      <Box mt={2}>
        <Button variant="contained" color="primary">
          Ajouter une pièce
        </Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained" color="primary">
          Enregistrer
        </Button>
      </Box>
    </Content>
  );
};

export default Formulaire2;
