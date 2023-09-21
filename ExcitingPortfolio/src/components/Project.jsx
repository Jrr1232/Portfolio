import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'; 
import '../App.css'; // Import the CSS file

function Project(props) {
  console.log(props.projectData);
    
  return (
    <Grid container direction="column" justify="center" className='cards'>
      <Grid item sm={6} className='cards'>
        <Card className="cards">
          <a href={props.projectData ? props.projectData.URL : ""}>
            <div className="card-media">
              <CardMedia
                component="img"
                alt={props.projectData ? props.projectData.alt : ""}
                height="140"
                image={props.projectData ? props.projectData.imgPath : ""}
              />
              <div className="overlay-text">
                {props.projectData ? props.projectData.title : ""}
                <div>
                {props.projectData ? props.projectData.bio : ""}
                </div>
              </div>
            </div>
          </a>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Project;
