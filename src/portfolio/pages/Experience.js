import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Chrono } from 'react-chrono';

// Credits to https://github.com/prabhuignoto/react-chrono#props

export default function Experience() {
  const items = [
    {
      title: 'Dec 2021',
      cardTitle: 'System Specialist',
      // url: 'http://www.history.com',
      cardSubtitle: 'Glen Cameron Group · Full-time',
      cardDetailedText: `- Laying company’s data foundation by sourcing and identifying relevant data sources that will support business needs and assisting with creating Azure data pipeline architecture.
        - Facilitate conversation between managerial stakeholders, site supervisors and IT team to define project scope and timeline that utilized company's data and systems.
        - Develop data warehouse and design data integration processes (ETL/ELT) from various 3rd parties system. Construct data architecture environment for business consumption.
        - Generating information and insights from datasets, identifying trends and patterns, and creating data visualization. Aligned with executives focus on enhancing business operation safety.`,
      // media: {
      //   type: 'IMAGE',
      //   source: {
      //     url: 'http://someurl/image.jpg',
      //   },
      // },
    },
    {
      title: 'Dec 2021',
      cardTitle: 'System Engineer',
      // url: 'http://www.history.com',
      cardSubtitle: 'Fortis Security · Part-time',
      cardDetailedText: `- Develop a mobile application in C#, Kotlin and Java for security system platforms from end-to-end.
      - Customize, maintain and support system related to Genetec security platform`,
      // media: {
      //   type: 'IMAGE',
      //   source: {
      //     url: 'http://someurl/image.jpg',
      //   },
      // },
    },
    {
      title: 'Apr 2019',
      cardTitle: 'Security System - Scrum Master & Team Lead',
      // url: 'http://www.history.com',
      cardSubtitle: 'ExxonMobil · Full-time',
      cardDetailedText: `- Learn, practice and transform team processes towards Scrum & Agile methodology. Empower and coach the team to be self-organised toward aligned goals. Retrospective after each sprint to improve processes, procedures and work practices.
      - Facilitate conversation between business stakeholders, product owner and team to define project scope, timeline and prioritised backlogs. Foresee potential conflicts and resolve to provide a productive environment with a sense of ownership to the team.`,
      // media: {
      //   type: 'IMAGE',
      //   source: {
      //     url: 'http://someurl/image.jpg',
      //   },
      // },
    },
    {
      title: 'Apr 2019',
      cardTitle: 'Security System - Scrum Master & Team Lead',
      // url: 'http://www.history.com',
      cardSubtitle: 'ExxonMobil · Full-time',
      cardDetailedText: `- Learn, practice and transform team processes towards Scrum & Agile methodology. Empower and coach the team to be self-organised toward aligned goals. Retrospective after each sprint to improve processes, procedures and work practices.
      - Facilitate conversation between business stakeholders, product owner and team to define project scope, timeline and prioritised backlogs. Foresee potential conflicts and resolve to provide a productive environment with a sense of ownership to the team.`,
      // media: {
      //   type: 'IMAGE',
      //   source: {
      //     url: 'http://someurl/image.jpg',
      //   },
      // },
    },
    {
      title: 'Apr 2019',
      cardTitle: 'Security System - Scrum Master & Team Lead',
      // url: 'http://www.history.com',
      cardSubtitle: 'ExxonMobil · Full-time',
      cardDetailedText: `- Learn, practice and transform team processes towards Scrum & Agile methodology. Empower and coach the team to be self-organised toward aligned goals. Retrospective after each sprint to improve processes, procedures and work practices.
      - Facilitate conversation between business stakeholders, product owner and team to define project scope, timeline and prioritised backlogs. Foresee potential conflicts and resolve to provide a productive environment with a sense of ownership to the team.`,
      // media: {
      //   type: 'IMAGE',
      //   source: {
      //     url: 'http://someurl/image.jpg',
      //   },
      // },
      // timelineContent: <div>Custom content</div>,
    },
  ];

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
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Experience
        </Typography>
        <div style={{ width: '500px', height: '950px' }}>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            theme={{
              // primary: 'red',
              secondary: '',
              // cardBgColor: 'yellow',
              // cardForeColor: 'violet',
              // titleColor: 'black',
              // titleColorActive: 'red',
            }}
          >
            <div className="chrono-icons">
              <img src="image1.svg" alt="image1" />
              <img src="image2.svg" alt="image2" />
            </div>
          </Chrono>
        </div>
      </Grid>
    </Grid>
  );
}
