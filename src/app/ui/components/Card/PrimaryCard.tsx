import React from 'react';

interface PrimaryCardProps {
    width?: string;
    height?: string;
    children: React.ReactNode;
}

const PrimaryCard: React.FC<PrimaryCardProps> = ({width, height, children}) => {
    return (
        <div className={"primary-card"} style={{width, height}}>
            {children}
        </div>
    );
};

export default PrimaryCard;