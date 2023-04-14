// 1.Take in array of elements
// 2.handle going forward,backward,goToStep
// 3.which is the current step i'm on
// 4.utility ->if current is first or last

import { useState,ReactElement }  from 'react';

const useMultiForm = (formSteps: number) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goBackwards = () => {
        if (currentIndex === 0) return;
        setCurrentIndex((prev) => prev - 1);
      };

  
    const goForwards = () => {
        if (currentIndex === formSteps -1) return;
        setCurrentIndex((prev) => prev + 1);
      };

      // go to section
      const goToSection = (item:number) => {
        setCurrentIndex(item)
      };
  return {

    currentIndex,
    goForwards,
    goBackwards,
    goToSection,
    isFirstStep: currentIndex == 0,
    isLastStep: currentIndex === formSteps - 2,
    isConfirmation: currentIndex === formSteps - 1,

  };

  
};

export default useMultiForm