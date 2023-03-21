import React from 'react';

import './pantry.css';

import PantryHeader from './PantryHeader';

const Pantry = ({pantryData}) => {

  return (
    <>
      <PantryHeader />
      <h3 className='title'>Pantry Contents</h3>
      <table className='table'>
        <thead>
          <tr>
          <th>Food Item</th>
          <th>Quantity</th>
          <th>Units</th>
          <th>Expiration</th>
          <th>{''}</th>
          <th>{''}</th>
          </tr>
        </thead>
        <tbody>
          {pantryData && pantryData.map((data) => (
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
      </table>
      <div className='button-new-entry'>
        <button >Create New Entry</button>
      </div>
    </>
  );
};

export default Pantry;
