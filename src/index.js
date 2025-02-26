import React from 'react';
import { createRoot } from 'react-dom/client';  // import createRoot from React 18
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, Persister } from './components/redux/Store';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';

const theme = createTheme({
  palette: {
    primary: { main: "#019267" },
    secondary: { main: "#ccc" },
    tertiary: { main: "#b66dff" },
  },
  components: {
    MuiButton: {
      styleOverrides: { root: { '&:focus': { outline: 'none' } } }
    },
    MuiIconButton: {
      styleOverrides: { root: { '&:focus': { outline: 'none' } } }
    },
    MuiTab: {
      styleOverrides: { root: { '&:focus': { outline: 'none' } } }
    },
    MuiPagination: {
      styleOverrides: { root: { '&:focus': { outline: 'none' } } }
    },
    MuiPaginationItem: {
      styleOverrides: { root: { '&:focus': { outline: 'none' } } }
    }
  }
});

// Correct way for React 18
const root = createRoot(document.getElementById('root'));  // createRoot instead of ReactDOM.render
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={Persister}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
