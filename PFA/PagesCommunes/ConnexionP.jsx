import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link'; 
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image1 from '../PagesCommunes/ImagePC/image1.svg'
import { Link as RouterLink } from 'react-router-dom'; 
import '../PagesCommunes/stylePC/Connexion.css';
import Logo from '../PagesCommunes/ImagePC/Logo.svg'


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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }} className='MainContainer'>
        <CssBaseline />
        <div className='gauche'>
           <img src={Logo} alt="" className='Logo' />
            <img src={image1} alt="" className="image" />
         </div>
        <Grid className='prtgauche'
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor:'#E7ECF5',
            
          }}
        />

        <Grid item xs={12} sm={8} md={5.5} component={Paper} elevation={6} square className='prtdroite'  >
          <Box
            sx={{
              my: 30,
              mx: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
             
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#525FE1' , marginTop:'460px'}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Connectez vous à BuildCheck.
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
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
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
