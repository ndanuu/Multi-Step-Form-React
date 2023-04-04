import React from 'react'

import { FormItems } from "../App";

type StepProps = Pick<FormItems, "plan" | "planLength"> & {
    updateForm: (item: Partial<FormItems>) => void;
};

const SelectPlan = ({plan, planLength, updateForm }: StepProps) => {
  return (
    <div>
        <h2>Select Your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div>
        <div>
        <label htmlFor="Arcade">
            <p>Arcade</p>
        
        </label>
        <input 
        name='plan'
        type="radio"
        id='Arcade'
        checked={plan === "Arcade"}
        onChange={(e) => updateForm({plan: "Arcade"})}       
         />
        </div>

         <div>
         <label htmlFor="advanced">
            <p>Advanced</p>

         </label>
         <input
          id='Advanced'
          name='plan'
          type="radio"
          checked={plan === "Advanced"}
        onChange={(e) => updateForm({plan: "Advanced"})}
        />
         </div>

        <div >
        <label htmlFor="Pro">
            <p>Pro</p>

         </label>
         <input 
         id='Pro'
         name='plan'
         type="radio"
         checked={plan === "Pro"}
         onChange={(e) => updateForm({plan: "Pro"})}
          />
        </div>
        </div>

<div >
<label>
<span>Monthly</span>
         <input 
         name='planLength'
         type="checkbox"
        //  onChange={(e) => updateForm()}
          />
          <span>Yearly</span>

          </label>
</div>
</div>
  )
}

export default SelectPlan