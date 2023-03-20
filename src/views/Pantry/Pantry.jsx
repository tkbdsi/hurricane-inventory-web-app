import React from 'react';

import './pantry.css';

import PantryHeader from './PantryHeader';

const testData = [
  {
    id: 1,
    name: 'Peanut Butter',
    quantity: 2,
    expires: new Date('April 1, 2024'),
  },
  {
    id: 2,
    name: 'Oreos',
    quantity: 1,
    expires: new Date('June 1, 2048'),
  },
];

const Pantry = () => {
  return (
    <>
      <PantryHeader />
      <h3 className='title'>Pantry Contents</h3>
      <table className='table'>
        <thead>
          <th>Food Item</th>
          <th>Quantity</th>
          <th>Expiration</th>
        </thead>
        <tbody>
          {testData.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.quantity}</td>
              <td>{data.expires.toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Pantry;
