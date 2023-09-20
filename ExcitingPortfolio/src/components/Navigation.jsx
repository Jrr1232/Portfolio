import React from 'react';
import Grid from '@mui/material/Grid';

function Navigation() {
  return (
    <Grid container id="navbar" alignItems="center" justifyContent="space-between">
      {/* Logo */}
      <Grid item>
        <h1 className="title">Junior 'Junz'</h1>
      </Grid>

      {/* Menu Links */}
      <Grid item>
        <ul className="links">
          <li><a href="/">About Me</a></li>
          <li><a href="/Portfolio">Portfolio</a></li>
          <li><a href="/Contact">Contact Me</a></li>
          <li><a href="/">Resume</a></li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Navigation;
