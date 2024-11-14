import React from 'react';
import { Grid2, Card, CardContent, Typography, LinearProgress, Chip, Box } from '@mui/material';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { Html5PlainWordmark, 
        PythonOriginal, 
        AmazonwebservicesOriginalWordmark, 
        LinuxOriginal, 
        DockerPlain, 
        GitOriginal, 
        TensorflowOriginal, 
        AzuresqldatabasePlain, 
        NodejsPlainWordmark, 
        ReactOriginal,
        COriginal,
        CplusplusOriginal,
        JavaOriginal,
        ROriginal,
        MongodbOriginal
      } from 'devicons-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';

const skills = [
  { name: 'Java', icon: JavaOriginal, progress: 90, tags: ['Backend'] },
  { name: 'JavaScript', icon: JavascriptIcon, progress: 60, tags: ['Frontend', 'Backend'] },
  { name: 'Python', icon: PythonOriginal, progress: 60, tags: ['Backend', 'Data Science'] },
  { name: 'C', icon: COriginal, progress: 50, tags: ['Systems'] },
  { name: 'C++', icon: CplusplusOriginal, progress: 40, tags: ['Systems'] },
  { name: 'React', icon: ReactOriginal, progress: 70, tags: ['Frontend'] },
  { name: 'Node.js', icon: NodejsPlainWordmark, progress: 80, tags: ['Backend'] },
  { name: 'HTML/CSS', icon: Html5PlainWordmark, progress: 95, tags: ['Frontend'] },
  { name: 'PHP', icon: Html5PlainWordmark, progress: 30, tags: ['Frontend'] },
  { name: 'R', icon: ROriginal, progress: 50, tags: ['Database'] },
  { name: 'MongoDB', icon: MongodbOriginal, progress: 20, tags: ['Database', 'Data Science'] },
  { name: 'SQL', icon: AzuresqldatabasePlain, progress: 70, tags: ['Database', 'Data Science'] },
  { name: 'TensorFlow', icon: TensorflowOriginal, progress: 10, tags: ['Machine Learning'] },
  { name: 'Git', icon: GitOriginal, progress: 85, tags: ['Version Control'] },
  { name: 'Docker', icon: DockerPlain, progress: 60, tags: ['DevOps'] },
  { name: 'AWS', icon: AmazonwebservicesOriginalWordmark, progress: 65, tags: ['Cloud'] },
  { name: 'Linux', icon: LinuxOriginal, progress: 75, tags: ['Operating System'] },
];

const getProgressColor = (progress) => {
  if (progress >= 80) return '#4caf50'; // Green for advanced
  if (progress >= 60) return '#2196f3'; // Blue for intermediate
  return '#ff9800'; // Orange for beginner
};

const SkillCard = ({ name, icon: Icon, progress, tags }) => (
  <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Icon size={24} />
        <Typography variant="h6" ml={1}>{name}</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            flexGrow: 1, 
            ml: 1,
            '& .MuiLinearProgress-bar': {
              backgroundColor: getProgressColor(progress),
            },
          }}
        />
      </Box>
      <Box mt="auto">
        {tags.map((tag) => (
          <Chip key={tag} label={tag} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
        ))}
      </Box>
    </CardContent>
  </Card>
);

const Skills = () => (
    <Box
      id="About"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 15 },
          pb: { xs: 8, sm: 12 },
        }}
      >
  <Grid2 container spacing={2}>
    {skills.map((skill) => (
      <Grid2 item xs={12} sm={6} md={4} lg={2.4} key={skill.name} sx={{ width: '18.5%' }}>
        <SkillCard {...skill} />
      </Grid2>
    ))}
  </Grid2>
  </Container>
  </Box>
);

export default Skills;