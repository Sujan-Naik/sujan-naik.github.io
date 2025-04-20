"use client";
import React, {Suspense, useState} from 'react';
import {DialogPanel} from "@headlessui/react";
import LoadingCircleSpinner from "@/app/ui/components/Loading/LoadingCircleSpinner";
import PreviewCard from "@/app/ui/preview-card";
import PrimaryDialog from "@/app/ui/components/Dialog/primary-dialog";
import PrimaryLink from "@/app/ui/components/Link/primary-link";

interface ProjectMetadata {
    title: string;
    externalUrl: string;
    previewImage: string;
}

interface ProjectProps {
    currentFileMetadata: ProjectMetadata;
    onClose: () => void;
    link: string;
}

const ProjectPreview = ({currentFileMetadata, onClose, link}: ProjectProps) => {
    const [showContactMe, setShowContactMe] = useState(true);
    const handleContactButtonClick = () => {
        setShowContactMe(prevState => !prevState);
        onClose();
    }


    return (

        <PrimaryDialog isOpen={showContactMe} onClose={handleContactButtonClick} title={currentFileMetadata.title}>
                <DialogPanel className={"primary-dialog-panel"}>
                                <PrimaryLink href={`/project/${link}` }>
                                    Check out the full Project page!
                                </PrimaryLink>
                                {currentFileMetadata && (
                                    <PreviewCard
                                        externalUrl={currentFileMetadata.externalUrl} // GitHub URL from metadata
                                        previewImage={currentFileMetadata.previewImage} // Preview image from metadata
                                    />
                                )}

                </DialogPanel>
        </PrimaryDialog>


    );
};

export default ProjectPreview;