import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar1 from '../imgChefChantier/Avatar1.png'
import Avatar2 from '../imgChefChantier/Avatar2.png'
import Avatar3 from '../imgChefChantier/Avatar3.png'
import Avatar4 from '../imgChefChantier/Avatar4.png'
import ChantierIMG from '../imgChefChantier/ChantierIMG.png'
import '../styles/ParisS.css'
import Formulaire from '../imgChefChantier/Formulaire.png'
import Reportt from '../imgChefChantier/Report.png'
import Devis from '../imgChefChantier/Devis.png'
import Docs from '../imgChefChantier/Docs.png'
import Plans from '../imgChefChantier/Plans.png'
import Photo from '../imgChefChantier/Photo.png'


function ParisS() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box 
          sx={{ 
            bgcolor: '#525FE1', 
            height: '30vh', 
            width: '65vh', 
            display: 'flex', 
            flexDirection: 'column', 
            padding: 2,
            marginTop: 0,
            borderRadius: 2,
            position: 'relative' // Ajout pour pouvoir positionner les éléments en absolu si besoin
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              color: '#ffffff', 
              marginBottom: 1, 
              alignSelf: 'flex-start', 
              marginLeft: 1, 
              marginTop: 3, 
              fontWeight: 'bold', 
              fontSize: 45 
            }}
          >
            Chantiers Paris Sud
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#ffffff', 
              alignSelf: 'flex-start', 
              marginLeft: 1 
            }}
          >
            Référence : 26286FG67 - P
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#ffffff', 
              alignSelf: 'flex-start', 
              marginLeft: 1 
            }}
          >
            Adresse : 4* des Ullices, 75017, Paris 
          </Typography>
          <AvatarGroup max={4} sx={{ marginTop: 2, marginLeft: 1, alignSelf: 'flex-start' }}>
            <Avatar alt="Remy Sharp" src={Avatar1} />
            <Avatar alt="Travis Howard" src={Avatar2} />
            <Avatar alt="Cindy Baker" src={Avatar3} />
            <Avatar alt="Agnes Walker" src={Avatar4} />
          </AvatarGroup>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100%', // pour occuper tout l'espace restant dans le conteneur
              mt: 2 // pour ajouter un peu de marge supérieure
            }}
          >
            <img src={ChantierIMG} alt="Chantier" className='ChantierIMG' style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Box>
        <Box sx={{ marginTop: 2 }}>
            <Typography sx={{ color: '#5652AC', marginBottom: 1, fontSize: 30,  }}>Récemment ajoutés</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={Formulaire} alt="Formulaire" className='Formulaire' style={{ width: '30%', margin: '0 10px' }}/>
                <img src={Reportt} alt="Report" className='Report' style={{ width: '30%', margin: '0 10px' }}/>
                <img src={Devis} alt="Devis" className='Devis' style={{ width: '30%', margin: '0 10px', marginTop: 35 }}/>
              </Box>
        </Box>
        <Box>
            <Typography>Médiathèque</Typography>
            <Box>
                <img src={Docs} alt="" className='Docs' />
                <img src={Plans} alt="" className='Plans'/>
                <img src={Photo} alt="" className='Photo' />
            </Box>
        </Box>

        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ParisS;
