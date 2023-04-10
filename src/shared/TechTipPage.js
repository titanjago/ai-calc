import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Container, Collapse, Grid } from '@mui/material';

function TechTip(props) {
  const { title, text } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ background: 'linear-gradient(45deg, #ff9800 30%, #ffeb3b 90%)', borderRadius: 3, boxShadow: 3, marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.5rem', color: '#303f9f', mb: 2 }}>
            {title}
          </Typography>
          <Box sx={{ bgcolor: '#f5f5f5', py: 2, px: 4 }}>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.2rem', color: '#666', lineHeight: 1.5 }}>
              {text}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

function TechTipPage() {
  const [showTips, setShowTips] = useState(false);

  const techTipsData = [
    {
        title: 'Characteristics of sag that’s too high',
        text: `• The bike knifes in corners.
  • Shock is overly active, or kicks.
  • Fishtailing under acceleration.
  • Kicking under braking.
  • Bike feels stink-bugged.`,
      },
      {
        title: 'Characteristics of sag that’s too low',
        text: `• The front end feels tall and harsh.
  • Front end pushes in corners.
  • Rear end feels low and harsh in whoops.
  • Front end deflects, or it’s difficult to hold a line.
  • Bike feels choppered.`,
      },
      {
        title: 'Characteristics that may require stiffening fork comp.',
        text: `• The forks bottom on impacts.
  • Front end dives too low under braking or in corners.
  • Forks are harsh under braking from riding too low in the stroke.`,
      },
      {
        title: 'Characteristics that may require softening fork comp.',
        text: `• The front-end rides high and deflects.
  • Forks don’t dive enough when cornering; need to track better.`,
      },
      {
        title: 'Characteristics of a front end that’s too low',
        text: `• Stink bug feel; the back end feels tall.
  • The front end is harsh under braking; there may be too much weight on the front.
  • Knifing, or tucking, when cornering.
  • Unstable or “twitchy” at speed`,
      },
      {
        title: 'Characteristics of a front end that’s too tall',
        text: `• A “choppered” feel; the back end feels low.
  • The front end feels too light and dances or deflects under acceleration.
  • Front end pushes in corners`,
      },
      {
        title: 'Characteristics that may require stiffening (slowing) fork rebound',
        text: `• The forks dance under acceleration.
  • Front end bounces up after jump impact.
  • The forks bounce up out of ruts.`,
      },
      {
        title: 'Characteristics that may require softening (speeding up) fork rebound',
        text: `• Forks pack under braking; ride too low.
  • The front end feels dead.
  • The forks are harsh when braking over bumps.
  • Front end is harsh at high speeds.`,
      },
      {
        title: 'Characteristics that may require stiffening high-speed comp.',
        text: `• Rear end feels low, especially under acceleration or cornering.
  • Shock bottoms on flat landings.
  • Shock wallows or feels vague when cornering.
  • The shock has a “short-travel” feel.`,
      },
      {
        title: 'Characteristics that may require softening high-speed comp.',
        text: `• Rear end rides high; feels stink-bugged.
  • Shock feels harsh over acceleration chop.
  • Rear end needs to squat and track better when cornering.`,
      },
      {
        title: 'Characteristics that may require stiffening low-speed comp.',
        text: `• Shock wallows under acceleration.
  • Rear end feels loose and soft.
  • Shock bottoms in g-outs or rolling jump faces.`,
      },
      {
        title: 'Characteristics that may require softening low-speed comp.',
        text: `• Shock doesn't absorb rolling bumps or whoops.
  • Rear end won't settle, feels stiff on jump faces.`,
      },
  ];

  const handleClick = () => {
    setShowTips(true);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {!showTips && (
          <Card onClick={handleClick} sx={{ cursor: 'pointer', background: 'linear-gradient(45deg, #ff9800 30%, #ffeb3b 90%)', borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', fontSize: '2rem', color: '#303f9f', mb: 2 }}>
                Click For Colt's Epic Tech Tips
              </Typography>
            </CardContent>
          </Card>
        )}
        {showTips && (
          <Grid container spacing={4}>
            {techTipsData.map((tip, index) => (
              <TechTip key={index} title={tip.title} text={tip.text} />
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default TechTipPage;

