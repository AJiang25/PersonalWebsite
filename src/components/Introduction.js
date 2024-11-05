import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function IntroductionCard() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
      <Typography
          component="h2"
          variant="subtitle"
          gutterBottom
          sx={{ fontWeight: '600'}}
        >
          Bio
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
          Hi, my name is Arnold Jiang. I am passionate about software, full-stack, web, & system design. I aspire to create innovative and impactful solutions that can benefit society and improve lives.
        </Typography>
      </CardContent>
    </Card>
  );
}