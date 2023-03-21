// React Libraries
import {useState, useEffect} from 'react';

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
  const pantryJSON = [
    {
      id: 1,
      name: 'Peanut Butter',
      quantity: 2,
      units: 'jar',
      expires: new Date('April 1, 2024'),
    },
    {
      id: 2,
      name: 'Oreos',
      quantity: 1,
      units: 'package',
      expires: new Date('June 1, 2048'),
    },
    {
      id: 3,
      name: 'Ritz Crackers',
      quantity: 1,
      units: 'box',
      expires: new Date('May 25, 2025'),
    },
  ];

  const [pantryData, setPantryData] = useState([]);

  // Load the initial states
  useEffect( () => {
    setPantryData(pantryJSON);
  },[])

  // handle Pantry additions

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/pantry' element={<Pantry pantryData={pantryData} />} />
      <Route path='/h20' element={<H20 />} />
      <Route path='/garagecabinet' element={<GarageCabinet />} />
      <Route path='/garagetote' element={<GarageTote />} />
    </Routes>
  );
};

export default App;
