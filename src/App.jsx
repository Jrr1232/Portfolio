import React from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/Navigation';
import Footer from './components/Footer';
const theme = createTheme({
  typography: {
    fontFamily: [
      'monospace', // Your custom font family
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className='background'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main style={{ flexGrow: 1 }}>
          <Outlet /> {/* This is where your routed components will be rendered */}
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
