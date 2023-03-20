import * as React from 'react';
import { useState } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';

export default function AboutMe() {
  const [linkedInView, setLinkedInView] = useState(true);

  const toggle = () => {
    setLinkedInView(!linkedInView);
  };
  return (
    <Grid
      container
      spacing={2}
      // alignItems="center"
      justifyContent="center"
      // style={{ minHeight: '100vh' }}
      sx={{
        bgcolor: 'background.paper',
        pt: 10,
        pb: 6,
        // minHeight: '100vh',
      }}
    >
      <Grid item xs={12}>
        <Typography
          component="h1"
          variant="h2"
          color="text.primary"
          align="center"
        >
          About Me
        </Typography>
      </Grid>
      <Grid item xs={7}>
        {linkedInView ? (
          <Typography>
            Analytical, innovative, and progressive system analyst with 7 years
            of overseas experience in a multinational oil and gas company,
            looking to leverage analytical and communication skills as a data
            analyst. Currently studying the final semester of the Master of Data
            Science (MDS) at Monash University as a Minor thesis researcher
            specializing in natural language processing (NLP). The project
            involves knowledge in machine learning, data analytics, and
            modeling, data visualization, and data engineering that associate
            with data analysis tools and frameworks such as Python (Pytorch,
            Matplotlib, Pandas, Numpy), R, SQL (SQL Server, MySQL), JavaScript
            (d3.js, AngularJS), PowerBI and Tableau. With additional soft skills
            of project management and problem-solving.
          </Typography>
        ) : (
          <div>
            <Typography>
              JACK-OF-ALL-TRADES in IT because of I want to make things happen.
            </Typography>
            <Typography>
              Driven by Laziness... That is why I have loads of idea to make
              things easier for me.
            </Typography>
            <Typography>
              Started as Programmer in middle school because of interest in
              Robotics and MMORPG Games (Ragnarok Online).
            </Typography>
            <Typography>
              Ended up as System Engineer / Data Scienctist / Full-Stack
              Developer *** whatsoever ***
            </Typography>
            <Typography>
              ... Just being very happy every time someone used my solution.
            </Typography>
          </div>
        )}
      </Grid>
      <Grid item xs={3}>
        {linkedInView ? (
          <Avatar
            alt="Jirarote Jirasirikul"
            src="https://media.licdn.com/dms/image/D5635AQHedAV5fMnHHA/profile-framedphoto-shrink_200_200/0/1631684824919?e=1679907600&v=beta&t=RPn4Gu5L8QnQUsmtFBS9nFQMH647cwRteW-UgvplrPk"
            sx={{ width: 200, height: 200 }}
          />
        ) : (
          <Avatar
            alt="Jirarote Jirasirikul"
            src="https://media.licdn.com/dms/image/C5616AQF7OMaztWowYA/profile-displaybackgroundimage-shrink_350_1400/0/1588729390988?e=1684972800&v=beta&t=F785Yl7IUjp0ehnD5vbfaDRvDWax2qpEiV3WLL5pAo8"
            sx={{ width: 200, height: 200 }}
          />
        )}
      </Grid>
      <Grid item xs={10}>
        <FormControlLabel
          control={<Switch defaultUnchecked onChange={toggle} />}
          label="Be Real"
        />
      </Grid>
      {/* <Grid item xs={3}>
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
          <Typography
            component="h1"
            variant="h4"
            color="text.primary"
            gutterBottom
          >
            BEER, GEEK, ADRENALINE JUNKIE
          </Typography>
          <Typography>
            JACK-OF-ALL-TRADES in IT because of my passion to deliver products
            from start-to-end.
          </Typography>
          <Typography>
            Started as Programmer in middle school because of interest in
            Robotics and MMORPG Games (Ragnarok Online).
          </Typography>
          <Typography>
            Ended up as System Engineer / Data Scienctist / Full-Stack Developer
            *** whatsoever ***
          </Typography>
          <Typography>
            ... that is very happy every time customers used my solution.
          </Typography>
        </Box>
      </Grid> */}
    </Grid>
  );
}
