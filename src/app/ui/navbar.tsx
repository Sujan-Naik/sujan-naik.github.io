// NavBar.tsx
"use client"
import {useEffect, useState} from 'react';
import SujanLogo from "@/app/ui/sujan-logo";
import PrimaryDropdown from "@/app/ui/components/Dropdown/primary-dropdown";
import ContactMe from "@/app/ui/contact-me";
import PrimaryDialog from "@/app/ui/components/Dialog/primary-dialog";
import {Button, DialogPanel, DialogTitle} from "@headlessui/react";
import PrimaryButton from "@/app/ui/components/Button/primary-button";
import PrimaryLink from "@/app/ui/components/Link/primary-link";
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";

export default function NavBar() {

    const [showContactMe, setShowContactMe] = useState(false);
    const handleContactButtonClick = () => {
        setShowContactMe(prevState => !prevState);
    }

    return (
<header className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
                <SujanLogo />

                <PrimaryCard>
                        <PrimaryLink href={"/contact-me"}>
                             Contact me !
                        </PrimaryLink>
                </PrimaryCard>

                <PrimaryCard>
                        <PrimaryLink href={"/projects"}>
                             Project Directory
                        </PrimaryLink>
                </PrimaryCard>
                <PrimaryCard>
                    <PrimaryLink href={"https://docs.google.com/document/d/1t383yQawetxH2yyoxbhXusYv-yzjfkSf8ps2jjMnsM4/edit?usp=sharing"}>
                        Resume
                    </PrimaryLink>
                </PrimaryCard>
</div>
        </header>
    );
}