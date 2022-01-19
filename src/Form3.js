import React, { useContext } from 'react';
import { Info } from './Context';
import C from './C';
import Java from './Java';
import Asp from './Asp';
import Python from './Python';
import './style.css';

export default function Form3() {

  const {setStep, course, setcourse} = useContext(Info);
  let Language = () => {
    return (
      <div>
        {(() => {
          switch (course.lang) {
            case 'C':
              return <C />;
            case 'Java':
              return <Java />;
            case 'Asp':
              return <Asp />;
            case 'Python':
              return <Python />;
            default:
              return null;
          }
        })()}
      </div>
    );
  };

  return (
    <div>
      <form>
        <br />
        {Language()}

        <label>Payment Mode : </label>
        <select
          value={course.payment}
          onChange={(e) =>
            setcourse((course) => ({ ...course, payment: e.target.value }))
          }
        >
          <option value="">--select--</option>
          <option value="UPI">UPI</option>
          <option value="Paytm">Paytm</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Mobile Banking">Mobile Banking</option>
        </select>

        <br />
        <br />
        <button onClick={() => setStep(2)}>Previous Form</button>{' '}
        
        <button onClick={() => setStep(4)}> Submit </button>
        <br />
      </form>
    </div>
  );
  
}

