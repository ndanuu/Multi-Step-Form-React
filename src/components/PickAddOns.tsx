import React from 'react'

import { FormItems } from "../App";

type StepProps = Pick<FormItems, "isOnlineService" | "isLargerStorage" | "isCustomizableProfile"> & {
  updateForm: (item: Partial<FormItems>) => void;
};

const PickAddOns = ({ isOnlineService, isLargerStorage, isCustomizableProfile,updateForm }: StepProps) => {
  return (
    <div>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div>
        <div>
        <input 
        name='isOnlineService'
        type="checkbox"
        id='isOnlineService'
        onChange={(e) => updateForm({plan: "Arcade"})}       
         />
         <label htmlFor="isOnlineService">
            <div>
                <h3>Online service</h3>
                <p>Access to multiplayer games </p>
            </div>
            <p>+ $1/mo</p>

         </label>
        </div>

        <div>
        <input 
        name='isLargerStorage'
        type="checkbox"
        id='isLargerStorage'
        // checked={isLargerStorage}
        // onChange={(e) => updateForm({isLargerStorage: e.target.checked})}       
         />
         <label htmlFor="isLargerStorage">
            <div>
                <h3>Larger Storage</h3>
                <p>Extra 1TB of cloud save </p>
            </div>
            <p>+ $2/mo</p>

         </label>
        </div>

        <div>
        <input 
        name='isCustomizableProfile'
        type="checkbox"
        id='isCustomizableProfile'
        // checked={isCustomizableProfile}
        // onChange={(e) => updateForm({isCustomizableProfile: e.target.checked})}       
         />
         <label htmlFor="isCustomizableProfile">
            <div>
                <h3>Customize Profile</h3>
                <p>Custom theme on your profile </p>
            </div>
            <p>+ $1/mo</p>

         </label>
        </div>
        </div>

    </div>
  )
}

export default PickAddOns