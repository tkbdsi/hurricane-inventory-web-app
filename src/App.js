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
      id: 0,
      name: 'Peanut Butter',
      quantity: 2,
      units: 'jar',
      expires: new Date('March 24, 2024'),
    },
    {
      id: 1,
      name: 'Oreos',
      quantity: 1,
      units: 'package',
      expires: new Date('March 20, 2023'),
    },
    {
      id: 2,
      name: 'Ritz Crackers',
      quantity: 1,
      units: 'box',
      expires: new Date('May 25, 2025'),
    },
  ];

  // State for Pantry
  const [pantryData, setPantryData] = useState([]);
  const [createView, setCreateView] = useState(false);
  const [updateView, setUpdateView] = useState(false);

  // Load the initial states
  useEffect( () => {
    pantryRead(pantryJSON);
  },[])

  // handle Pantry modifications
  const pantryCreate = (e) => {
    e.preventDefault();
    setCreateView(createView => !createView);
    const tempPantryEntry = {
      id: pantryData.length,
      name: e.target["pantryFoodItem"].value,
      quantity: parseInt(e.target["pantryFoodQuantity"].value),
      units: e.target["pantryFoodUnits"].value,
      expires: new Date(e.target["pantryFoodDate"].value),
    }
    setPantryData([...pantryData, tempPantryEntry]);
  }

  const pantryRead = (data) => {
    setPantryData(data);
  }

  const pantryUpdate = (e) => {
    e.preventDefault();
    setUpdateView(updateView => !updateView);
  }

  const pantryDelete = (id) => {
    const tempPantryFilter = pantryData.filter( (entry) => entry.id !== id);
    const confirm = window.confirm('Delete this entry from your Pantry?');
    if (confirm) setPantryData(tempPantryFilter);
  }

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/pantry' element={
        <Pantry 
          pantryData={pantryData}
          createView={createView}
          setCreateView={setCreateView}
          pantryCreate={pantryCreate}
          pantryDelete={pantryDelete}
        />} 
      />
      <Route path='/h20' element={<H20 />} />
      <Route path='/garagecabinet' element={<GarageCabinet />} />
      <Route path='/garagetote' element={<GarageTote />} />
    </Routes>
  );
};

export default App;
