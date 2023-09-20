import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia  } from '@mui/material';

export default function Portfolio() {
  return (
    <>
      <Typography variant="h4" align="center" className="portfolio-title">
        Portfolio
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={2} sm={6} md={2}>
          
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <a href="https://example.com/project2">
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image="/readme.png"
              />
            </a>
            <CardContent>
              {/* Add project details or description here */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <a href="https://example.com/project2">
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image="/password-project.jpg"
              />
            </a>
            <CardContent>
              {/* Add project details or description here */}
            </CardContent>
          </Card>
        </Grid>
        {/* Add more Grid items for additional projects */}
      </Grid>
    </>
  );
}
