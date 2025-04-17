import React from 'react';

interface SecondaryCardProps {
    width?: string;
    height?: string;
    children: React.ReactNode;
}

const SecondaryCard: React.FC<SecondaryCardProps> = ({width, height, children}) => {
    return (
        <div className={"secondary-card"} style={{width, height}}>
            {children}
        </div>
    );
};

export default SecondaryCard;