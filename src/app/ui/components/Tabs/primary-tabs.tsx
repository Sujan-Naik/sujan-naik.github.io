import React, {MouseEventHandler, useState} from 'react';
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react';

interface TabsProps {
    tabs: string[];
    children: React.ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const PrimaryTabs: React.FC<TabsProps> = ({ tabs, children, onClick }) => {

    return (
        <>
            <TabGroup>
                <TabList className="flex space-x-2">
                    {tabs.map((tab, index) => (
                        <Tab key={index} className="primary-button" onClick={onClick}>
                            {tab}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {children.map((content, index) => (
                        <TabPanel key={index} className="p-4">
                            {content}
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>
        </>
    );
};

export default PrimaryTabs;