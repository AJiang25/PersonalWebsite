import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../components/AppBar';
import AppTheme from '../theme/AppTheme';
import Project from '../components/Projects';

export default function Projects() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppBar />
      <div>
        <Project/>
      </div>
    </AppTheme>
  );
}