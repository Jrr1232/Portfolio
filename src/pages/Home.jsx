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
          <div id ="UI">
            <a href ='https://whispr-cf4e46930867.herokuapp.com/'><img src ='UI.png'></img></a>
            <p id="descriptionUI">
            UI(X)Design
          </p>
          </div>
          <div>
          <a href ='https://jrr1232.github.io/weatherApp/'><img src ='functional1.jpeg'></img></a>
            <p id="functional">
              Functionality
          </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
