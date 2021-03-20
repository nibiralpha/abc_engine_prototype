import React, { useState } from 'react';
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import Results from "./Results";

function App() {
  const steps = ['step1', 'step2', 'step3'];
  const [step, setStep] = useState(0);
  const [basicInfo, setBasicInfo] = useState({});
  const [axisInfo, setAxisInfo] = useState({});

  function next() {
    setStep(step + 1);
  }

  function prev() {
    setStep(step - 1);
  }

  function moveToSecondStep(data) {
    setBasicInfo(data);
    next();
  }

  function moveToResult(data) {
    setAxisInfo(data);
    next();
  }

  return (

    <div>
      <div className="container">
        {steps[step] == 'step1' && (
          <FormOne next={moveToSecondStep} />
        )}

        {steps[step] == 'step2' && (
          <FormTwo data={basicInfo} next={moveToResult} prev={prev} />
        )}

        {steps[step] == 'step3' && (
          <div>
            <Results prev={prev} basicInfo={basicInfo} axisInfo={axisInfo} />
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
