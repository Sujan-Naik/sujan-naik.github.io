// src/app/ui/components/Accordion/Accordion.tsx
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => (
    <Disclosure>
        {({ open }) => (
            <>
                <Disclosure.Button className="custom-button">
                    {title} {open ? '-' : '+'}
                </Disclosure.Button>
                <Disclosure.Panel className="p-2">
                    {children}
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
);

const PrimaryAccordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};


export default PrimaryAccordion;