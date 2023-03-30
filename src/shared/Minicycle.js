import React, { useState } from 'react';
import { Box, Button, Paper, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FuturisticTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
}));

const Minicycle = () => {
  const [rider, setRider] = useState({
    weight: '',
    height: '',
    skill: '',
    trackCondition: '',
    motorcycleBrand: '',
    motorcycleModel: '',
    suspensionBrand: '',
  });

  const [calculatedSettings, setCalculatedSettings] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRider((prevState) => ({ ...prevState, [name]: value }));
  };

  const motorcycleModels = {
    kawasaki: {
      '112': { '2021': {}, '2022': {} },
      '85': { '2021': {}, '2022': {} },
      '65': { '2021': {}, '2022': {} },
    },
    yamaha: {
      '85LW': { '2021': {}, '2022': {} },
      '85': { '2021': {}, '2022': {} },
      '65': { '2021': {}, '2022': {} },
    },
    honda: {
      '150': { '2021': {}, '2022': {} },
    },
    ktm: {
      '85Lw': { '2021': {}, '2022': {} },
      '85': { '2021': {}, '2022': {} },
      '65': { '2021': {}, '2022': {} },
      '50': { '2021': {}, '2022': {} },
      '50mini': { '2021': {}, '2022': {} },
    },
    suzuki: {
      '85': { '2021': {}, '2022': {} },
      '65': { '2021': {}, '2022': {} },
    },
    cobra: {
      '50': { '2021': {}, '2022': {} },
      '50 mini': { '2021': {}, '2022': {} },
    },
  };

  const skills = ['Beginner', 'Intermediate', 'Advanced'];
  const trackConditions = ['Hardpack', 'Loamy', 'Sandy'];

  const calculateSettings = () => {
    // Perform your calculations based on rider input
    // For example:
    const calculatedSetting = {
      preload: 100,
      compression: 20,
      rebound: 15,
    };

    setCalculatedSettings(calculatedSetting);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateSettings();
    console.log(rider);
  };

  return (
    <Container maxWidth="sm">
      <Paper>
        <FuturisticTypography variant="h5" align="center" gutterBottom>
Rider Input
</FuturisticTypography>
<Box component="form" onSubmit={handleSubmit}>
{/* All your form fields go here */}
<TextField
         fullWidth
         margin="normal"
         name="weight"
         label="Weight"
         type="number"
         value={rider.weight}
         onChange={handleChange}
         required
       />
<TextField
         fullWidth
         margin="normal"
         name="height"
         label="Height inch"
         type="number"
         value={rider.height}
         onChange={handleChange}
         required
       />
<FormControl fullWidth margin="normal">
<InputLabel>Motorcycle Brand</InputLabel>
<Select name="motorcycleBrand" value={rider.motorcycleBrand} onChange={handleChange} required>
{Object.keys(motorcycleModels).map((brand) => (
<MenuItem key={brand} value={brand}>{brand.charAt(0).toUpperCase() + brand.slice(1)}</MenuItem>
))}
</Select>
</FormControl>
{rider.motorcycleBrand && (
<FormControl fullWidth margin="normal">
<InputLabel>Motorcycle Model</InputLabel>
<Select name="motorcycleModel" value={rider.motorcycleModel} onChange={handleChange} required>
{Object.keys(motorcycleModels[rider.motorcycleBrand]).map((model) => (
<MenuItem key={model} value={model}>
{model}
</MenuItem>
))}
</Select>
</FormControl>
)}
<FormControl fullWidth margin="normal">
<InputLabel>Suspension Brand</InputLabel>
<Select name="suspensionBrand" value={rider.suspensionBrand} onChange={handleChange} required>
<MenuItem value="ohlins">Öhlins</MenuItem>
<MenuItem value="fox">Fox</MenuItem>
<MenuItem value="wp">WP Suspension</MenuItem>
<MenuItem value="showa">Showa</MenuItem>
<MenuItem value="kyb">KYB</MenuItem>
</Select>
</FormControl>
<FormControl fullWidth margin="normal">
<InputLabel>Skill Level</InputLabel>
<Select name="skill" value={rider.skill} onChange={handleChange} required>
{skills.map((skill) => (
<MenuItem key={skill} value={skill.toLowerCase()}>{skill}</MenuItem>
))}
</Select>
</FormControl>
<FormControl fullWidth margin="normal">
<InputLabel>Track Condition</InputLabel>
<Select name="trackCondition" value={rider.trackCondition} onChange={handleChange} required>
{trackConditions.map((condition) => (
<MenuItem key={condition} value={condition.toLowerCase()}>{condition}</MenuItem>
))}
</Select>
</FormControl>
<GradientButton fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
Calculate Settings
</GradientButton>
</Box>
{calculatedSettings && (
<Box sx={{ mt: 4 }}>
<FuturisticTypography variant="h6" align="center" gutterBottom>
Calculated Suspension Settings
</FuturisticTypography>
<Typography align="center">
Preload: {calculatedSettings.preload} mm
</Typography>
<Typography align="center">
Compression: {calculatedSettings.compression} clicks
</Typography>
<Typography align="center">
Rebound: {calculatedSettings.rebound} clicks
</Typography>
</Box>
)}
</Paper>
</Container>
);
};

export default Minicycle;
