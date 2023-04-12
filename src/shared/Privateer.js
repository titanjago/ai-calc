import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import styled from '@emotion/styled'; // Corrected import statement

const riders = [
  { name: 'Rider 1', id: 1 },
  { name: 'Rider 2', id: 2 },
  { name: 'Rider 3', id: 3 },
  // Add more riders as needed
];

const BubbleText = styled(Typography)`
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  color: white;
`;

const BlackBackground = styled(Box)`
  background-color: black;
  padding: 16px;
  height: 100vh; /* Set the height of the component to fill the whole viewport */
`;

const Privateer = () => {
  const [selectedRider, setSelectedRider] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedRider) {
      setMessage(`You have selected ${selectedRider.name} for this month.`);
      // Here, you would send the selected rider information to your backend
      // to register the user's click and update the rider's click count.
    }
  }, [selectedRider]);

  const handleRiderSelect = (rider) => {
    setSelectedRider(rider);
  };

  return (
    <BlackBackground>
      <BubbleText variant="h1">"BAH" Privateer Support Program</BubbleText>
      <BubbleText>
        We are committed to supporting motocross and supercross privateers. We donate 10% of all our earnings to
        selected privateers. Each month, you can vote for a rider from the list below. No rider can win two months in a
        row. The rider with the most clicks by users will receive the donation.
      </BubbleText>
      <BubbleText variant="h2">Select a rider:</BubbleText>
      <ul>
        {riders.map((rider) => (
          <li key={rider.id}>
            <Button variant="outlined" onClick={() => handleRiderSelect(rider)} style={{ color: 'white', borderColor: 'white' }}>
              {rider.name}
            </Button>
          </li>
        ))}
      </ul>
      {message && <BubbleText>{message}</BubbleText>}
    </BlackBackground>
  );
};

export default Privateer;
