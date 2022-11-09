import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Button, Grid, Box } from '@mui/material';
import TabPanel from './components/TabPanel.jsx'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './js/theme.js';
import { GlobalStyles } from './js/global.js';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
        <Container maxWidth="xl" sx={{ boxShadow: 3 }}>
            <Grid container spacing={2} sx={{ p: 3 }}>
              <Grid item xs={10}>
                <TabPanel />
              </Grid>
              <Grid item xs={2}>
                <Box display="flex" justifyContent="flex-end">
                  <Button variant="outlined" onClick={toggleTheme}>Toggle Theme</Button>
                </Box>
              </Grid>
            </Grid>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
