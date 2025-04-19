// src/app/ui/components/Button/Button.tsx
import {Button as HeadlessButton} from '@headlessui/react';
import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string; // Optional custom className
}

const SecondaryButton: React.FC<ButtonProps> = ({children, onClick, className = ''}) => {
    return (
        <HeadlessButton
            onClick={onClick}
            className={`${className} secondary-button`} // Basic styling; you can customize this further
        >
            {children}
        </HeadlessButton>
    );
};

export default SecondaryButton;