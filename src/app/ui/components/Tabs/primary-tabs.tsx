import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

interface TabsProps {
    tabs: string[];
    children: React.ReactNode[];
}

const PrimaryTabs: React.FC<TabsProps> = ({ tabs, children }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <>
            <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
                <Tab.List className="flex space-x-2">
                    {tabs.map((tab, index) => (
                        <Tab key={index} className="custom-button">
                            {tab}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    {children.map((content, index) => (
                        <Tab.Panel key={index} className="p-4">
                            {content}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </>
    );
};

export default PrimaryTabs;