// My Views
import Main from './views/Main/Main';
import Pantry from './views/Pantry/Pantry';
import H20 from './views/H20/H2O';
import GarageCabinet from './views/GarageCabinet/GarageCabinet';
import GarageTote from './views/GarageTote/GarageTote';

// My Utilities and Styles
import './app.css';

// Third Party - React Router
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/pantry' element={<Pantry />} />
      <Route path='/h20' element={<H20 />} />
      <Route path='/garagecabinet' element={<GarageCabinet />} />
      <Route path='/garagetote' element={<GarageTote />} />
    </Routes>
  );
};

export default App;
