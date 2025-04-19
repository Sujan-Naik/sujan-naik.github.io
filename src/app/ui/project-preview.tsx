"use client";
import React, {Suspense, useState} from 'react';
import {DialogPanel} from "@headlessui/react";
import LoadingCircleSpinner from "@/app/ui/components/Loading/LoadingCircleSpinner";
import PreviewCard from "@/app/ui/preview-card";
import PrimaryDialog from "@/app/ui/components/Dialog/primary-dialog";

interface ProjectMetadata {
    title: string;
    externalUrl: string;
    previewImage: string;
}

interface ProjectProps {
    currentFileMetadata: ProjectMetadata;
    onClose: () => void;
}

const ProjectPreview = ({currentFileMetadata, onClose}: ProjectProps) => {
    const [showContactMe, setShowContactMe] = useState(true);
    const handleContactButtonClick = () => {
        setShowContactMe(prevState => !prevState);
        onClose();
    }


    return (

        <PrimaryDialog isOpen={showContactMe} onClose={handleContactButtonClick} title={currentFileMetadata.title}>
            <div>
                <DialogPanel>
                    <div>
                        <div>
                            <Suspense fallback={<LoadingCircleSpinner/>}>
                                {currentFileMetadata && (
                                    <PreviewCard
                                        externalUrl={currentFileMetadata.externalUrl} // GitHub URL from metadata
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