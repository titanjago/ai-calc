import {
    Container,
    Typography,
    Box,
    Grid,
  } from '@mui/material';
  import { styled } from '@mui/system';
  
  import ajyoungImg from '../Assets/Images/ajyoung.png';
  import supercrossImg from '../Assets/Images/ajsx.png';
  import image2 from '../Assets/Images/ajfive.png';
  import image3 from '../Assets/Images/ajsx2.png';
  
  const HumbleContainer = styled(Container)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
  }));
  
  const Humble = () => {
    return (
      <HumbleContainer>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Our Humble Beginnings
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Justin and Aaron of Below Average Heroes met at 9 years old. We grew up riding and racing together. Our passion for the sport led us to race supercross, where I was the rider, and Aaron was the mechanic. Our journey through the industry has given us valuable knowledge and skills. Now, we're using our experience to give back and help the community.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <img src={ajyoungImg} alt="Photo 1" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="caption">
             
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={image2} alt="Photo 2" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="caption">
            
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={supercrossImg} alt="Photo 3" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="caption">
            
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={image3} alt="Photo 4" style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="caption">
            </Typography>
          </Grid>
        </Grid>
      </HumbleContainer>
    );
  };
  
  export default Humble;
  
