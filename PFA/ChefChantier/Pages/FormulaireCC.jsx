import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, TextField, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const Content = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  flex: 1,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

const FullHeightGrid = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
}));

const FormulaireCC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/formulaireCC2');
  };

  return (
    <FullHeightGrid container>
      <Grid item xs={12} md={8} lg={6}>
        <Content>
          <Typography variant="h4" gutterBottom>
            Enregistrez un nouveau !
          </Typography>
          <Typography variant="h6" gutterBottom>
            Step 01
          </Typography>
          <Typography variant="body1" gutterBottom>
            Informations principales du bâtiment*
          </Typography>
          <TextField fullWidth label="Nom du chantier" margin="normal" />
          <TextField fullWidth label="Référence du chantier" margin="normal" />
          <TextField fullWidth label="Adresse" margin="normal" />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="N°" margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Code postal" margin="normal" />
            </Grid>
          </Grid>
          <Typography variant="body1" gutterBottom style={{ marginTop: 20 }}>
            Choisissez le type de bâtiment*
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" color="primary" fullWidth>Residentiel</Button>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" color="primary" fullWidth>Culturel</Button>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" color="primary" fullWidth>Santé</Button>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" color="primary" fullWidth>Industriel</Button>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" color="primary" fullWidth>Commercial</Button>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" color="primary" fullWidth>Transports</Button>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" color="primary" fullWidth>Public</Button>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Button variant="contained" color="primary" fullWidth>Educatif</Button>
            </Grid>
          </Grid>
          <Typography variant="body1" gutterBottom style={{ marginTop: 20 }}>
            Date de la durée du chantier
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth label="Date du début du chantier" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Date de la fin du chantier" type="date" InputLabelProps={{ shrink: true }} margin="normal" />
            </Grid>
          </Grid>
          <Typography variant="body1" gutterBottom style={{ marginTop: 20 }}>
            Informations concernant le bâtiment
          </Typography>
          <TextField fullWidth label="Nombre d'étages" type="number" margin="normal" />
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Démarrez l’état des lieux
            </Button>
          </Box>
        </Content>
      </Grid>
    </FullHeightGrid>
  );
};

export default FormulaireCC;

