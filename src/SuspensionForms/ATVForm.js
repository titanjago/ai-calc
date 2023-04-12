import React, { useState } from 'react';
import { suspensionSettings } from '../Data/ATVData';
import { Box, Button, Paper, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

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

const atvBrands = [
  'KTM',
  'Honda',
  'Suzuki',
  'Yamaha',
];

const atvModels = {
  Yamaha: ['YFZ450R', 'Raptor 700R', 'Raptor 250'],
  Kawasaki: ['KFX450R', 'KFX400', 'KFX250'],
  KTM: ['XC 525', 'XC 450', 'XC 250'],
  Honda: ['TRX450R', 'TRX400X', 'TRX250X'],
  Suzuki: ['LTR450', 'Quadracer R450', 'QuadSport Z400'],
};

const suspensionBrands = [
  'Fox',
  'Öhlins',
  'RockShox',
  'Showa',
  'Elka'
];

const ATVForm = () => {
  const [rider, setRider] = useState({
    weight: '',
    height: '',
    skill: '',
    trackCondition: '',
    atvBrand: '',
    atvModel: '',
    suspensionBrand: '',
  });

  // Move the useState hook for calculatedSettings outside of handleSubmit
  const [calculatedSettings, setCalculatedSettings] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRider((prevRider) => ({
      ...prevRider,
      [name]: value,
    }));
  };
  
  
  const calculateHighSpeedCompressionTurns = (baseSettings, riderWeight, skillFactor, trackConditionFactor) => {
    let weightFactor = riderWeight / baseSettings.baseWeight;
    const highSpeedCompressionTurns = baseSettings.highSpeedCompressionTurns * 1.1 * skillFactor * trackConditionFactor * weightFactor;
    const minTurns = 0; // adjust this value according to your constraints
    const maxTurns = 14; // adjust this value according to your constraints
    return Math.max(minTurns, Math.min(maxTurns, highSpeedCompressionTurns));
  };
  
  const calculateLowSpeedCompression = (baseSettings, riderWeight, skillFactor, trackConditionFactor) => {
    let weightFactor = riderWeight / baseSettings.baseWeight;
    const lowSpeedCompression = baseSettings.lowSpeedCompression * 1.1 * skillFactor * trackConditionFactor * weightFactor;
    const minCompression = 0; // adjust this value according to your constraints
    const maxCompression = 14; // adjust this value according to your constraints
    return Math.max(minCompression, Math.min(maxCompression, lowSpeedCompression));
  };
  
  const calculateFrontRebound = (baseSettings, riderWeight, skillFactor, trackConditionFactor) => {
    let weightFactor = riderWeight / baseSettings.baseWeight;
    const frontRebound = baseSettings.frontShockRebound * 1.1 * skillFactor * trackConditionFactor * weightFactor;
    const minRebound = 0; // adjust this value according to your constraints
    const maxRebound = 14; // adjust this value according to your constraints
    return Math.round(Math.max(minRebound, Math.min(maxRebound, frontRebound)));
  };
  
  const calculateRearRebound = (baseSettings, riderWeight, skillFactor, trackConditionFactor) => {
    let weightFactor = riderWeight / baseSettings.baseWeight;
    const rearRebound = baseSettings.rearShockRebound * 1.1 * skillFactor * trackConditionFactor * weightFactor;
    const minRebound = 0; // adjust this value according to your constraints
    const maxRebound = 14; // adjust this value according to your constraints
    return Math.round(Math.max(minRebound, Math.min(maxRebound, rearRebound)));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the base suspension settings for the selected ATV model
    const baseSettings = suspensionSettings[rider.atvModel];

    // Check if baseSettings is defined before proceeding
    if (!baseSettings) {
      console.error(`Base settings not found for ATV model: ${rider.atvModel}`);
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
    const frontRebound = calculateFrontRebound(baseSettings, riderWeight, skillFactor, trackConditionFactor);
    const rearRebound = calculateRearRebound(baseSettings, riderWeight, skillFactor, trackConditionFactor);

    setCalculatedSettings({
      frontShockCompression: Math.round(
        baseSettings.frontShockCompression * skillFactor * trackConditionFactor
      ),
      frontShockRebound: Math.round(
        baseSettings.frontShockRebound * skillFactor * trackConditionFactor
      ),
      rearShockCompression: Math.round(
        baseSettings.rearShockCompression * skillFactor * trackConditionFactor
      ),
      rearShockRebound: Math.round(
        baseSettings.rearShockRebound * skillFactor * trackConditionFactor
      ),
      highSpeedCompression: highSpeedCompressionTurns.toFixed(1),
      lowSpeedCompression: Math.round(lowSpeedCompression),
      sag: sag,
    });
  };

  // Remove the second definition of calculateSag function
  const calculateSag = (riderWeight, sagSettingsRatio, baseSag
    ) => {
    const sagAdjustment = (riderWeight / 2.2) * 0.007 * sagSettingsRatio;
    return Math.max(25, Math.min(110, baseSag + sagAdjustment)).toFixed(1);
    };
    const displayCalculatedSettings = () => {
      if (!calculatedSettings) {
        return null;
      }
    
      return (
        <Paper>
          <BubbleTypography variant="h5" align="center" gutterBottom>
            Calculated Suspension Settings
          </BubbleTypography>
          <Box>
            <ul>
              <li>Front Shock Compression: {calculatedSettings.frontShockCompression}</li>
              <li>Front Shock Rebound: {calculatedSettings.frontShockRebound}</li>
              <li>Rear Shock Compression: {calculatedSettings.rearShockCompression}</li>
              <li>Rear Shock Rebound: {calculatedSettings.rearShockRebound}</li>
              <li>High Speed Compression: {calculatedSettings.highSpeedCompression}</li>
              <li>Low Speed Compression: {calculatedSettings.lowSpeedCompression}</li>
              <li>Sag: {calculatedSettings.sag}</li>
            </ul>
          </Box>
        </Paper>
      );
    };


  
  
  

    return (
      <Container maxWidth="sm">
        <Paper>
          <BubbleTypography variant="h5" align="center" gutterBottom>
            Quad Rider Input
          </BubbleTypography>
          <Box component="form" onSubmit={handleSubmit}>
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
              <InputLabel>What ATV You Ride</InputLabel>
              <Select name="atvBrand" value={rider.atvBrand} onChange={handleChange} required>
                {atvBrands.map((brand) => (
                  <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>ATV Model</InputLabel>
              <Select name="atvModel" value={rider.atvModel} onChange={handleChange} required>
                {rider.atvBrand && atvModels[rider.atvBrand].map((model) => (
                  <MenuItem key={model} value={model}>{model}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Suspension Brand</InputLabel>
              <Select name="suspensionBrand" value={rider.suspensionBrand} onChange={handleChange} required>
                {suspensionBrands.map((brand) => (
                  <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Rider Skill Level</InputLabel>
              <Select name="skill" value={rider.skill} onChange={handleChange} required>
                <MenuItem value="beginner">Beginner</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="advanced">Advanced</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Track Condition</InputLabel>
              <Select name="trackCondition" value={rider.trackCondition} onChange={handleChange} required>
                <MenuItem value="hard">Hard</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="soft">Soft</MenuItem>
              </Select>
            </FormControl>
            <GradientButton type="submit">Calculate Settings</GradientButton>
          </Box>
        </Paper>
        {displayCalculatedSettings()}
      </Container>
    );
    
              }
export default ATVForm;
