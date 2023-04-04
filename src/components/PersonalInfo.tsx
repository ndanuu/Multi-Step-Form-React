import React from 'react'

import { FormItems } from "../App";

type StepProps = Pick<FormItems, "email" | "name" | "phone"> & {
  updateForm: (item: Partial<FormItems>) => void;
};

const PersonalInfo = ({ name, email, phone,updateForm }: StepProps) => {
  return (
    <div>
        <h2>Personal Info</h2>
        <p>Please provide your name,email address, and phone number</p>
        <label htmlFor="name">Name</label>
        <input 
        type="text"
        value={name}
        onChange={(e) => updateForm({name:e.target.value })}       
         id='name'
        name='name' autoFocus
        autoComplete='name'
        placeholder='e.g Lis Beth'
         />

         <label htmlFor="email">Email Address</label>
         <input
          type="text" autoFocus
          autoComplete='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => updateForm({email:e.target.value })}       
          placeholder='e.g Lis@beth.com'
         />

         <label htmlFor="phone">Phone Number</label>
         <input 
         type="text"
         placeholder='e.g +2541234567890'
         value={phone}
         onChange={(e) => updateForm({phone:e.target.value })}       

         
         />

    </div>
  )
}

export default PersonalInfo