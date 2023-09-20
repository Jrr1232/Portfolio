import { useState } from 'react';
import '../App.css';

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
      case 'email':
        setEmailAddress(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Display a message with the user's information (you can customize this as needed)
    alert(`Hello ${userName}! Your email is ${emailAddress} and your message is: ${message}`);

    // Clear the input fields
    setUserName('');
    setEmailAddress('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h1>Hello {userName}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={emailAddress}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
