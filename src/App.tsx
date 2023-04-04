import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useMultiForm from './hooks/useMultiForm';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan'
import PickAddOns from './components/PickAddOns';


export type FormItems ={
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro";
  planLength:"monthly"| "yearly";
  isOnlineService:boolean;
  isLargerStorage:boolean;
  isCustomizableProfile:boolean;

};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planLength:"monthly",
  isOnlineService:false,
  isLargerStorage:false,
  isCustomizableProfile:false,
}

//  1.Create a hook(logic)
// 2.Create each step as a tsx file
// 3.Pass each step as a React  to the hook.
// 4.Create form to validate everything.
// 5.Set up typing in app file and pick?

function App() {
  const [formData, setFormData] = useState(initialValues);
  
  const updateForm = (fieldToUpdate: Partial<FormItems>) =>
     setFormData({...formData, ... fieldToUpdate});

     const {
      currentIndex,
      goBackwards,
      goForwards,
      isFirstStep,
      isLastStep,
     } = useMultiForm(3);
  
    return (
      <div className="App">
        {currentIndex === 0 && <PersonalInfo {...formData} updateForm={updateForm}/>}
        {currentIndex === 1 && <SelectPlan {...formData} updateForm={updateForm}/>}
        {currentIndex === 2 && <PickAddOns {...formData} updateForm={updateForm}/>}


        {!isFirstStep && <button onClick={goBackwards}>Go Back</button>}
        <button onClick={goForwards}>{isLastStep ? "Confirm" : "Next Step"}</button>
  
           
      </div>
    )
  }
  


  


export default App
