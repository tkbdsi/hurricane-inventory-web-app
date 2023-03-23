import React, {useState, useEffect} from 'react';

import './pantry.css';

import Header from '../Header/Header';

const Pantry = ({pantryData, createView, setCreateView, pantryCreate, updateView, setUpdateView, pantryUpdate, pantryDelete}) => {

  const [formFoodItem, setFormFoodItem] = useState("");
  const [formFoodQuantity, setFormFoodQuantity] = useState(1);
  const [formFoodUnits, setFormFoodUnits] = useState("");
  const [formFoodExperiation, setFormFoodExperiation] = useState(new Date());
  
  const [todaysDate, setTodaysDate] = useState(new Date());

  const [updateFoodItem, setUpdateFoodItem] = useState("");
  const [updateFoodQuantity, setUpdateFoodQuantity] = useState(1);
  const [updateFoodUnits, setUpdateFoodUnits] = useState("");
  const [updateFoodExperiation, setUpdateFoodExperiation] = useState(new Date());

  useEffect( () => {
    setTodaysDate(new Date(Date.now()));
  },[])

  const calculateTimeDifference = (d1, d2) => {
    let timeDifference = Math.floor((d1 - d2)/(1000*60*60*24));
    if (timeDifference < 0) timeDifference += 1;
    return timeDifference;
  }

const clickUpdate = (data) => {
  setUpdateView(updateView => !updateView);
  let dateHandle = new Date(data.expires);
  let dateYear = dateHandle.getFullYear();
  let dateDay = dateHandle.getDate();
  let dateMonth = dateHandle.getMonth() + 1;
  if (dateDay < 10) dateDay = `0${dateDay}`;
  if (dateMonth < 10) dateMonth = `0${dateMonth}`;

  console.log(data);

  console.log(`${dateYear}-${dateDay}-${dateMonth}`);
  setUpdateFoodItem(data.name);
  setUpdateFoodQuantity(data.quantity);
  setUpdateFoodUnits(data.units);
  setUpdateFoodExperiation(`${dateYear}-${dateMonth}-${dateDay}`);
}

const handleUpdate = (e) => {
  e.preventDefault();
  setUpdateView(updateView => !updateView);
}

 const handleCreate = (e) => {
  e.preventDefault();
  pantryCreate(e);
  setFormFoodItem("");
  setFormFoodQuantity(1);
  setFormFoodUnits("");
  setFormFoodExperiation(new Date());
 }

  return (
    <>
      <Header />
      <h3 className='title'>Pantry Contents</h3>
      <h4 className='title'> {todaysDate.toLocaleString()}</h4>
      <table className='table'>
        <thead>
          <tr>
          <th>Food Item</th>
          <th>Quantity</th>
          <th>Units</th>
          <th>Expiration</th>
          <th>Days Left</th>
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
              <td>{calculateTimeDifference(data.expires,todaysDate)}</td>
              <td>
                <button onClick={() => clickUpdate(data)} disabled={updateView || createView}>Update Entry</button>
              </td>
              <td>
                <button onClick={() => pantryDelete(data.id)} disabled={updateView || createView}>Delete Entry</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={createView ? 'create-view ' : 'create-view-false'}>
        <div className='formWrapper'>
            <form onSubmit={handleCreate}>
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
                <input type="date" name="pantryFoodDate" value={formFoodExperiation} onChange={(e) => setUpdateFoodExperiation(e.target.value)} required/>
                </label>
                <span>
                  <button type='button' style={{backgroundColor: 'red'}} onClick={() => setCreateView(createView => !createView)}>Cancel</button>
                  <button type="submit">Finish Adding</button>
                </span>
            </form>
          </div>
      </div>

      <div className={updateView ? 'update-view ' : 'update-view-false'}>
        <div className='formWrapper'>
            <form onSubmit={handleUpdate}>
                <label htmlFor="pantryFoodItem">
                  Food Item{" "}
                <input type="text" name="pantryFoodItem" value={updateFoodItem} onChange={(e) => setUpdateFoodItem(e.target.value)} required/>
                </label>
                <label htmlFor="pantryFoodQuantity">
                  Quantity{" "}
                <input type="number" name="pantryFoodQuantity" value={updateFoodQuantity} min={0} step={1} onChange={(e) => setUpdateFoodQuantity(e.target.value)} required/>
                </label>
                <label htmlFor="pantryFoodUnits">
                  Units{" "}
                <input type="text" name="pantryFoodUnits" value={updateFoodUnits} onChange={(e) => setUpdateFoodUnits(e.target.value)} required/>
                </label>
                <label htmlFor="pantryFoodDate">
                  Expiration Date{" "}
                <input type="date" name="pantryFoodDate" value={updateFoodExperiation} onChange={(e) => setUpdateFoodExperiation(e.target.value)} required/>
                </label>
                <span>                
                  <button type='button' style={{backgroundColor: 'red'}} onClick={() => setUpdateView(updateView => !updateView)}>Cancel</button>
                  <button type="submit">Finish Updating</button>
                </span>

            </form>
          </div>      
      </div>

      <div className={'button-new-entry'}>
        {createView ? null : <button className={updateView ? 'create-view-false' : null} onClick={() => setCreateView(createView => !createView)}>Create New Entry</button>}
      </div>

    </>
  );
};

export default Pantry;
