import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../components/AppBar';
import AppTheme from '../theme/AppTheme';
import Grid from '../components/Grid';

export default function About(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppBar />
      <Grid />
    </AppTheme>
  );
}