

import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/buttonContainer'
import { useState } from 'react'

function App() {


const [calVal, setCalVal] = useState("");
const onButtonClick = (buttonText) => 
{
  if(buttonText === "C"){
   setCalVal("");
  }
  else if(buttonText === "="){
  setCalVal(eval(calVal));
  }
  else{ 
    const newDisplayvalue = calVal + buttonText;
    setCalVal(newDisplayvalue);
  }
};

  return (
    <div className={styles.calculator}>
     <Display  Displayvalue={calVal}></Display>
      <ButtonContainer   onButtonClick={onButtonClick}></ButtonContainer>

    </div>
  )
}

export default App;
