import React from 'react';
import { Grid, CssBaseline } from '@mui/material'; // Import Material-UI components
import Header from './components/Navigation';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline /> {/* Apply basic CSS reset */}
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

