import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/system';
import ArticleIcon from '@mui/icons-material/Article';
import ResumePDF from '../assets/jiang_arnold_resume.pdf';

export default function Resume() {
  return (
    <Box id="resume" sx={{ py: 4 }}>
      <Typography
        component="h1"
        variant="subtitle"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Resume
      </Typography>
      <Button 
        variant="contained" 
        href={ResumePDF} 
        download="jiang_arnold_resume.pdf"
        color="secondary" 
        startIcon={<ArticleIcon/>}
      >
       View Resume
      </Button>
    </Box>
  );
}