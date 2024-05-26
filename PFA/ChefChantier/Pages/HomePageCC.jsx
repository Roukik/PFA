import React from 'react';
import { Typography, Button, Grid, Card, CardContent, CardActions, TextField, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import Imagebat2 from '../../PagesCommunes/ImagePC/imagebat2.png';

const Content = styled('div')({
  padding: 20,
  flex: 1,
});

const WelcomeText = styled(Typography)({
  marginBottom: 20,
});

const StyledCard = styled(Card)({
  marginBottom: 20,
});

const HomePageCC = () => {
  return (
    <Content>
      <TextField fullWidth variant="outlined" placeholder="Recherche" style={{ marginBottom: 20 }} />
      <WelcomeText variant="h4">
        Bienvenue, <span style={{ color: '#5a5dff' }}>Alexandre Brown ! (le plaquiste)</span>
      </WelcomeText>
      <WelcomeText variant="body1">
        Dans cette application vous retrouverez...
      </WelcomeText>
      <Typography variant="h5" style={{ marginBottom: 20 }}>
        Vos fichiers
      </Typography>
      <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
        Chantiers ParisS
      </Button>
      <Button variant="contained" color="primary" style={{ marginRight: 10 }}>
        Chantiers Ivry
      </Button>
      <Typography variant="h5" style={{ marginBottom: 20 }}>
        Chantiers récemment ajoutés
      </Typography>
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        {[1, 2, 3].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardMedia
                sx={{ height: 140 }}
                image={Imagebat2}
                title="Chantiers récemment ajoutés"
              />
              <CardContent>
                <Typography variant="h6">Chantiers x</Typography>
                <Typography variant="body2">Lorem ipsum lorem</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" style={{ marginBottom: 20 }}>
        Vos chantiers
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6">Nouveau chantier</Typography>
                <Typography variant="body2">Créez le nouvel espace de votre futur chantier</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  +
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Content>
  );
};

export default HomePageCC;
