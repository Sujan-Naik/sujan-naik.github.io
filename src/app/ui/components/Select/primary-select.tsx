import {Description, Field, Listbox, Select} from '@headlessui/react'
import React, {ChangeEventHandler, Fragment} from "react";


interface SelectProps {
    options: string[];
    description: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
}


const PrimarySelect: React.FC<SelectProps> = ({ options, description, onChange }) => {
  return (
      <Field>
                <Description>{description}</Description>
          <Select name="status" aria-label="Project status" onChange={onChange}>
        {options.map((option) => (
                        <option key={option} value={option} >
                            {option}
                        </option>
        ))}
    </Select>
      </Field>

  )
}

export default PrimarySelect;