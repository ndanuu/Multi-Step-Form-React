import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useMultiForm from './hooks/useMultiForm'

//  1.Create a hook(logic)
// 2.Create each step as a tsx file
// 3.Pass each step as a React  to the hook.
// 4.Create form to validate everything.
// 5.Set up typing in app file and pick?

function App() {
  const [count, setCount] = useState(0);
  const {
    formSteps,
    currentIndex,
    currentStep,
    goBackwards,
    goForwards,
    isFirstStep,
    isLastStep,
   } = useMultiForm([
    // <div>1</div>
    // <div>2</div>
    // <div>3</div>
    // <div>4</div>

  ]);

  return (
    <div className="App">
      {currentStep}
      <button onClick={goBackwards}>Prev</button>
      <button onClick={goForwards}>Next</button>

         
    </div>
  )
}

export default App
