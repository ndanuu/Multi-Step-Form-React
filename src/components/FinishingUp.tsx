import React from 'react'

import { FormItems } from "../App";

type StepProps = Pick<FormItems, "planLength"> & {
  updateForm: (item: Partial<FormItems>) => void;
};

const FinishingUp = ({ planLength, updateForm }: StepProps) => {
  return (
    <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <div>
        <div>
        <div data-left>
            {planLength ? "Arcade (Yearly)" : "Arcade (Monthly)"}
            <button
              type="button"
            //   onClick={() => updateForm({ planLength: !planLength })}
            ></button>
        </div>
        <div data-right>

        </div>
        </div>

        

        
        </div>

    </div>
  )
}

export default FinishingUp