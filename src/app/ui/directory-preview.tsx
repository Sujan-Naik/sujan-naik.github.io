// src/app/components/DirectoryPreview.tsx
"use client"; // Mark this component as client-side

import React, { useState } from "react";
import PreviewCard from "@/app/ui/preview-card"; // Adjust the import based on your structure

interface DirectoryPreviewProps {
    directoryNames: string[];
    filesByDirectory: Record<string, string[]>; // Maps directories to their files
}

const DirectoryPreview: React.FC<DirectoryPreviewProps> = ({ directoryNames, filesByDirectory }) => {
    const [currentFiles, setCurrentFiles] = useState<string[]>([]);
    const [currentDir, setCurrentDir] = useState<string | null>(null);
    const [currentFileContent, setCurrentFileContent] = useState<{ title: string; githubUrl?: string; previewImage?: string; } | null>(null);

    const handleDirClick = async (dir: string) => {
        const files = filesByDirectory[dir] || []; // Lookup pre-fetched files
        setCurrentFiles(files);
        setCurrentDir(dir);
        setCurrentFileContent(null); // Reset file content when changing dir
    };

    const handleFileClick = async (filename: string) => {
        const response = await fetch(`/api/get-file-content?directory=${currentDir}&filename=${filename}`);
        if (response.ok) {
            const content = await response.json();
            setCurrentFileContent(content);
        } else {
            console.error('Error fetching file content:', response.statusText);
        }
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

            {currentFileContent && (
                <PreviewCard
                    title={currentFileContent.title}
                    githubUrl={currentFileContent.githubUrl}
                    previewImage={currentFileContent.previewImage}
                />
            )}
        </div>
    );
};

export default DirectoryPreview;