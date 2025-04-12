"use client"
import Link from 'next/link';
// import NavLinks from '@/app/ui/dashboard/nav-links';
import SujanLogo from '@/app/ui/sujan-logo';
import {useState} from "react";
import ContactMe from "@/app/ui/contact-me";
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react';
import {ExclamationTriangleIcon} from "@heroicons/react/16/solid";
import NavLinks from "@/app/ui/nav-links";
import PrimaryButton from "@/app/ui/components/Button/primary-button";
import PrimaryDialog from "@/app/ui/components/Dialog/primary-dialog";


interface NavLinksProps {
    projectNames: string[];
}

export default function SideNav({projectNames}: NavLinksProps) {
    const [showContactMe, setShowContactMe] = useState(false);
    const handleContactButtonClick = () => {
        setShowContactMe(prevState => !prevState);
    }

    return (

        <div >
            <SujanLogo/>

           <div>
    <NavLinks projectNames={projectNames} />

    <PrimaryButton onClick={handleContactButtonClick}>
        Contact-me
    </PrimaryButton>

    {showContactMe && (
        <PrimaryDialog isOpen={showContactMe} onClose={handleContactButtonClick} title={"Hello!"}>

            <div>
                <DialogPanel>
                    <div>
                        <div>
                            <DialogTitle>Contact me!</DialogTitle>
                            <ContactMe />
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </PrimaryDialog>
    )}
</div>
        </div>
    );
}