import React from 'react';
import { Box, Container } from '@mui/material';
import ATVForm from '../SuspensionForms/ATVForm';

function ATVPage() {
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
        <ATVForm />
      </Container>
    </Box>
  );
}

export default ATVPage;
