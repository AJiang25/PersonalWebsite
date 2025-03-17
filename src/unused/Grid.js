import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HighlightedCard from './HighlightedCard';
import CoursesChart from './CoursesChart';
import StatCard from './StatCard';
import Container from '@mui/material/Container';
import TitleCard from './TitleCard';
import IntroductionCard from './Introduction';

const titleCards = ['Introduction', 'Projects', 'Photography'];

const data = [
  {
    title: 'Samples',
    value: '200',
    value1: 'File Directory Tree',
    value2: 'Anagrams',
    value3: 'Airplane Directory',
    trend: 'up',
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: 'Cameras',
    value: '325',
    value1: 'Sony A7IV',
    value2: 'Fujifilm X100V',
    value3: 'Nikon D7000',
    trend: 'neutral',
    data: [
      400, 400, 510, 530, 520, 600, 530, 520, 510, 800, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 700, 300, 420, 510, 430, 520, 510,
    ],
  },
  {
    title: 'Locations',
    value: '200k',
    value1: 'Lexington, SC',
    value2: 'Princeton, NJ',
    value3: 'New York, NY',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export default function MainGrid() {
  return (
    <Box
      id="About"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 15 },
          pb: { xs: 8, sm: 12 },
        }}
      >
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      {/* cards */}
      <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
        About Me
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
           {titleCards.map((title, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                <TitleCard title={title} />
              </Grid>
            ))}
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <HighlightedCard />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <IntroductionCard />
            </Grid>
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, md: 6 }}>
          <CoursesChart />
        </Grid>
      </Grid>
    </Box>
    </Container>
    </Box>
  );
}