import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ShopIcon from '@material-ui/icons/Shop';
import InstagramIcon from '@material-ui/icons/Instagram';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, rgba(255, 165, 0, 1) 0%, rgba(255, 215, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  fontFamily: "'Luckiest Guy', cursive",
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
}));


const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton href="https://www.instagram.com/below_average_heroes/">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://below-average-heroes.printify.me/products">
          <ShopIcon />
        </IconButton>
        <StyledTypography variant="h6" style={{ flexGrow: 1 }}>
          Ai Suspension Calculator
        </StyledTypography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
