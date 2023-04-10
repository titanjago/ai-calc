import React, { useState } from 'react';
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
  'Brand A',
  'Brand B',
  'Brand C',
];

const atvModels = {
  'Brand A': ['Model A1', 'Model A2', 'Model A3'],
  'Brand B': ['Model B1', 'Model B2', 'Model B3'],
  'Brand C': ['Model C1', 'Model C2', 'Model C3'],
};

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRider((prevRider) => ({
      ...prevRider,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(rider);
  };

  return (
    <Container maxWidth="sm">
      <Paper>
        <BubbleTypography variant="h5" align="center" gutterBottom>
          Rider Input
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
          <FormControl fullWidth margin="normal">
            <InputLabel>Suspension Brand</InputLabel>
            <Select name="suspensionBrand" value={rider.suspensionBrand} onChange={handleChange} required>
              <MenuItem value="brandX">Brand X</MenuItem>
              <MenuItem value="brandY">Brand Y</MenuItem>
              <MenuItem value="brandZ">Brand Z</MenuItem>
            </Select>
          </FormControl>
          <GradientButton type="submit">Submit</GradientButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default ATVForm;

        