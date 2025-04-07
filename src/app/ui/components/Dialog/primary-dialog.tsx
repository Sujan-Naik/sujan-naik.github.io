// src/app/ui/components/Dialog/Dialog.tsx
import React from 'react';
import { Dialog } from '@headlessui/react';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const CustomDialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto primary-dialog">
            <div className="modal-content">
                <Dialog.Title>{title}</Dialog.Title>
                <div>{children}</div>
                <button onClick={onClose} className="custom-button">Close</button>
            </div>
        </Dialog>
    );
};

export default CustomDialog;