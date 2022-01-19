import React, { useContext } from 'react';
import { Info } from './Context';

import './style.css';

export default function Display() {

  const {setStep, user, course} = useContext(Info);

  return (
    <div>
      Name : {user.name} <br />
      <br />
      Email : {user.mail} <br />
      <br />
      Mobile : {user.mob} <br />
      <br />
      Gender : {user.gender} <br />
      <br />
      Address : <br /> {user.street}, <br />
      {user.line2}
      <br />
      City : {user.city} <br />
      <br />
      State : {user.state} - {user.zipcode} <br />
      <br />
      Country : {user.country} <br />
      <br />
      Course Language : {course.lang} <br />
      <br />
      Payment Mode : {course.payment} <br />
      <br />
      <button  onClick={() => setStep(1)}>Home</button>
    </div>
  );
  
}
