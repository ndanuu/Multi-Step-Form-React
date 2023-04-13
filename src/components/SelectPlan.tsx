import React from 'react'

import { FormItems } from "../App";
import { planOptions } from '../App';
import styles from "./FormStep.module.css";

import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

type StepProps = Pick<FormItems, "plan" | "planLength"> & {
    updateForm: (item: Partial<FormItems>) => void;
};

const SelectPlan = ({plan, planLength, updateForm }: StepProps) => {
  return (
    <div className={styles.wrapper}>
        <h2>Select Your plan</h2>
        <p className='muted'>You have the option of monthly or yearly billing.</p>
        <div className={styles["radio-wrapper"]}>
        <div className={styles.radio}>
          
        <img src={arcade} alt="arcade" />
        <label htmlFor="Arcade">
            <p>
              <strong>
              Arcade
              </strong>
              </p>
            <p className='muted'>&
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

         <div className={styles.radio}>

         <img src={advanced} alt="game controller" />
         <label htmlFor="advanced">
            <p>
              <strong>
              Advanced
                </strong> 
            </p>
            <p className='muted'>{!planLength ? planOptions.Advanced.monthly 
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

        <div className={styles.radio}>
       
        <img src={pro} alt="arcade controller" />
        <label htmlFor="Pro">
            <p>
              <strong>
              Pro
              </strong>
            </p>
            <p className='muted'>{!planLength ? planOptions.Pro.monthly 
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

        <div className={styles.toggle}>
        <label>
          <span>Monthly</span>
          <input
            type="checkbox"
            name="planLength"
            checked={planLength}
            onChange={(e) => updateForm({ planLength: e.target.checked })}
          />
          <div className={styles["fake-toggle"]}></div>
          <span>Yearly</span>
        </label>
      </div>
</div>
  )
}

export default SelectPlan