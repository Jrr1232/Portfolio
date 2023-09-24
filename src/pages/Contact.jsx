import { useState } from 'react';
import '../App.css';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';


function Contact() {
  // Here we set state variables for userName, message, and emailAddress using `useState`
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  // Handle changes in the input fields
  const handleInputChange = (e) => {
    // Getting the name and value of the input which triggered the change
    const { name, value } = e.target;

    // Update the corresponding state variable based on the input's name
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'message':
        setMessage(value);
        break;
      case 'emailAddress':
        setEmailAddress(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const recipient = 'Jrr232@gmail.com'; 
    const subject = encodeURIComponent(`'Email Subject'`); 
    const body = encodeURIComponent(`Hello,\n\n${message}`); 
    const sender = `${emailAddress}`;

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}&from=${sender}`;
  
    window.location.href = mailtoUrl;

    setUserName('');
    setEmailAddress('');
    setMessage('');
  };

  return (
    <Container maxWidth="sm">
<h1 class="contact-title">        Contact Me
      </h1>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item >
            <TextField
              fullWidth
              label="Name"
              name="userName"
              value={userName}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item >
            <TextField
              fullWidth
              label="Email"
              name="emailAddress"
              value={emailAddress}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          <Grid item >
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={message}
              onChange={handleInputChange}
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact;
