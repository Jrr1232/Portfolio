import React from 'react';
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1 className="homepage-title">About me</h1>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <img src="/profile-pic.jpg" alt="Profile Pic" id="profile-pic" />
      </Grid>

      <Grid item xs={12} sm={6} md={8}>
        <p id="intro">👋 Hi, my name is Joaquin Florencio and im interested in Machine Learning and Python. I'm currently learning Full Stack Web Development and have experience in CS. I am an avid snowboarder and I enjoy martial arts.🌱
        </p>
      </Grid>
    </Grid>
  );
}

export default Home;
