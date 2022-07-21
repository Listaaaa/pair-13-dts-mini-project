import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MovieList from './containers/MovieList';

import Description from './containers/Description';
import About from './containers/About';
import Login from './containers/Login';
import Register from './containers/Register';


const App = () => {
  return (
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path="/Description" element={<Description />} />
        </Routes>
      </div>
  );
}

export default App;
