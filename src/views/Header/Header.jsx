import React from 'react';

import './header.css';

import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className={'header-container'}>
          <Link to='/pantry'>Pantry</Link>
          <Link to='/h20'>H20</Link>
          <Link to='/garagecabinet'>Garage Cabinet</Link>
          <Link to='/garagetote'>Garaget Tote</Link>
        </header>
      );
}

export default Header