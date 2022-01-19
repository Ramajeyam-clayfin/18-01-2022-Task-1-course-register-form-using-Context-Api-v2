import React, {useContext} from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Display from './Display';
import { Info } from './Context';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import './style.css';

export default function App() {
  const { currentStep } = useContext(Info);

  function showStep(step) {
    switch (step) {
      case 1:
        return <Form1 />;
      case 2:
        return <Form2 />;
      case 3:
        return <Form3 />;
      case 4:
        return <Display />;
      
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}> Course Registration</h1>
      <div >
        <div >
          <Stepper activeStep={currentStep - 1} >
            <Step>
              <StepLabel> </StepLabel>
            </Step>

            <Step>
              <StepLabel> </StepLabel>
            </Step>

            <Step>
              <StepLabel> </StepLabel>
            </Step>

            <Step>
              <StepLabel> </StepLabel>
            </Step>

          </Stepper>
        </div>
        {showStep(currentStep)}
        
      </div>
    </div>
  );
}
