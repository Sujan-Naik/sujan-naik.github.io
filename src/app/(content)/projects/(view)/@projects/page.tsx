// src/app/page.tsx
import { getDirectories, getFilesInDirectory } from "@/app/lib/fetchProjectData";
import DirectoryPreview from "@/app/ui/directory-preview";

export default async function Page() {
    const { directoryNames } = await getDirectories();
    const filesByDirectory: Record<string, string[]> = {};

    // Fetch files for each directory at build time
    for (const dir of directoryNames) {
        filesByDirectory[dir] = await getFilesInDirectory(dir);
    }

    return (
        <div>
            <h1>File Navigator</h1>
            <DirectoryPreview
                directoryNames={directoryNames}
                filesByDirectory={filesByDirectory}
            />
        </div>
    );
}