// src/app/ui/components/Dropdown/Dropdown.tsx
import React, {Fragment} from 'react';
import {Listbox} from '@headlessui/react';

interface DropdownProps {
    options: string[];
    selected: string;
    onChange: (value: string) => void;
}

const PrimaryDropdown: React.FC<DropdownProps> = ({options, selected, onChange}) => {
    return (
        <Listbox value={selected} onChange={onChange}>
            <div className="relative">
                <Listbox.Button className="primary-button">{selected}</Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-2 bg-white border rounded-md shadow-lg">
                    {options.map((option) => (
                        <Listbox.Option key={option} value={option} as={Fragment}>
                            {({active}) => (
                                <li className={`cursor-pointer p-2 ${active ? 'bg-gray-200' : ''}`}>
                                    {option}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    );
};

export default PrimaryDropdown;