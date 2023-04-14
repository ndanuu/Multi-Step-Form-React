import React from 'react'

import { FormItems } from "../App";
import { planOptions } from '../App';

// styles
import styles from "./FormStep.module.css";

// asset
import check from "../assets/images/icon-checkmark.svg"

type StepProps = Pick<FormItems, "isOnlineService" | "isLargerStorage" | "isCustomizableProfile" | "planLength"> & {
  updateForm: (item: Partial<FormItems>) => void;
};

const PickAddOns = ({ isOnlineService, isLargerStorage, isCustomizableProfile,planLength, updateForm }: StepProps) => {
  return (
    <div>
        <h2>Pick add-ons</h2>
        <p className='muted'>Add-ons help enhance your gaming experience.</p>
        <div className={styles["radio-wrapper"]}>

{/* Grid Online Services --Starts */}
        <div className={styles["checkbox-wrapper"]}>
        <input 
        name='isOnlineService'
        type="checkbox"
        id='isOnlineService'
        onChange={(e) => updateForm({plan: "Arcade"})}       
         />
         <label htmlFor="isOnlineService"
         className={styles["checkbox-label"]}>
          <div className={styles.checkbox}>
            <img src={check} alt="" />
          </div>
            <div className={styles["label-group"]}>
            <div>
            <h3>Online service</h3>
            <p className='muted'>Access to multiplayer games </p>
            
            </div>
            <p className='accent'>+$
            {!planLength ? 
            planOptions.onlineServices.monthly 
            :planOptions.onlineServices.yearly}
            /{!planLength ? "mo" : "yr"}
            </p>


            </div>
         </label>
      
        </div>
{/* Grid Online Services Ends */}

{/* Grid Larger Storage ---Starts */}
<div className={styles["checkbox-wrapper"]}>
          <input
            name="isLargerStorage"
            type="checkbox"
            id="isLargerStorage"
            checked={isLargerStorage}
            onChange={(e) => updateForm({ isLargerStorage: e.target.checked })}
          />
<label htmlFor="isLargerStorage"
         className={styles["checkbox-label"]}>            {/* <div className={styles.checkbox}> */}
              <div className={styles.checkbox}>
            <img src={check} alt="" />
          </div>
               <div className={styles["label-group"]}>
                <div>
                <h3>Larger Storage</h3>
                <p className='muted'>Extra 1TB of cloud save </p>
                </div>
              <p className="accent">
                +$
                {!planLength
                  ? planOptions.largerStorage.monthly
                  : planOptions.largerStorage.yearly}
                /{!planLength ? "mo" : "yr"}
              </p>
               </div>
          </label>
        </div>
{/* Grid Larger storage ---Ends */}

{/* Grid Customaizable Profile  --Starts */}
        <div className={styles["checkbox-wrapper"]}>
        <input 
        name='isCustomizableProfile'
        type="checkbox"
        id='isCustomizableProfile'
        checked={isCustomizableProfile}
        onChange={(e) => updateForm({isCustomizableProfile: e.target.checked})}       
         />
         <label htmlFor="isCustomizableProfile" className={styles["checkbox-label"]}>
         <div className={styles.checkbox}>
          <img src={check} alt="" />
         </div>

            <div className={styles["label-group"]}>
              <div>
              <h3>Customize Profile</h3>
              <p className='muted'>Custom theme on your profile </p>
              </div>
              
            <p className='accent'>+$
              {!planLength 
              ? planOptions.customizableProfile.monthly
              :planOptions.customizableProfile.yearly}
              /{!planLength ? "mo" : "yr"}</p>

                  
            </div>     
         </label>
        </div>
        {/* Grid Customizable Profile  --Ends */}
        </div>

    </div>
  )
}

export default PickAddOns