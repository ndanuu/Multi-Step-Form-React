import React from 'react'

import { FormItems } from "../App";
import styles from "./FormStep.module.css"

type StepProps = Pick<FormItems, "email" | "name" | "phone"> & {
  updateForm: (item: Partial<FormItems>) => void;
};

const PersonalInfo = ({ name, email, phone,updateForm }: StepProps) => {
  return (
    <div className={styles.wrapper}>
        <h2>Personal Info</h2>
        <p className='muted'>Please provide your name,email address, and phone number</p>
        
        <div className="gris-sm">
        <label htmlFor="name">Name</label>
        <input 
        type="text"
        value={name}
        required
        onChange={(e) => updateForm({name:e.target.value })}       
         id='name'
        name='name' autoFocus
        autoComplete='name'
        placeholder='e.g Lis Beth'
         />
        </div>
        
          <div className="grid-sm">
          <label htmlFor="email">Email Address</label>
         <input
          type="text" autoFocus
          autoComplete='email'
          id='email'
          name='email'
          value={email}
          required
          onChange={(e) => updateForm({email:e.target.value })}       
          placeholder='e.g Lis@beth.com'
         />
          </div>
         
        <div className="grid-sm">
        <label htmlFor="phone">Phone Number</label>
         <input 
         type="text"
         placeholder='e.g +2541234567890'
         value={phone}
         required
         onChange={(e) => updateForm({phone:e.target.value })}       

         
         />
        </div>
         

    </div>
  )
}

export default PersonalInfo