"use client"
// import NavLinks from '@/app/ui/dashboard/nav-links';
import SujanLogo from '@/app/ui/sujan-logo';
import {useState} from "react";
import ContactMe from "@/app/ui/contact-me";
import {DialogPanel, DialogTitle} from '@headlessui/react';
import NavLinks from "@/app/ui/nav-links";
import PrimaryButton from "@/app/ui/components/Button/primary-button";
import PrimaryDialog from "@/app/ui/components/Dialog/primary-dialog";


interface NavLinksProps {
    projectNames: string[];
}

export default function SideNav({projectNames}: NavLinksProps) {

    return (

        <div>
            <SujanLogo/>

            <div>
                <NavLinks projectNames={projectNames}/>


            </div>
        </div>
    );
}