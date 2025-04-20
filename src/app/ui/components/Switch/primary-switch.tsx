"use client"
import {Switch, Transition} from '@headlessui/react'
import React, {useState} from 'react'
import clsx from "clsx";


interface PrimarySwitchProps {
    children: React.ReactNode;
}

const PrimarySwitch: React.FC<PrimarySwitchProps> = ({children}) => {
    const [enabled, setEnabled] = useState(true)

    return (
        <>

            <div>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className="group inline-flex h-6 w-11  items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                >
                    <span
                        className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6"/>
                </Switch>
            </div>

            <Transition show={enabled}>
                <div className={clsx([
                    // Base styles
                    'transition ease-in-out',
                    // Shared closed styles
                    'data-[closed]:opacity-0',
                    // Entering styles
                    'data-[enter]:duration-1000 data-[enter]:data-[closed]:-translate-x-full',
                    // Leaving styles
                    'data-[leave]:duration-1000 data-[leave]:data-[closed]:translate-x-full',
                ])}>
                    {children}

                </div>
            </Transition>

        </>
    )
}

export default PrimarySwitch;