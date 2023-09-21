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

        <Grid item >
          <p id="intro">👋 Hi, my name is Joaquin Florencio and I'm interested in Machine Learning and Python. I'm currently learning Full Stack Web Development and have experience in CS. I am an avid snowboarder and I enjoy martial arts.🌱
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
