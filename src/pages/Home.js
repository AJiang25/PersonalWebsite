import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppBar from '../components/AppBar';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import AppTheme from '../theme/AppTheme';

export default function Home(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppBar />
      <Hero />
      <div>
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}