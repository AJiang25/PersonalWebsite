import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '../components/AppBar';
import AppTheme from '../theme/AppTheme';
import Hobby from '../components/Hobbies';
import Divider from '@mui/material/Divider';
import Footer from '../components/Footer';

export default function Hobbies() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppBar />
      <div>
        <Hobby/>
        <Divider/>
        <Footer/>
      </div>
    </AppTheme>
  );
}