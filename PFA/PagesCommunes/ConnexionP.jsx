import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link'; 
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import image1 from '../PagesCommunes/ImagePC/image1.svg';
import Fonctionnalite1 from './Fonctionnalite1';

function ConnexionP() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully');

    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={4}
        md={7}
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#E7ECF5',
        }}
      >
        <div className='gauche' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <img src={image1} alt="" className="img1" style={{ maxWidth: '100%', maxHeight: '80%' }} />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ m: 6 }}>
          <Avatar sx={{ m: 1, bgcolor: '#525FE1' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connectez-vous à BuildCheck.
          </Typography>
          <Grid container>
            <Grid item xs>
              <Typography>
                Vous n'avez pas de compte ?
              </Typography>
              <Link href="#" variant="body2">
                Inscrivez-vous.
              </Link>
            </Grid>
          </Grid>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse e-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <RouterLink to="/Fonctionnalite1">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 8, mb: 3, bgcolor: '#525FE1' }}
              >
                Connexion
              </Button>
            </RouterLink>
            <ConnexionP sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  
  );
}

