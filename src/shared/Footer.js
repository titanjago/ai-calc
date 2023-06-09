import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 2 }}>
      <Container maxWidth="md">
        <Typography variant="body1" align="center" gutterBottom>
          The suspension settings provided by this AI are suggestions only.
          Please consult with a suspension technician for personalized
          recommendations and any questions you may have. MADE WITH LOVE BY Jbone
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={() => setSelectedOption("Terms of Service")}
            variant="outlined"
          >
            Terms of Service
          </Button>
          <Button
            onClick={() => setSelectedOption("How To")}
            variant="outlined"
            sx={{ ml: 2 }}
          >
            Back
          </Button>
          <Button
            component={Link}
            to="/humble"
            variant="outlined"
            sx={{ ml: 2 }}
          >
            Our Story
          </Button>
        </Box>
        {selectedOption === "Terms of Service" && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              This AI and its suspension settings are provided on an "as is" basis. The creators and providers of the Service make no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, materials, or products included in the Service. You expressly agree that your use of the Service is at your own risk. The Service and all code, software, and other intellectual property used in connection with the Service are the exclusive property of the creators and providers of the Service and are protected by applicable copyright and trademark laws. You may not use or reproduce any part of the Service or intellectual property without the express written permission of the creators and providers of the Service. The creators and providers of the Service reserve the right to modify these Terms at any time. Your continued use of the Service after any changes to the Terms constitutes your acceptance of the new Terms. These Terms are governed by the laws of the jurisdiction in which the Service is provided and you agree to submit to the exclusive jurisdiction of the courts of that jurisdiction. If you have any questions or concerns about these Terms, please contact the creators and providers of the Service at [lee.justin781@gmail.com].
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Footer;
