// src/app/page.tsx
import React from 'react'; // Import React for JSX
import {getDirectories, getFilesInDirectory} from "@/app/lib/fetchProjectData";
import DirectoryPreview from "@/app/ui/directory-preview";
import {getAllProjectMetadata} from "@/app/lib/fetchProjectMetadata";

export default async function Default() {
    const {directoryNames} = await getDirectories();
    const filesByDirectory: Record<string, string[]> = {};
    const filesMetadata = await getAllProjectMetadata(); // Fetch project metadata
    console.log(filesMetadata)

    // Fetch files for each directory at build time
    for (const dir of directoryNames) {
        filesByDirectory[dir] = await getFilesInDirectory(dir);
    }

    return (
        <div style={{width: '100%', height: '100%'}}>
            <h1>Check out my work by category!</h1>
            <DirectoryPreview
                directoryNames={directoryNames}
                filesByDirectory={filesByDirectory}
                fileMetadataMap={filesMetadata} // Pass metadata directly here
            />
        </div>
    );
}