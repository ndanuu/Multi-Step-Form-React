import React from 'react'

import { FormItems } from "../App";
import { planOptions } from '../App';
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
            <p>&
              {!planLength ? planOptions.Arcade.monthly
             : planOptions.Arcade.yearly}
             /{!planLength ? "mo" : "yr"}
            </p>

        
        </label>
        <input 
        name='plan'
        type="radio"
        id='Arcade'
        checked={plan === "Arcade"}
        onChange={(e) => updateForm({plan: "Arcade"})}       
         />
         {planLength &&  <p>2 months Free</p>}
        </div>

         <div>
         <label htmlFor="advanced">
            <p>Advanced</p>
            <p>{!planLength ? planOptions.Advanced.monthly 
            : planOptions.Advanced.yearly}
            /{!planLength ? "mo" : "yr"}</p>

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
            <p>{!planLength ? planOptions.Pro.monthly 
            :planOptions.Pro.yearly}
            /{!planLength ? "mo" : "yr"}</p>

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

        <div>
        <label>
          <span>Monthly</span>
          <input
            type="checkbox"
            name="planLength"
            checked={planLength}
            onChange={(e) => updateForm({ planLength: e.target.checked })}
          />
          <span>Yearly</span>
        </label>
      </div>
</div>
  )
}

export default SelectPlan