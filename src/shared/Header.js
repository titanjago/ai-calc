import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CrispLogo from '../Assets/Images/BAH.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, rgba(255, 165, 0, 1) 0%, rgba(255, 215, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)',
}));

const NavLink = styled(Button)(({ theme }) => ({
  color: 'black',
  textTransform: 'none',
  fontFamily: "'Orbitron', sans-serif",
  fontWeight: 500,
  letterSpacing: '1px',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
}));


const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = (
    <>
      <NavLink component={Link} to="/">MotoCross</NavLink>
      <NavLink component={Link} to="/dualsport-adventure">DualSport/Adventure</NavLink>
      <NavLink component={Link} to="/sxs">SXS</NavLink>
      <NavLink component={Link} to="/road">Road</NavLink>
      <NavLink component={Link} to="/atv">ATV</NavLink>
      <NavLink component={Link} to="/snow">Snow</NavLink>
      <NavLink component={Link} to="/overland">Overland</NavLink>
      <NavLink component={Link} to="/techtip">Colt's TechTip</NavLink>
      <NavLink component={Link} to="/privateer">Privateer Power</NavLink>
      <NavLink component={Link} to="/trail">Trail</NavLink>
    </>
  );

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
      <List>
      {[
  { text: 'MotoCross', to: '/' },
  { text: 'DualSport/Adventure', to: '/dualsport-adventure' },
  { text: 'SXS', to: '/sxs' },
  { text: 'Road', to: '/road' },
  { text: 'ATV', to: '/atv' },
  { text: 'Snow', to: '/snow' },
  { text: 'Overland', to: '/overland' },
  { text: "Colt's TechTip", to: '/techtip' },
  { text: "Privateer Power", to: '/privateer' },
  { text: "Trail", to: '/trail' },
].map((item, index) => (
  <ListItem button key={item.text} component={Link} to={item.to} onClick={handleDrawerToggle}>
    <NavLink>{item.text}</NavLink>
  </ListItem>
))}

      </List>
    </Drawer>
  );

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton component={Link} to="/" style={{ padding: 0 }}>
          <img src={CrispLogo} alt="Crisp logo" style={{ height: 50, width: 'auto' }} />
        </IconButton>
        <div style={{ flexGrow: 1 }} />
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          navLinks
        )}
        <div style={{ flexGrow: 1 }} />
        <IconButton
          edge="end"
          component={Link}
          to="/profile"
          color="inherit"
          sx={{ marginRight: 1 }}
        >
          <AccountCircleIcon />
        </IconButton>
        <Button
          variant="outlined"
          style={{
            color: 'white',
            borderColor: 'green',
            backgroundColor: 'transparent',
          }}
          href="/signup"
        >
          JOIN FOR RELEASE UPDATES
        </Button>
        </Toolbar>
      </StyledAppBar>
    );
};

export default Header;



