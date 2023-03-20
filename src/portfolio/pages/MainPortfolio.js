import * as React from 'react';
import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function MainPortfolio() {
  const [linkedInView, setLinkedInView] = useState(true);

  const toggle = () => {
    setLinkedInView(!linkedInView);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Box display="flex" flexDirection="column">
          <Typography
            component="h1"
            variant="h5"
            color="text.primary"
            gutterBottom
          >
            Hi. My name is
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            color="text.primary"
            gutterBottom
          >
            Jirarote Jirasirikul (JJ)
          </Typography>

          {linkedInView ? (
            <Typography
              component="h1"
              variant="h4"
              color="text.primary"
              gutterBottom
            >
              System Specialist | Data Analyst
            </Typography>
          ) : (
            <Typography
              component="h1"
              variant="h4"
              color="text.primary"
              gutterBottom
            >
              Beer | Geek | Adrenaline Junkie
            </Typography>
          )}
        </Box>
        <FormControlLabel
          control={<Switch defaultUnchecked onChange={toggle} />}
          label="Be Real"
        />
      </Grid>
    </Grid>
  );
}
