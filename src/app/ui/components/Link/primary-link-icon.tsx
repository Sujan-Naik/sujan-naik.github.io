// PrimaryLinkIcon.tsx
import React from 'react';

interface PrimaryLinkIconProps {
  icon: React.ReactNode; // Accepts a React node for the icon
  className?: string; // Optional class for additional styling
  onClick?: () => void; // Optional click handler
}

const PrimaryLinkIcon: React.FC<PrimaryLinkIconProps> = ({ icon, className, onClick }) => {
  return (
    <span
      className={`flex items-center justify-center w-8 h-8 ${className}`}
      onClick={onClick}
    >
      {icon}
    </span>
  );
};

export default PrimaryLinkIcon;