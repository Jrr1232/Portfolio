import React from 'react';
import Grid from '@mui/material/Grid';

function Navigation() {
  return (
    <Grid container id="navbar" alignItems="center" justifyContent="space-between">
      <Grid item>
        <h1 className="title">Joaquin 'JR' Florencio</h1>
      </Grid>

      <Grid item>
        <ul className="links">
          <li><a href="/">About Me</a></li>
          <li><a href="/Portfolio">Portfolio</a></li>
          <li><a href="/Contact">Contact Me</a></li>
          <li><a href="/Resume">Resume</a></li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Navigation;
