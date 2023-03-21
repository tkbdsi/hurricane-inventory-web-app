import React, {useState, useEffect} from 'react';

import './pantry.css';

import PantryHeader from './PantryHeader';

const Pantry = ({pantryData, createView, setCreateView, pantryCreate, pantryDelete}) => {

  const [formFoodItem, setFormFoodItem] = useState("");
  const [formFoodQuantity, setFormFoodQuantity] = useState(1);
  const [formFoodUnits, setFormFoodUnits] = useState("");
  const [formFoodExperiation, setFormFoodExperiation] = useState(new Date());

 const handleSubmit = (e) => {
  e.preventDefault();
  pantryCreate(e);
  setFormFoodItem("");
  setFormFoodQuantity(1);
  setFormFoodUnits("");
  setFormFoodExperiation(new Date());
 }

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
                <button onClick={() => pantryDelete(data.id)}>Delete Entry</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={createView ? 'create-view ' : 'create-view-false'}>
        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="pantryFoodItem">
                  Food Item{" "}
                <input type="text" name="pantryFoodItem" value={formFoodItem} onChange={(e) => setFormFoodItem(e.target.value)} required/>
                </label>
                <label htmlFor="pantryFoodQuantity">
                  Quantity{" "}
                <input type="number" name="pantryFoodQuantity" value={formFoodQuantity} min={0} step={1} onChange={(e) => setFormFoodQuantity(e.target.value)} required/>
                </label>
                <label htmlFor="pantryFoodUnits">
                  Units{" "}
                <input type="text" name="pantryFoodUnits" value={formFoodUnits} onChange={(e) => setFormFoodUnits(e.target.value)} required/>
                </label>
                <label htmlFor="pantryFoodDate">
                  Expiration Date{" "}
                <input type="date" name="pantryFoodDate" value={formFoodExperiation} onChange={(e) => setFormFoodExperiation(e.target.value)} required/>
                </label>
                <button type="submit">Finish Adding</button>
            </form>
          </div>
      </div>
      <div className='button-new-entry'>
        {createView ? null : <button onClick={() => setCreateView(createView => !createView)}>Create New Entry</button>}
      </div>

    </>
  );
};

export default Pantry;
