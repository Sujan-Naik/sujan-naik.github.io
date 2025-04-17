// src/app/components/DirectoryPreview.tsx
"use client"; // Mark this component as client-side

import React, {useState} from "react";
import ProjectPreview from "@/app/ui/project-preview";
import PrimaryTabs from "@/app/ui/components/Tabs/primary-tabs";
import SecondaryButton from "@/app/ui/components/Button/secondary-button";
import {usePathname, useRouter} from "next/navigation";
import PreviewCard from "@/app/ui/preview-card";

interface ProjectMetadata {
    title: string;
    githubUrl: string;
    previewImage: string;
    video: string;
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

const DirectoryPreview: React.FC<DirectoryPreviewProps> = ({directoryNames, filesByDirectory, fileMetadataMap}) => {

    const [currentFileName, setCurrentFileName] = useState<string | null>(null);

    const router = useRouter();
    const pathname = usePathname()
    const handleFileClick = async (filename: string) => {
        const currentDir = findKeyByValue(filesByDirectory, filename);
        setCurrentFileName(`${currentDir}/${filename}`)
    };

    const navigateToMedia = async (filename: string) => {
        if (fileMetadataMap.has(filename)) {
            const newPath = `/projects/media/${(fileMetadataMap.get(filename) as ProjectMetadata).video}`;
            if (pathname != newPath) {
                router.push(newPath)
            }
        }
    }


    return (
        <div>
            <div>
                <PrimaryTabs tabs={directoryNames}>
                    {directoryNames.map((directory) => (
                        <div key={directory} title={`Files in ${directory}`}>
                            <h3>{directory}</h3>
                            <div className="preview-grid">
                                {filesByDirectory[directory].map(fileName => (
                                    <div key={fileName} className="preview-item">
                                        {fileMetadataMap.has(fileName) && (() => {
                                            const metadata = fileMetadataMap.get(fileName) as ProjectMetadata;
                                            return (
                                                <PreviewCard
                                                    githubUrl={metadata.githubUrl}
                                                    previewImage={metadata.previewImage}
                                                />
                                            );
                                        })()}
                                        <SecondaryButton onClick={() => handleFileClick(fileName)}>
                                            <div onMouseOver={() => navigateToMedia(fileName)}>
                                                {fileName}
                                            </div>
                                        </SecondaryButton>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </PrimaryTabs>
            </div>


            {currentFileName && (() => {
                // Extract only the filename (e.g., showcase.mdx from content/showcase.mdx)
                const baseFileName = currentFileName.split('/').pop() as string; // This gets the last segment of the path

                return (
                    fileMetadataMap.has(baseFileName) && (
                        <ProjectPreview currentFileMetadata={fileMetadataMap.get(baseFileName) as ProjectMetadata}/>
                    )
                );
            })()}

        </div>
    );
};

export default DirectoryPreview;