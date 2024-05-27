import React from 'react';
import { Typography, Button, Grid, Card, CardContent, CardActions, TextField, CardMedia, IconButton, Box } from '@mui/material';
import { styled } from '@mui/system';
import Imagebat2 from '../../PagesCommunes/ImagePC/imagebat2.png';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FolderIcon from '@mui/icons-material/Folder';

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

const HomePageCC = () => {
  return (
    <Content>
      <TextField fullWidth variant="outlined" placeholder="Recherche" style={{ marginBottom: 20 }} className='SearchBar' />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5, marginTop: 5 }}>
        <TextField 
          variant="outlined" 
          placeholder="Recherche" 
          sx={{ width: '70%' }} 
        />
        <IconButton color="inherit" sx={{ marginLeft: 'auto' }}>
          <AccountCircle sx={{ fontSize: 60 }} />
        </IconButton>
      </Box>
      <WelcomeText variant="h4">
        Bienvenue, <span style={{ color: '#5a5dff' }}>Alexandre Brown ! (le plaquiste)</span>
      </WelcomeText>
      <WelcomeText variant="body1">
        Dans cette application, vous retrouverez...
      </WelcomeText>
      <Typography variant="h5" style={{ marginBottom: 20 , }}>
        Vos fichiers
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        style={{ marginRight: 10, marginBottom: 20, width:'35%', height:'6%',    sx: {fontSize: '25.0rem' }}}
        startIcon={<FolderIcon />}
      >
        Chantiers ParisS
      </Button>
      <Button 
        variant="contained" 
        color="primary" 
        style={{ marginRight: 10, marginBottom: 20, width:'35%', height:'6%'}}
        startIcon={<FolderIcon />}
      >
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
                <Button size="small">Détails</Button>
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
            <CardMedia
                sx={{ height: 140 }}
                image={Imagebat2}
                title="Chantiers récemment ajoutés"
              />
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


