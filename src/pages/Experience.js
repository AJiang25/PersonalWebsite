import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../components/AppBar';
import AppTheme from '../theme/AppTheme';
import Exp from '../components/Experience';
import Divider from '@mui/material/Divider';
import Footer from '../components/Footer';

export default function Experience() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppBar />
      <div>
        <Divider/>
        <Exp />
        <Divider/>
        <Footer/>
      </div>
    </AppTheme>
  );
}