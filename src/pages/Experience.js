import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../components/AppBar';
import AppTheme from '../theme/AppTheme';

export default function Experience() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppBar />
      <div>
        <h1>About Me</h1>
      </div>
    </AppTheme>
  );
}