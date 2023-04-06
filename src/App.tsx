import { FormEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useMultiForm from './hooks/useMultiForm';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan'
import PickAddOns from './components/PickAddOns';
import FinishingUp from './components/FinishingUp';


export const planOptions = {
  Arcade: {
    monthly: 9,
    yearly: 120,
  },
  Advanced: {
    monthly:12,
    yearly: 120,
  },
  Pro: {
    monthly: 15,
    yearly:150,
  },
  onlineServices: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage:{
    monthly:2,
    yearly:20,
  },
  customizableProfile:{
    monthly:2,
    yearly:20,
  },

}
export type FormItems ={
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro";
  planLength:boolean;
  isOnlineService:boolean;
  isLargerStorage:boolean;
  isCustomizableProfile:boolean;

};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planLength:false,
  isOnlineService:false,
  isLargerStorage:false,
  isCustomizableProfile:false,
}

//  1.Create a hook(logic)
// 2.Create each step as a tsx file
// 3.Pass each step as a React  to the hook.
// 4.Create form to validate everything.
// 5.Set up typing in app file and pick?

const sideBar = ["Your Info", "Select Plan", "Add-Ons", "Summary" ];

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
      goToSection,
     } = useMultiForm(sideBar.length);

     
  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
    if(isLastStep)
    return alert("congrats");
    goForwards();
  };

  
    return (
      <div className="App">

<div className="sidebar">
        {sideBar.map((item, index) => (
          <div key={item}>
            <div className="number">{index}</div>
            <div>
              <p>Step {index}</p>
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {currentIndex === 0 && (
          <PersonalInfo {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 1 && (
          <SelectPlan {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 2 && (
          <PickAddOns {...formData} updateForm={updateForm} />
        )}
        {currentIndex === 3 && (
          <FinishingUp {...formData} updateForm={updateForm} />
        )}
        {!isFirstStep && (
          <button type="button" onClick={goBackwards}>
            Go back
          </button>
        )}
        <button type="submit">{isLastStep ? "Confirm" : "Next Step"}</button>
      </form>
        
  
           
      </div>
    )
  }
  


  


export default App
