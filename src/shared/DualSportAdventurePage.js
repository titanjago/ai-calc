import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function DualSportAdventurePage() {
  return (
    <Box sx={{ 
      backgroundImage: 'url("path/to/background-image.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center', bgcolor: 'rgba(0,0,0,0.5)', py: 4 }}>
        <Typography variant="h1" component="h1" sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '4rem', color: '#fff', mb: 4 }}>
          Coming Soon
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.5rem', color: '#fff' }}>
        The force is strong with this one. Our new website is currently under construction, and will be launching soon. Stay tuned for updates!
        </Typography>
      </Container>
    </Box>
  );
}

export default DualSportAdventurePage;
