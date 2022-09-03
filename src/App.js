import { useState } from 'react';
import './App.css';
import LogoWrapper from './commons/LogoWrapper';
import SetupButton from './commons/SetupButton';
import Wizard from './commons/Wizard';
import Final from './components/Final';
import SetupExperience from './components/SetupExperience';
import WelcomePage from './components/WelcomePage';
import Workspace from './components/Workspace';

function App() {

  let [step, setStep] = useState(0);

  const changeScreen = () => {
    if(step == 3) {
      localStorage.clear();
      window.alert("You have successfully completed your onboarding.")
      setStep(step => 0);
      return;
    }

    setStep(currentStep => currentStep + 1);
  }

  const previousScreen = () => {
    if(step == 0) {
      return;
    }
    setStep(currentStep => currentStep - 1);
  }

  return (
    <div className="App">
      <div className='container' style={{marginTop : "50px"}}>
        <div className='row'>
          <div className='col-sm-7' style={{margin:"auto"}}>
            <LogoWrapper/>
            <Wizard step={step} changeStep={setStep}/>
            {step == 0 ? <WelcomePage /> : ""}
            {step == 1 ? <Workspace/> : ""}
            {step == 2 ? <SetupExperience/> : ""}
            {step == 3 ? <Final/> : ""}
            <SetupButton
              onClick = {changeScreen}
              buttonText = {step == 3 ? "Launch Eden" : "Create Workspace"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
