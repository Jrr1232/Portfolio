import React from 'react';
import { Grid, Typography } from '@mui/material';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <Grid container spacing={2}>
        <Grid item  sm={6}>
          <Navigation />
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h3" align="center">
            Welcome To My Page
          </Typography>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
