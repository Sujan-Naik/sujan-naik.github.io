import React from 'react';
import { Disclosure } from '@headlessui/react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => (
    <Disclosure>
        {({ open }) => (
            <div className="primary-accordion"> {/* Apply the class for styling the accordion */}
                <Disclosure.Button className="primary-accordion__title">
                    <p>
                        {title}
                    </p>
                    <p className="accordion-arrow">
                        {open ? '▲' : '▼'}
                    </p>
                </Disclosure.Button>
                <Disclosure.Panel className="primary-accordion__content">
                    {children}
                </Disclosure.Panel>
            </div>
        )}
    </Disclosure>
);

const PrimaryAccordion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};

export default PrimaryAccordion;