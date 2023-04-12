import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import TrailForm from '../SuspensionForms/TrailForm';
import FreedomF from '../Assets/Images/FreedomF.png';
import Rjerky from '../Assets/Images/R-Jerky.png';
import BOH from '../Assets/Images/BOHad.png';

const GradientBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, gold, orange)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  margin: theme.spacing(2, 0),
}));

function TrailPage() {
  const imagesAndLinks = [
    { src: FreedomF, href: 'https://example.com/freedomf' },
    { src: Rjerky, href: 'https://example.com/rjerky' },
    { src: BOH, href: 'https://example.com/boh' },
  ];

  return (
    <Box
      sx={{
        backgroundImage: 'url("path/to/background-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        pt: 4,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: 'center',
          bgcolor: 'rgba(0,0,0,0.5)',
          py: 4,
          borderRadius: 2,
        }}
      >
        <TrailForm />
        <GradientBox>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Orbitron' }}>
            Special Thanks To
          </Typography>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={imagesAndLinks.length}
            isPlaying
            interval={3000}
            infinite
          >
            <Slider>
              {imagesAndLinks.map((image, index) => (
                <Slide key={index} index={index}>
                  <Link href={image.href} target="_blank" rel="noopener noreferrer">
                    <img src={image.src} alt={`Slide ${index + 1}`} width="100%" />
                  </Link>
                </Slide>
              ))}
            </Slider>
            <ButtonBack style={{ display: 'none' }} />
            <ButtonNext style={{ display: 'none' }} />
          </CarouselProvider>
        </GradientBox>
        <GradientBox>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Orbitron' }}>
            Our Sponsors and Supporters
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            <img src={FreedomF} alt="Sponsor 1" width="100" />
            <img src={Rjerky} alt="Sponsor 2" width="100" />
            <img src={BOH} alt="Sponsor 3" width="100" />
            {/* Add more images as needed */}
          </Box>
        </GradientBox>
      </Container>
    </Box>
  );
}

export default TrailPage;
