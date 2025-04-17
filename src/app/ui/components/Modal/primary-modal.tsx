import React from 'react';
import {Dialog} from '@headlessui/react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const PrimaryModal: React.FC<ModalProps> = ({isOpen, onClose, title, children}) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto primary-modal">
            <div className="modal-content">
                <Dialog.Title>{title}</Dialog.Title>
                <div>{children}</div>
                <button onClick={onClose} className="custom-button">Close</button>
            </div>
        </Dialog>
    );
};

export default PrimaryModal;