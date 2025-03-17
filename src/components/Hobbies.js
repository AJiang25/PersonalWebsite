import React from 'react';
import { Link, Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import Bali from '../assets/Bali.jpg';
import HK from '../assets/HongKong.jpg';
import Korea from '../assets/Korea.jpg';
import Japan from '../assets/Japan.jpg';
import HCMC from '../assets/Hanoi.jpg';
import Singapore from '../assets/Singapore.png';
import Swimming from '../assets/Swimming.jpg';

const hobbies = [
  {
    title: 'Bali, Indonesia',
    description: 'A Monkey from Monkey Forest',
    image: Bali,
  },
  {
    title: 'Seoul, South Korea',
    description: 'The Starfield library in Seoul',
    image: Korea,
  },
  {
    title: 'Cheng Chau, Hong Kong, China',
    description: 'Hiking in Cheung Chau island with friends',
    image: HK,
  },
  {
    title: 'Tokyo, Japan',
    description: 'Shiinamachi Station outside the JR line',
    image: Japan,
  },
  {
    title: 'Hanoi, Vietnam',
    description: 'Ho Chi Minh\'s resting place',
    image: HCMC,
  },
  {
    title: 'Singapore',
    description: 'Marina Bay Sands',
    image: Singapore,
  },
];

export default function Hobbies() {
  return (
    <Container
      id="hobbies"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        My Hobbies
      </Typography>
      <Typography
        component="h5"
        variant="h5"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Photography and Traveling
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={4}>
          {hobbies.map((hobby, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={hobby.image}
                  alt={hobby.title}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {hobby.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {hobby.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Typography
        component="h5"
        variant="h5"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Swimming
      </Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="300"
            image={Swimming}
            alt="Swimming"
          />
          <CardContent>
                  <Typography variant="h6" component="h3">
                    <Link
                        href="https://www.swimcloud.com/swimmer/2291760/"
                        target="_blank"
                        rel="noopener"
                        sx={{
                            color: 'primary.main',
                            textAlign: { sm: 'left', md: 'center' },
                            display: 'block',
                            mt: 2,
                        }}
                    >
                        View my Swim Cloud profile
                    </Link>
                  </Typography>
                  
                </CardContent>
        </Card>
      </Box>
    </Container>
  );
}