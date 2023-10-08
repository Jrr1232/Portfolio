import React from 'react';
import { Grid, Typography } from '@mui/material';
import Project from '../components/Project';
import projectData from '../projects.json';
import '../App.css'; 

export default function Portfolio() {
  const firstThreeProjects = projectData.slice(0, 3);
  const lastThreeProjects = projectData.slice(3, 7);

  return (
    <>
      <h1 className='portfolio-title'>Portfolio</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} className="center">
        <div style={{ display: 'flex', flexDirection: 'row' }} id = "projects">
          {/* First Container */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={6}
            
          >
            {firstThreeProjects.map((project, i) => (
              <Grid item key={i}>
                <Project projectData={project} />
              </Grid>
            ))}
          </Grid>

          {/* Second Container */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={8}
          >
            {lastThreeProjects.map((project, i) => (
              <Grid item key={i}>
                <Project projectData={project} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
