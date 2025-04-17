import React, {MouseEventHandler} from 'react';
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react';

interface TabsProps {
    tabs: string[];
    children: React.ReactNode[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const PrimaryTabs: React.FC<TabsProps> = ({tabs, children, onClick}) => {
    return (
        <TabGroup>
            <TabList className="tab-list"> {/* Apply tab-list class */}
                {tabs.map((tab, index) => (
                    <Tab key={index} className="primary-button" onClick={onClick}>
                        {tab}
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {children.map((content, index) => (
                    <TabPanel key={index} className="tab-panel"> {/* Apply tab-panel class */}
                        {content}
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    );
};

export default PrimaryTabs;