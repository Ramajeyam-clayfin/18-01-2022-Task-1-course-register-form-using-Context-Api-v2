import React, { useContext } from 'react';
import {Info} from './Context';
import './style.css';

export default function Form2() {
  
  const {setStep, course, setcourse} = useContext(Info);

  return (
    <div>

      <form >
        <br />
        <label>Course : </label>
        <input
          type="radio"
          name="lang"
          value="C"
          onChange={(e) =>
            setcourse((course) => ({ ...course, lang: e.target.value }))
          }
        />
        <label> C </label>
        <input
          type="radio"
          name="lang"
          value="Java"
          onChange={(e) =>
            setcourse((course) => ({ ...course, lang: e.target.value }))
          }
        />
        <label> Java </label>

        <input
          type="radio"
          name="lang"
          value="Asp"
          onChange={(e) =>
            setcourse((course) => ({ ...course, lang: e.target.value }))
          }
        />
        <label> Asp </label>

        <input
          type="radio"
          name="lang"
          value="Python"
          onChange={(e) =>
            setcourse((course) => ({ ...course, lang: e.target.value }))
          }
        />
        <label> Python </label>
        <br />
        <br />
        <label> Language You Want To Work :  </label>
        <input
          type="text"
          value={course.lang}
        />
        <br />
        <br />
        <button onClick={() => setStep(1)}> Previous Form </button>
        {' '} {' '}
        <button  onClick={() => setStep(3)} >Next Form </button>
        <br />
      </form>
    </div>
  );
  
}
