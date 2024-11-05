import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';

const logoStyle = {
  width: '75px',
  height: '75px',
  margin: '10px',
  opacity: 0.7,
};

export default function LogoCollection() {
  return (
    <Box id="logoCollection" sx={{ paddingTop: 4 }}>
      <Typography
        component="h1"
        variant="subtitle"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        Social Media
      </Typography>
          <IconButton
            color="inherit"
            size="large"
            href="https://github.com/AJiang25"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
            style={logoStyle}
          >
          <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="large"
            href="https://www.linkedin.com/in/arnold-jiang/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
            style={logoStyle}
          >
          <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="large"
            href="mailto:jiangarnold@princeton.edu"
            aria-label="Mail"
            sx={{ alignSelf: 'center' }}
            style={logoStyle}
          >
          <MailOutlineIcon/>
          </IconButton>
          <IconButton
            color="inherit"
            size="large"
            href=""
            aria-label="Link"
            sx={{ alignSelf: 'center' }}
            style={logoStyle}
          >
          <LinkIcon/>
        </IconButton>
    </Box>
  );
}