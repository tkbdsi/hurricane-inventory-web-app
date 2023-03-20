import React from 'react';

import './pantry.css';

import PantryHeader from './PantryHeader';

const testData = [
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

const Pantry = () => {
  return (
    <>
      <PantryHeader />
      <h3 className='title'>Pantry Contents</h3>
      <table className='table'>
        <thead>
          <th>Food Item</th>
          <th>Quantity</th>
          <th>Units</th>
          <th>Expiration</th>
          <th>{''}</th>
          <th>{''}</th>
        </thead>
        <tbody>
          {testData.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.quantity}</td>
              <td>{data.units}</td>
              <td>{data.expires.toLocaleDateString()}</td>
              <td>
                <button>Update Entry</button>
              </td>
              <td>
                <button>Delete Entry</button>
              </td>
            </tr>
          ))}
        </tbody>
        <button>Create New Entry</button>
      </table>
    </>
  );
};

export default Pantry;
