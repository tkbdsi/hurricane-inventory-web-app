import React from 'react';

// My Supporting Utiltiies
import './main.css';

import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className={'main-view-container'}>
      <Link to='/pantry'>Pantry</Link>
      <Link to='/h2o'>H20</Link>
      <Link to='/garagecabinet'>Garage Cabinet</Link>
      <Link to='/garagetote'>Garage Tote</Link>
    </div>
  );
};

export default Main;
