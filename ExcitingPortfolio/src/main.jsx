import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'


import React from 'react'
import App from './App.jsx'
import './index.css'
import './App.css'; 
import Home from './pages/Home';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';

import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS




// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
     {
      index:true,
      element:<Home/>

     },
     {
      path: '/Portfolio',
      element: <Portfolio/>,
    },
    {
      path: '/Contact',
      element: <Contact/>,
    },
    {
      path: '/Resume',
      element: <Resume/>,
    },
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);