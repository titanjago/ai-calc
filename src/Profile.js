import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Box,
  Button,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';

const ProfileContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#000',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const GradientCard = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, gold, orange)',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
}));

const Profile = () => {
  const [profilePic, setProfilePic] = useState('');
  const [bike, setBike] = useState('');
  const [favoriteTracks, setFavoriteTracks] = useState('');

  const [settings, setSettings] = useState([]);
  const [currentSetting, setCurrentSetting] = useState({
    track: '',
    date: '',
    forkCompression: '',
    forkRebound: '',
    highSpeedCompression: '',
    lowSpeedCompression: '',
    rebound: '',
    sag: '',
    airForkPressure: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to update user profile information here
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSettingsChange = (e) => {
    setCurrentSetting({ ...currentSetting, [e.target.name]: e.target.value });
  };

  const handleSettingsSubmit = (e) => {
    e.preventDefault();
    setSettings([...settings, currentSetting]);
    setCurrentSetting({
      track: '',
      date: '',
      forkCompression: '',
      forkRebound: '',
      highSpeedCompression: '',
      lowSpeedCompression: '',
      rebound: '',
      sag: '',
      airForkPressure: '',
    });
  };

  return (
    <ProfileContainer>
      <GradientCard>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Edit Profile
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ mr: 2, width: 100, height: 100 }} src={profilePic} />
            <label htmlFor="profile-pic-upload">
              <Button variant="outlined" component="span">
                Upload Profile Picture
              </Button>
            </label>
            <input
              id="profile-pic-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </Box>
          <TextField fullWidth margin="normal" label="Bike" value={bike} onChange={(e) => setBike(e.target.value)} />
          <TextField fullWidth margin="normal" label="Favorite Tracks" value={favoriteTracks} onChange={(e) => setFavoriteTracks(e.target.value)} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="outlined" type="submit">
              Save Changes
            </Button>
          </Box>
        </Box>
      </GradientCard>
      <GradientCard>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Coming Soon..
          My Track Settings
        </Typography>
        <Box component="form" onSubmit={handleSettingsSubmit}>
          <TextField fullWidth margin="normal" name="track" label="Track" value={currentSetting.track} onChange={handleSettingsChange} />
          <TextField fullWidth margin="normal" name="date" label="Date" type="date" value={currentSetting.date} onChange={handleSettingsChange} InputLabelProps={{ shrink: true }} />
          <TextField fullWidth margin="normal" name="forkCompression" label="Fork Compression" value={currentSetting.forkCompression} onChange={handleSettingsChange} />
          <TextField fullWidth margin="normal" name="forkRebound" label="Fork Rebound" value={currentSetting.forkRebound} onChange={handleSettingsChange} />
          <TextField fullWidth margin="normal" name="highSpeedCompression" label="High-Speed Compression" value={currentSetting.highSpeedCompression} onChange={handleSettingsChange} />
          <TextField fullWidth margin="normal" name="lowSpeedCompression" label="Low-Speed Compression" value={currentSetting.lowSpeedCompression} onChange={handleSettingsChange} />
          <TextField fullWidth margin="normal" name="rebound" label="Rebound" value={currentSetting.rebound} onChange={handleSettingsChange} />
          <TextField fullWidth margin="normal" name="sag" label="Sag" value={currentSetting.sag} onChange={handleSettingsChange} />
          <TextField fullWidth margin="normal" name="airForkPressure" label="Air Fork Pressure" value={currentSetting.airForkPressure} onChange={handleSettingsChange} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="outlined" type="submit">
              Add Setting
            </Button>
          </Box>
        </Box>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Track</TableCell>
                <TableCell>Fork Compression</TableCell>
                <TableCell>Fork Rebound</TableCell>
                <TableCell>High-Speed Compression</TableCell>
                <TableCell>Low-Speed Compression</TableCell>
                <TableCell>Rebound</TableCell>
                <TableCell>Sag</TableCell>
                <TableCell>Air Fork Pressure</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {settings.map((setting, index) => (
                <TableRow key={index}>
                  <TableCell>{setting.date}</TableCell>
                  <TableCell>{setting.track}</TableCell>
                  <TableCell>{setting.forkCompression}</TableCell>
                  <TableCell>{setting.forkRebound}</TableCell>
                  <TableCell>{setting.highSpeedCompression}</TableCell>
                  <TableCell>{setting.lowSpeedCompression}</TableCell>
                  <TableCell>{setting.rebound}</TableCell>
                  <TableCell>{setting.sag}</TableCell>
                  <TableCell>{setting.airForkPressure}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </GradientCard>
    </ProfileContainer>
  );
};

export default Profile;