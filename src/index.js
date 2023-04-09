import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './UserContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#0077c2',
    },
    secondary: {
      main: '#ffcc00',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <UserProvider>
        <ThemeProvider theme={customTheme}>
          <App />
        </ThemeProvider>
      </UserProvider>
    </React.StrictMode>
);


