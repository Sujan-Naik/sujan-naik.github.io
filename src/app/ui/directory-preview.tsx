// src/app/components/DirectoryPreview.tsx
"use client"; // Mark this component as client-side

import React, { useState } from "react";
import ProjectPreview from "@/app/ui/project-preview"; // Adjust the import based on your structure

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

const DirectoryPreview: React.FC<DirectoryPreviewProps> = ({ directoryNames, filesByDirectory, fileMetadataMap }) => {
    const [currentFiles, setCurrentFiles] = useState<string[]>([]);
    const [currentDir, setCurrentDir] = useState<string | null>(null);
    const [currentFileName, setCurrentFileName] = useState<string | null>(null);

    const handleDirClick = async (dir: string) => {
        const files = filesByDirectory[dir] || []; // Lookup pre-fetched files
        setCurrentFiles(files);
        setCurrentDir(dir);
        setCurrentFileName(null); // Reset file content when changing dir
    };

    const handleFileClick = async (filename: string) => {
        setCurrentFileName(`${currentDir}/${filename}`)
    };


    return (
        <div>
            <div>
                {directoryNames.map((directoryName) => (
                    <button key={directoryName} onClick={() => handleDirClick(directoryName)}>
                        {directoryName}
                    </button>
                ))}
            </div>

            {currentFiles.length > 0 && (
                <div>
                    <h2>Files in {currentDir}</h2>
                    {currentFiles.map((file) => (
                        <button key={file} onClick={() => handleFileClick(file)}>
                            {file}
                        </button>
                    ))}
                </div>
            )}


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