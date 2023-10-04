import React from 'react';
import Grid from '@mui/material/Grid';
import '../App.css'; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <Grid container spacing={2} className='home'>
      <Grid item >
          <img src="/profile-pic.jpg" alt="Profile Pic" id="profile-pic" />
        </Grid>
        <Grid item>
          <h1 className="homepage-title">About me</h1>
        </Grid>

        <Grid item className='center' >
          <p id="intro">Well-rounded Full Stack Developer capable of crafting end-to-end solutions that seamlessly blend, a minimalist design and functionality. <br/>Check out some of my projects in my Portfolio Page 🌱
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
