// NavBar.tsx
"use client"
import {useEffect, useState} from 'react';
import SujanLogo from "@/app/ui/sujan-logo";
import PrimaryDropdown from "@/app/ui/components/Dropdown/primary-dropdown";
import ContactMe from "@/app/ui/contact-me";
import PrimaryDialog from "@/app/ui/components/Dialog/primary-dialog";
import {DialogPanel, DialogTitle} from "@headlessui/react";
import PrimaryButton from "@/app/ui/components/Button/primary-button";
import PrimaryLink from "@/app/ui/components/Link/primary-link";
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";

const THEMES = ['blue', 'green', 'red'];

export default function NavBar() {
    const [selectedTheme, setSelectedTheme] = useState<string>('blue');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'blue'); // Update the theme
    }, []);
    const handleThemeChange = (value: string) => {
        setSelectedTheme(value);
        document.documentElement.setAttribute('data-theme', value); // Update the theme
    };

    const [showContactMe, setShowContactMe] = useState(false);
    const handleContactButtonClick = () => {
        setShowContactMe(prevState => !prevState);
    }

    return (
<header className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
                <SujanLogo />

            <PrimaryDropdown options={THEMES} selected={selectedTheme} onChange={handleThemeChange} />
                <PrimaryCard>

            <PrimaryButton onClick={handleContactButtonClick}> Contact me ! </PrimaryButton>
                </PrimaryCard>
             {showContactMe && (
                    <PrimaryDialog isOpen={showContactMe} onClose={handleContactButtonClick} title={""}>

                        <div>
                            <DialogPanel>
                                <div>
                                    <div>
                                        <DialogTitle>Contact me!</DialogTitle>
                                        <ContactMe/>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </PrimaryDialog>
                )}

                <PrimaryCard>
                        <PrimaryLink href={"/projects"}>
                             Project Directory
                        </PrimaryLink>
                    </PrimaryCard>
</div>
        </header>
    );
}