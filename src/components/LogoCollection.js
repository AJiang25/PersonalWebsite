import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';


const whiteLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const darkLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '75px',
  height: '75px',
  margin: '10px',
  opacity: 0.7,
};

export default function LogoCollection() {
  const theme = useTheme();

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