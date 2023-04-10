import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { styled } from '@mui/system';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SuspensionForm from './shared/SuspensionForm';
import FreedomF from '../src/Assets/Images/FreedomF.png';
import Rjerky from '../src/Assets/Images/R-Jerky.png';
import BOH from '../src/Assets/Images/BOHad.png';

const GradientBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, gold, orange)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  margin: theme.spacing(2, 0),
}));

const HomePage = () => {
  const imagesAndLinks = [
    { src: FreedomF, href: 'https://freedomforgedoffroad.com/' },
    { src: Rjerky, href: 'https://www.eatrjerky.com/' },
    { src: BOH, href: 'https://below-average-heroes.printify.me/products' },
  ];

  return (
    <>
      <Box mt={2}>
        <SuspensionForm />
      </Box>
      <Container maxWidth="md">
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
          {/* Add your sponsor/supporter images here */}
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            <img src={FreedomF} alt="Sponsor 1" width="100" />
            <img src={Rjerky} alt="Sponsor 2" width="100" />
            <img src={BOH} alt="Sponsor 2" width="100" />
            {/* Add more images as needed */}
          </Box>
        </GradientBox>
      </Container>
    </>
  );
};

export default HomePage;
