import React from 'react';

interface PrimaryCardProps {
  width?: string; // Width as a CSS string (e.g., '100px', '50%', 'auto', etc.)
  height?: string; // Height as a CSS string (e.g., '100px', '50%', 'auto', etc.)
  children: React.ReactNode; // Children to render inside the card
}

const PrimaryCard: React.FC<PrimaryCardProps> = ({ width, height, children }) => {
  return (
    <div className={"primary-card"} style={{ width, height }}>
      {children}
    </div>
  );
};

export default PrimaryCard;