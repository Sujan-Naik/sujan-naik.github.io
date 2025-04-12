// src/app/ui/components/Dialog/Dialog.tsx
import React from 'react';
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const CustomDialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
    return (
        <div>
        <Dialog open={isOpen} onClose={onClose} className="primary-dialog">
            <DialogBackdrop></DialogBackdrop>
            <DialogPanel className="primary-dialog-panel">
                <DialogTitle>{title}</DialogTitle>
                <div>{children}</div>
                <button onClick={onClose} className="primary-button">Close</button>
            </DialogPanel>
        </Dialog>
        </div>
    );
};

export default CustomDialog;