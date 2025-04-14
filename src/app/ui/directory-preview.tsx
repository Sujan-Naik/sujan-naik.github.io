// src/app/components/DirectoryPreview.tsx
"use client"; // Mark this component as client-side

import React, { useState } from "react";
import ProjectPreview from "@/app/ui/project-preview";
import PrimaryPopover from "@/app/ui/components/Dropdown/primary-popover";
import PrimaryTabs from "@/app/ui/components/Tabs/primary-tabs";
import SecondaryButton from "@/app/ui/components/Button/secondary-button"; // Adjust the import based on your structure

interface ProjectMetadata {
    title: string;
    githubUrl: string;
    previewImage: string;
}


interface DirectoryPreviewProps {
    directoryNames: string[];
    filesByDirectory: Record<string, string[]>; // Maps directory names to their files
    fileMetadataMap: Map<string, ProjectMetadata>; // Map from filename to metadata object
}

function findKeyByValue<T>(filesByDirectory: Record<string, string[]>, targetValue: string): string | null {
    for (const [key, values] of Object.entries(filesByDirectory)) {
        if (values.includes(targetValue)) {
            return key; // Return the key if the targetValue is found in the array
        }
    }
    return null; // Return null if not found
}

const DirectoryPreview: React.FC<DirectoryPreviewProps> = ({ directoryNames, filesByDirectory, fileMetadataMap }) => {

    const [currentFileName, setCurrentFileName] = useState<string | null>(null);



    const handleFileClick = async (filename: string) => {
        const currentDir = findKeyByValue(filesByDirectory, filename);
        setCurrentFileName(`${currentDir}/${filename}`)
    };


    return (
        <div>
            <div>
                <PrimaryTabs tabs={directoryNames}>
                        {directoryNames.map((directory) =>  (
                            <PrimaryPopover title={`Files in ${directory}`}>
                                {filesByDirectory[directory].map(fileName => (
                                    <SecondaryButton key={fileName} onClick={() => handleFileClick(fileName)}>
                                        {fileName}
                                    </SecondaryButton>
                                ))}

                            </PrimaryPopover>

                        ))}
                </PrimaryTabs>
            </div>


        {currentFileName && (() => {
            // Extract only the filename (e.g., showcase.mdx from content/showcase.mdx)
    const baseFileNameWithExtension = currentFileName.split('/').pop() as string; // This gets the last segment of the path
    const baseFileName = baseFileNameWithExtension.replace(/\.mdx$/, '') as string; // Remove the .mdx extension

            return (
                fileMetadataMap.has(baseFileName) && (
                    <ProjectPreview currentFileMetadata={fileMetadataMap.get(baseFileName) as ProjectMetadata} />
                )
            );
        })()}

        </div>
    );
};

export default DirectoryPreview;