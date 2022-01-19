import React, { createContext, useState } from 'react';
import App from './App';

export const Info = createContext();


export const InfoProvider = (props) => {
  const [user, setuser] = useState({
    name: '',
    mail: '',
    mob: 0,
    gender: '',
    street: '',
    line2: '',
    city: '',
    state: '',
    zipcode: 0,
    country: '',
  });
  const [course, setcourse] = useState({ lang: '', payment: '' });
  const [currentStep, setStep] = useState(1);
  


  return (
    <div>
      <Info.Provider
        value={
          {user, setuser,
          course, setcourse,
          currentStep, setStep}
        }
      >
       
        {props.children}
      </Info.Provider>
    </div>
  );
};
export const InfoConsumer = Info.Consumer;
