import React, { useState } from 'react';
import { Box, Button, Paper, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { suspensionSettings } from '../Data/MotorcycleData';

const FuturisticTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Orbitron', sans-serif",
}));

const BubbleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "'Luckiest Guy', cursive",
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

const SuspensionForm = () => {
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
  
    if (name === "motorcycleBrand") {
      setRider((prevState) => ({
        ...prevState,
        motorcycleBrand: value,
        motorcycleModel: "",
      }));
    } else {
      setRider((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  

  const motorcycleBrands = ['Honda', 'Suzuki', 'Kawasaki', 'Yamaha', 'KTM','Cobra'];
  const motorcycleModels = {
    Honda: ['CRF450R', 'CRF250R', 'CR250', 'CRF150R', 'CR85R', 'CRF110F', 'CRF50F'],
    Suzuki: ['RM-Z450', 'RM-Z250', 'RM85', 'DR-Z50'],
    Kawasaki: ['KX450', 'KX250', 'KX112', 'KLX110', 'KX85', 'KX65', 'KX50'],
    Yamaha: ['YZ450F', 'YZ250F', 'YZ250 2-stroke', 'YZ125 2-stroke','YZ85','YZ65', 'PW50'],
    KTM: ['500 EXC', '450 SX-F', '350 SX-F', '250 SX-F', '250 SX', '150 SX', '125 SX', '85 SX', '65 SX','50 SX', '50 SX Mini'],
    Cobra: ['Cobra 50 SX', 'Cobra 65 SX'], // Add Cobra models here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Get the base suspension settings for the selected motorcycle model
    const baseSettings = suspensionSettings[rider.motorcycleModel];
  
    // Check if baseSettings is defined before proceeding
    if (!baseSettings) {
      console.error(`Base settings not found for motorcycle model: ${rider.motorcycleModel}`);
      return;
    }
  
    // Apply skill level and track condition factors
    const skillFactor =
      rider.skill === "beginner" ? 1.0 : rider.skill === "intermediate" ? 0.9 : 0.8;
    const trackConditionFactor =
      rider.trackCondition === "soft" ? 0.9 : rider.trackCondition === "medium" ? 1.0 : 1.1;
  
    // Calculate riderWeight outside of sag calculation
    const riderWeight = parseFloat(rider.weight) + baseSettings.baseWeight;
  
    // Calculate sag based on rider's weight, skill level, and track condition factors
    const sagSettingsRatio = skillFactor * trackConditionFactor;
    const sag = calculateSag(riderWeight, sagSettingsRatio, baseSettings.sag);
  
    // Perform the calculations for the best suspension settings based on the rider's input
    const highSpeedCompressionTurns = calculateHighSpeedCompressionTurns(baseSettings, riderWeight, skillFactor, trackConditionFactor);
    const lowSpeedCompression = calculateLowSpeedCompression(baseSettings, riderWeight, skillFactor, trackConditionFactor);
    const rebound = calculateRebound(baseSettings, riderWeight, skillFactor, trackConditionFactor);
    const airForkPressure = calculateAirForkPressure(baseSettings, riderWeight, skillFactor, trackConditionFactor);
  
    setCalculatedSettings({
      forkCompression: Math.round(
        baseSettings.forkCompression * skillFactor * trackConditionFactor
      ),
      forkRebound: Math.round(
        baseSettings.forkRebound * skillFactor * trackConditionFactor
      ),
      highSpeedCompression: highSpeedCompressionTurns.toFixed(1),
      lowSpeedCompression: Math.round(lowSpeedCompression),
      rebound: Math.round(rebound),
      sag: sag,
      airForkPressure: airForkPressure,
    });
  };
  

  const calculateHighSpeedCompressionTurns = (baseSettings, riderWeight, skillFactor, trackConditionFactor) => {
    const weightFactor = Math.max(5.0, Math.min(2, riderWeight / 175));
    return Math.max(0.5, Math.min(3, baseSettings.highSpeedCompression * 0.1 * skillFactor * trackConditionFactor * weightFactor));
  };
  
  const calculateLowSpeedCompression = (baseSettings, riderWeight, skillFactor, trackConditionFactor) => {
    const weightFactor = Math.max(0.5, Math.min(2, riderWeight / 175));
    return baseSettings.lowSpeedCompression * 0.8 * skillFactor * trackConditionFactor * weightFactor;
  };
  
  const calculateSag = (riderWeight, sagSettingsRatio, baseSag) => {
    const sagAdjustment = (riderWeight / 2.2) * 0.007 * sagSettingsRatio;
    return Math.max(25, Math.min(110, baseSag + sagAdjustment)).toFixed(1);
  };
  const calculateAirForkPressure = (baseSettings, riderWeight, skillFactor, trackConditionFactor) => {
    const airForkPressureAdjustment = (riderWeight - 175) * 0.05;
    const adjustedAirForkPressure = baseSettings.baseAirForkPressure + airForkPressureAdjustment;
    return Math.max(baseSettings.minAirForkPressure, Math.min(baseSettings.maxAirForkPressure, adjustedAirForkPressure)).toFixed(1);
  };
  const calculateRebound = (baseSettings, riderWeight, skillFactor, trackConditionFactor) => {
    let weightFactor;
  
    if (riderWeight >= 175) {
      weightFactor = riderWeight / 175;
    } else if (riderWeight >= 130) {
      weightFactor = riderWeight / 130;
    } else if (riderWeight >= 110) {
      weightFactor = riderWeight / 110;
    } else if (riderWeight >= 90) {
      weightFactor = riderWeight / 90;
    } else {
      weightFactor = riderWeight / 60;
    }
  
    const rebound = baseSettings.shockRebound * 1.1 * skillFactor * trackConditionFactor * weightFactor;
    const minRebound =  0; // adjust this value according to your constraints
    const maxRebound = 14; // adjust this value according to your constraints
    return Math.round(Math.max(minRebound, Math.min(maxRebound, rebound)));
  };
  
  
  
  
  

  
  return (
    <Container maxWidth="sm">
      <Paper>
        <BubbleTypography variant="h5" align="center" gutterBottom>
          Rider Input
        </BubbleTypography>
        <Box component="form" onSubmit={handleSubmit}>
          {/* All your form fields go here */}
          <TextField
            fullWidth
            margin="normal"
            name="weight"
            label="Weight Geared Up"
            type="number"
            value={rider.weight}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="height"
            label="Rider Height Inch"
            type="number"
            value={rider.height}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>What Bike You Ride</InputLabel>
            <Select name="motorcycleBrand" value={rider.motorcycleBrand} onChange={handleChange} required>
              {motorcycleBrands.map((brand) => (
                <MenuItem key={brand} value={brand}>{brand}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {rider.motorcycleBrand && (
            <FormControl fullWidth margin="normal">
              <InputLabel>Bike Model</InputLabel>
              <Select name="motorcycleModel" value={rider.motorcycleModel} onChange={handleChange} required>
                {motorcycleModels[rider.motorcycleBrand].map((model) => (
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
              <MenuItem value="kyb">CARD "Cobra Only"</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Skill Level</InputLabel>
            <Select name="skill" value={rider.skill} onChange={handleChange} required>
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
          <MenuItem value="expert">Expert</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Track Condition</InputLabel>
        <Select name="trackCondition" value={rider.trackCondition} onChange={handleChange} required>
          <MenuItem value="soft">Loamy</MenuItem>
          <MenuItem value="medium">Rough</MenuItem>
          <MenuItem value="hard">HardPack</MenuItem>
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
       Fork Compression: {calculatedSettings.forkCompression} clicks
     </Typography>
     <Typography align="center">
       Fork Rebound: {calculatedSettings.forkRebound} clicks
     </Typography>
     <Typography align="center">
  High-Speed Compression: {calculatedSettings.highSpeedCompression} turns
</Typography>
<Typography align="center">
  Low-Speed Compression: {calculatedSettings.lowSpeedCompression} clicks
</Typography>

     <Typography align="center">
       Rebound: {calculatedSettings.rebound} clicks
     </Typography>
     <Typography align="center">
       Sag: {calculatedSettings.sag} mm
     </Typography>
    {calculatedSettings.airForkPressure && (
      <Typography align="center">
        Air Fork Pressure: {calculatedSettings.airForkPressure} psi
      </Typography>
)}
  </Box>
)}
  </Paper>
</Container>
);
};

export default SuspensionForm;

  