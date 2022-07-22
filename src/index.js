import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import App from './App';
import About from './containers/About';
import Login from './containers/Login';
import MovieList from './containers/MovieList';
import NotFound from './containers/NotFound';
import Register from './containers/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Description from './containers/Description';
import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute> 
        }>
          <Route path="/" element={<MovieList />} />
        </Route>
          <Route path="login" element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute> } />
          <Route path="register" element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute> } />
          <Route path="about" element={<About />} />
          <Route path="Description/:id" element={<Description />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
