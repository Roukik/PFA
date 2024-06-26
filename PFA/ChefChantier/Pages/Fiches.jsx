import React from 'react';
import { CssBaseline, Container, Box, Typography, TextField, Button, IconButton } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Fiches() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ marginTop: 4 }}>
          <IconButton sx={{ marginBottom: 2 }}>
            <Link to="/Documents">
              <ArrowBackIcon />
            </Link>
            
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <FolderIcon sx={{ color: '#6C63FF', fontSize: 40, marginRight: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Fiches
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ marginBottom: 4 }}>
            Home &gt; Dossiers &gt; Fiches
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <TextField
              variant="outlined"
              placeholder="recherche dans fiches"
              sx={{ marginRight: 2, flex: 1 }}
            />
            <Button variant="outlined" sx={{ textTransform: 'none', marginRight: 2 }}>
              filtres
            </Button>
            <Button variant="contained" sx={{ textTransform: 'none' }}>
              ajouter un nouveau fichier
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {['Devis_StGob', 'Devis_StGob', 'Devis_StGob', 'Devis_StGob', 'Devis_StGob'].map((item, index) => (
              <Box key={index} sx={{ backgroundColor: '#6C63FF', borderRadius: 2, padding: 2, width: '30%', textAlign: 'center' }}>
                <FolderIcon sx={{ color: 'white', fontSize: 40 }} />
                <Typography variant="body1" sx={{ color: 'white', marginTop: 1 }}>{item}</Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  ajouté le {index === 0 ? '18 mai 2024' : index === 1 ? '18 mai 2024' : index === 2 ? '14 mai 2024' : index === 3 ? '12 mai 2024' : '07 mai 2024'}
                </Typography>
                <IconButton sx={{ color: 'white' }}>
                  <MoreVertIcon />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ position: 'absolute', bottom: 16, right: 16 }}>
          <Avatar src="/path/to/profile.jpg" />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Fiches;
