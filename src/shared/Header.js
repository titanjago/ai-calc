import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { styled } from '@mui/system';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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
  fontSize: '1.5rem', // add font size for smaller screens
  padding: '0 16px', // add padding for smaller screens
  [theme.breakpoints.up('md')]: { // adjust font size and padding for larger screens
    fontSize: '2rem',
    padding: '0 32px',
  },
}));

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: '#000',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        MotoCross Suspension Calculator
        </StyledTypography>
        <StyledMenuButton onClick={handleClick}>
          <Typography variant="body1" color="white">
            How to
          </Typography>
          <ArrowDropDownIcon />
        </StyledMenuButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <StyledMenuItem>
            <StyledBox>
              <Typography variant="body1">
                How to adjust your dirt bike suspension settings:
              </Typography>
              <Typography variant="body2">
                1. Start with your set screws all the way in snug. Begin adjusting your clicks more loose until reaching the prefered settings.
              </Typography>
              <Typography variant="body2">
                2. Adjust the preload on your rear shock or spring to achieve the recommended sag percentage for your weight and riding style.
              </Typography>
              <Typography variant="body2">
                3. Use this as base settings. Test settings properly to find the exact set up you desire.
              </Typography>
            </StyledBox>
          </StyledMenuItem>
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
