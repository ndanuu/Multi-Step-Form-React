// 1.Take in array of elements
// 2.handle going forward,backward,goToStep
// 3.which is the current step i'm on
// 4.utility ->if current is first or last

import { useState,ReactElement }  from 'react';

const useMultiForm = (formSteps: ReactElement[] ) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    
    const goBackwards = () => {
        if (currentIndex === 0) return;
        setCurrentIndex((prev) => prev - 1);
      };

    // go to section
    const goForwards = () => {
        if (currentIndex === formSteps.length - 1) return;
        setCurrentIndex((prev) => prev + 1);
      };
  return {
    formSteps,
    currentIndex,
    currentStep: formSteps[currentIndex],
    goForwards,
    goBackwards,
    isFirstStep: currentIndex == 0,
    isLastStep: currentIndex ==formSteps.length -1,

  };

  
};

export default useMultiForm