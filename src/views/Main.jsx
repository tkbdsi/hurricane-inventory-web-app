import React from 'react';

import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Link to='/pantry'>Pantry</Link>
      <Link to='/h2o'>H20</Link>
      <Link to='/garagecabinet'>Garage Cabinet</Link>
      <div>Garage Tote</div>
    </div>
  );
};

export default Main;
