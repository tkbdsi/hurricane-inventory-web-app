import React from 'react';

import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Link to='/pantry'>Pantry</Link>
      <div>H20</div>
      <div>Garage Cabinet</div>
      <div>Garage Tote</div>
    </div>
  );
};

export default Main;
