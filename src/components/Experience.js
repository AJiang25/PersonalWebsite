import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Paper } from '@mui/material';
import AppBar from '../components/AppBar';
import AppTheme from '../theme/AppTheme';

const experiences = [
  {
    title: 'Incoming Software Development Intern',
    company: 'Amazon',
    date: 'Summer 2025',
    description: 'Excited to back in NYC as at Amazon Advertising!',
  },
  {
    title: 'Software Development Intern',
    company: 'Amazon',
    date: 'Summer 2024',
    description: 'Implemented a JS front-end library to track advertiser behavioral analytics on the Amazon advertising console. Tech Stack: SQL, S3 Buckets, Amazon Redshift, AWS Glue Crawler',
  },
  {
    title: 'Software Development Intern',
    company: 'Amazon',
    date: 'Summer 2023',
    description: 'Developed an internal troubleshooting tool, integrating ReactJS, TypeScript, and CSS for front-end development that would make backend REST API calls to the Brand Advertising Measurements team’s API service.',
  },
  {
    title: 'General Intern',
    company: 'Bank of America',
    date: 'Summer 2022',
    description: 'Collaborated with local non-profits including the Boys and Girls Club of America to develop and implement business strategies that supported their mission and goals.',
  },
];

export default function Experience() {
  console.log('Rendering Experience component');
  console.log('Experiences:', experiences);

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppBar />
      <div style={{ padding: '150px'}}>
        <Typography variant="h2" gutterBottomsx>My Experience</Typography>
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index !== experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} style={{ padding: '16px' }}>
                  <Typography variant="h6" component="h1">{exp.title}</Typography>
                  <Typography>{exp.company}</Typography>
                  <Typography color="textSecondary">{exp.date}</Typography>
                  <Typography>{exp.description}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </AppTheme>
  );
}