import React from 'react';
import { CssBaseline, Container, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Formulaire from '../imgChefChantier/Formulaire.png'
import Reportt from '../imgChefChantier/Report.png'
import Devis from '../imgChefChantier/Devis.png'
import Fiches from '../imgChefChantier/Fiches.png'
import Factures from '../imgChefChantier/Factures.png'
import Contrats from '../imgChefChantier/Contrats.png'
import { Link } from 'react-router-dom';

function ParisS() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{ marginLeft: 2}} >
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="body2" sx={{ marginBottom: 4, marginTop: 8  }}>
            Home &gt; Chantiers ParisS &gt; Documents
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Chantiers - ParisS
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <TextField
              variant="outlined"
              placeholder="recherche dans documents"
              sx={{ marginRight: 2, flex: 1 }}
            />
            <Button variant="outlined" sx={{ textTransform: 'none' }}>
              filtres
            </Button>
          </Box>

            <Box sx={{ marginTop: 2 }} >
                <Typography sx={{ color: '#5652AC', marginBottom: 1, fontSize: 30,  }}>Récemment ajoutés</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <img src={Formulaire} alt="Formulaire" className='Formulaire' style={{ width: '30%', margin: '0 10px' }}/>
                        <img src={Reportt} alt="Report" className='Report' style={{ width: '30%', margin: '0 10px' }}/>
                        <img src={Devis} alt="Devis" className='Devis' style={{ width: '30%', margin: '0 10px', marginTop: 35 }}/>
                    </Box>
            </Box>

          <Typography variant="h6" sx={{ marginBottom: 3, marginTop: 9, fontSize: 48 }}>
            Catégories
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Dernières modifications - 1h
          </Typography>

          <Box>
            <Link to='/Fiches' >
                <img src= {Fiches} alt="" className='Fiches' />
            </Link>
            <img src={Factures} alt="" className='Factures' />
            <img src={Contrats} alt="" className='Contrats' />
          </Box>

          <Button variant="outlined" sx={{ textTransform: 'none', marginTop: 2 }}>
            ajouter une nouvelle catégorie
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default ParisS;
