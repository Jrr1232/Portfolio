import React from 'react';
import Grid from '@mui/material/Grid';

function Navigation() {
  return (
    <Grid container id="navbar" alignItems="center" justifyContent="space-between">
      <Grid item>
      <div className="text-container"><a href='/'>
        <p>Joaquin Florencio</p></a>
  </div>
        </Grid>

      <Grid item >
        <ul className="links">
          <li><a href="/" id="about-me">About Me</a></li>
          <li><a href="/Portfolio" id="portfolio">Portfolio</a></li>
          <li><a href="/Contact" id="contact-me">Contact Me</a></li>
          <li><a href="/Resume" id="resume">Resume</a></li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Navigation;
