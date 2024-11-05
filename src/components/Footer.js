import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      Arnold Jiang
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const [message, setMessage] = React.useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendEmail = async () => {
    try {
      await axios.post('/api/send-email', { message });
      alert('Email sent successfully!');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minWidth: { xs: '100%', sm: '60%' },
        }}
      >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              Send an Email
            </Typography>
            <Link color="text.secondary" variant="body2" href="mailto:jiangarnold@princeton.edu">
              jiangarnold@princeton.edu
            </Link>
            {/* <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="message"
                hiddenLabel
                size="large"
                variant="outlined"
                fullWidth
                aria-label="Message"
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': 'Message',
                  },
                }}
                sx={{ width: '500px' }}
              />
            </Stack>
            <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ flexShrink: 0, mt: 2 }}
                onClick={handleSendEmail}
            >
                Send
            </Button> */}
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Website
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            About
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Projects
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Experience
          </Link>
          <Link color="text.secondary" variant="body2" href="#">
            Hobbies
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/AJiang25"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/in/arnold-jiang/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}