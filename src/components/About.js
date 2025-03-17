import React from 'react';
import { Container, Typography, Box} from '@mui/material';

const About = () => {


  return (
    <Container
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        About Me
      </Typography>
      <Box sx={{ width: { sm: '100%', md: '70%' } }}>
        <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem', mb: 3 }}>
            Hello! My name is Arnold Jiang. I am an aspiring software developer with a passion for creating beautiful and functional websites. I have experience in various web technologies and enjoy learning new things every day.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem', mb: 3 }}>
            I am currently based in Princeton, NJ. My main focus lies on the front-end, Javascript and JSX development. I also have rich experience as a full-stack developer from working as a software developer intern at Amazon with using AWS, MongoDB, ExpressJS, Node.js, PHP, and Flask tech stack.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem', mb: 3 }}>
            My first contact with web development was at my first summer at Amazon. I had never touched HTML/CSS before then. I self-taught myself by watching tutorials and reading different guides/books on front end developer. I liked how I was able to create something from scratch and be able to see real time live-changes. My manager encouraged me to create my first website which ended up being an internal tool for my team to use to manage tickets!
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ fontSize: '1rem', mb: 3 }}>
            I am constantly seeking new opportunities to learn and grow. I hope to expand upon my own skills and knowledge by tackling new challenges.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;