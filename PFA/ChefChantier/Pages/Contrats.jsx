import React from 'react';
import { CssBaseline, Container, Box, Typography, TextField, Button, IconButton, Avatar } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Link } from 'react-router-dom';

function T1LocationMachines() {
  const documents = [
    {
      title: 'Facture - loc1- terrain 1',
      date: '17 mai 2024',
      image: 'path/to/your/image1.png'
    },
    {
      title: 'Facture - loc2- terrain 1',
      date: '17 mai 2024',
      image: 'path/to/your/image2.png'
    }
  ];

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
            <InsertDriveFileIcon sx={{ color: '#6C63FF', fontSize: 40, marginRight: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              T1 Location_machines
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ marginBottom: 4 }}>
            Home &gt; Dossiers &gt; Factures &gt; locatio_machines1
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
            {documents.map((doc, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: '#F0F0F0',
                  borderRadius: 2,
                  padding: 2,
                  width: '48%',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <img
                  src={doc.image}
                  alt={doc.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}
                />
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  {doc.title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  Ouvert par vous - {doc.date}
                </Typography>
                <Avatar
                  src="/path/to/your/avatar.png"
                  sx={{ position: 'absolute', bottom: 16, right: 16 }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default T1LocationMachines;
