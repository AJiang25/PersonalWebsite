import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';


export default function HighlightedCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
          <Typography
            sx={{
              fontWeight: '600',
            }}
          >
            Upgrade with AI
          </Typography>
          <InsightsRoundedIcon />
        </Box>
        <Typography sx={{fontSize: 8, color: 'text.secondary', mb: 1}}>
          Learn more about what Arnold has done in this area.
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          href="https://github.com/AJiang25"
          aria-label="GitHub"
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
        >
          See Github
        </Button>
      </CardContent>
    </Card>
  );
}