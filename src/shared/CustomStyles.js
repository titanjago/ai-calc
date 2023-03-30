import { Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const FuturisticTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 700,
  color: theme.palette.primary.main,
  // Add any custom styles for FuturisticTypography here
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
  border: 0,
  borderRadius: 3,
  boxShadow: `0 3px 5px 2px ${theme.palette.primary.dark}`,
  color: 'white',
  padding: '0 30px',
  // Add any custom styles for GradientButton here
}));

export { FuturisticTypography, GradientButton };
