import React from 'react';

import './pantry.css';

import { Link } from 'react-router-dom';

const PantryHeader = () => {
  return (
    <header className={'pantry-header-container'}>
      <Link to='/'>Return to Main</Link>
      <Link to='/h20'>H20</Link>
      <Link to='/garagecabinet'>Garage Cabinet</Link>
      <Link to='/garagetote'>Garaget Tote</Link>
    </header>
  );
};

export default PantryHeader;
