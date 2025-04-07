"use client"
import Link from 'next/link';
// import NavLinks from '@/app/ui/dashboard/nav-links';
import SujanLogo from '@/app/ui/sujan-logo';
import {useState} from "react";
import ContactMe from "@/app/ui/contact-me";
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react';
import {ExclamationTriangleIcon} from "@heroicons/react/16/solid";
import NavLinks from "@/app/ui/nav-links";

export default function SideNav() {
    const [showContactMe, setShowContactMe] = useState(false);
    const handleContactButtonClick = () => {
        setShowContactMe(prevState => !prevState);
    }
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
                href="/"
            >
                <SujanLogo/>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                {<NavLinks />}
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

                <button onClick={handleContactButtonClick}
                        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <div className="hidden md:block">Contact-me</div>
                </button>
                {showContactMe &&
                    <Dialog open={showContactMe} onClose={handleContactButtonClick} className="relative z-10">
                        <DialogBackdrop
                            transition
                            className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                        />

                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div
                                className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <DialogPanel
                                    transition
                                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                                >
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div
                                                className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                                <ExclamationTriangleIcon aria-hidden="true"
                                                                         className="size-6 text-red-600"/>
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                                    Contact me!
                                                </DialogTitle>
                                                <div className="mt-2">
                                                    <ContactMe/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            data-autofocus
                                            onClick={() => handleContactButtonClick()}
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </DialogPanel>
                            </div>
                        </div>
                    </Dialog>
                }
            </div>
        </div>
    );
}