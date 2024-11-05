import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TitleCard({title}) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography
          component="h2"
          variant="subtitle"
          gutterBottom
          sx={{ fontWeight: '600', textAlign: 'center' , margin: 0 }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}