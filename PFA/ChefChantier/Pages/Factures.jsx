import React from 'react';
import { CssBaseline, Container, Box, Typography, TextField, Button, IconButton, Avatar } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';


function Factures() {
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
              Factures
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ marginBottom: 4 }}>
            Home &gt; Dossiers &gt; Factures
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <TextField
              variant="outlined"
              placeholder="recherche dans documents"
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
            {[
              { name: 'Devis_StGob', date: '18 mai 2024' },
              { name: 'Location_machine', date: '14 mai 2024' },
              { name: 'Devis_StGob', date: '12 mai 2024' },
              { name: 'Devis_StGob', date: '12 mai 2024' },
              { name: 'Devis_StGob', date: '12 mai 2024' },
            ].map((item, index) => (
              <Box key={index} sx={{ backgroundColor: '#6C63FF', borderRadius: 2, padding: 2, width: '30%', textAlign: 'center' }}>
                <FolderIcon sx={{ color: 'white', fontSize: 40 }} />
                <Typography variant="body1" sx={{ color: 'white', marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  ajouté le {item.date}
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

export default Factures;
