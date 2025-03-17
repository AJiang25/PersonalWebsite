import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

function AreaGradient({ color, id }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.5} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

AreaGradient.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default function CoursesChart() {
  const theme = useTheme();
  const data = ['Fall 22', 'Spring 23', 'Fall 23', 'Spring 24', 'Fall 24'];

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h1" variant="title" gutterBottom>
          Courses
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Courses at Princeton
          </Typography>
        </Stack>
        <LineChart
          colors={colorPalette}
          xAxis={[
            {
              scaleType: 'point',
              data,
            },
          ]}
          series={[
            {
              id: 'intro',
              label: 'Intro to Programming',
              showMark: true,
              curve: 'linear',
              area: true,
              data: [
                4.0, null, null, null, null
              ],
            },
            {
              id: 'programming',
              label: 'Programming Systems',
              showMark: true,
              curve: 'linear',
              area: true,
              data: [
                null, 3.7, null, null, null
              ],
            },
            {
              id: 'discrete',
              label: 'Discrete',
              showMark: true,
              curve: 'linear',
              data: [
                null, 4.0, null, null, null
              ],
              area: true,
            },
            {
              id: 'dataStructures',
              label: 'Data Structure & Algorithms',
              showMark: true,
              curve: 'linear',
              data: [
                null, null, 3.7, null, null
              ],
              area: true,
            },
            {
              id: 'computing',
              label: 'Computing & Economic Theory',
              showMark: true,
              curve: 'linear',
              data: [
                null, null, null, 4.0, null
              ],
              area: true,
            },
            {
              id: 'machineLearning',
              label: 'Machine Learning',
              showMark: true,
              curve: 'linear',
              data: [
                null, null, null, 3.0, null
              ],
              area: true,
            },
            {
              id: 'webDevelopment',
              label: 'Web Development',
              showMark: true,
              curve: 'linear',
              stack: 'total',
              data: [
                null, null, null, null, null
              ],
              area: true,
            },
            {
              id: 'bioinfomatics',
              label: 'Bioinfomatics',
              showMark: true,
              curve: 'linear',
              stack: 'total',
              data: [
                null, null, null, null, null
              ],
              area: true,
            },
            {
              id: 'databases',
              label: 'Databases',
              showMark: true,
              curve: 'linear',
              stack: 'total',
              data: [
                null, null, null, null, null
              ],
              area: true,
            },
          ]}
          height={250}
          margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          sx={{
            '& .MuiAreaElement-series-intro': {
              fill: "url('#intro')",
            },
            '& .MuiAreaElement-series-programming': {
              fill: "url('#programming')",
            },
            '& .MuiAreaElement-series-discrete': {
              fill: "url('#discrete')",
            },
            '& .MuiAreaElement-series-dataStructures': {
              fill: "url('#dataStructures')",
            },
            '& .MuiAreaElement-series-computing': {
              fill: "url('#computing')",
            },
            '& .MuiAreaElement-series-machineLearning': {
              fill: "url('#machineLearning')",
            },
            '& .MuiAreaElement-series-webDevelopment': {
              fill: "url('#webDevelopment')",
            },
            '& .MuiAreaElement-series-bioinformatics': {
              fill: "url('#bioinformatics')",
            },
            '& .MuiAreaElement-series-databases': {
              fill: "url('#databases')",
            },
          }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        >
          <AreaGradient color={theme.palette.primary.light} id="intro" />
          <AreaGradient color={theme.palette.primary.main} id="programming" />
          <AreaGradient color={theme.palette.primary.dark} id="discrete" />
          <AreaGradient color={theme.palette.secondary.light} id="dataStructures" />
          <AreaGradient color={theme.palette.secondary.main} id="computing" />
          <AreaGradient color={theme.palette.secondary.dark} id="machineLearning" />
          <AreaGradient color={theme.palette.error.main} id="webDevelopment" />
          <AreaGradient color={theme.palette.error.main} id="bioinfomatics" />
          <AreaGradient color={theme.palette.error.main} id="databases" />
        </LineChart>
      </CardContent>
    </Card>
  );
}