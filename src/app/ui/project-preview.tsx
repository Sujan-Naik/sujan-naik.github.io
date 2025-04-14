"use client";
import React, {Suspense, useState} from 'react';
import {DialogPanel, DialogTitle, Transition} from "@headlessui/react";
import LoadingCircleSpinner from "@/app/ui/components/Loading/LoadingCircleSpinner";
import PreviewCard from "@/app/ui/preview-card";
import ContactMe from "@/app/ui/contact-me";
import PrimaryDialog from "@/app/ui/components/Dialog/primary-dialog";
import PrimaryButton from "@/app/ui/components/Button/primary-button";

interface ProjectMetadata {
    title: string;
    githubUrl: string;
    previewImage: string;
}

interface ProjectProps {
    currentFileMetadata: ProjectMetadata; // Changed from 'path' to 'currentFileMetadata'
}

const ProjectPreview = ({ currentFileMetadata }: ProjectProps) => {
    const [showContactMe, setShowContactMe] = useState(true);
    const handleContactButtonClick = () => {
        setShowContactMe(prevState => !prevState);
    }


    return (

        <PrimaryDialog isOpen={showContactMe} onClose={handleContactButtonClick} title={currentFileMetadata.title}>

            <div>
                <DialogPanel>
                    <div>
                        <div>
                            <Suspense fallback={<LoadingCircleSpinner />}>
                                {currentFileMetadata && (
                                    <PreviewCard
                                        githubUrl={currentFileMetadata.githubUrl} // GitHub URL from metadata
                                        previewImage={currentFileMetadata.previewImage} // Preview image from metadata
                                    />
                                )}
                            </Suspense>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </PrimaryDialog>





    );
};

export default ProjectPreview;