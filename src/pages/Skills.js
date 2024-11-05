import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../components/AppBar';
import AppTheme from '../theme/AppTheme';
import Skill from '../components/Skills'

export default function Skills() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppBar />
      <div>
        <Skill/>
      </div>
    </AppTheme>
  );
}