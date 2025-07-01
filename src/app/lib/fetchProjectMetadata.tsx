import fs from 'fs/promises';
import path from 'path';
import grayMatter from 'gray-matter';

const readDirectoryRecursively = async (dir: string, projectMetadataMap: Map<any, any>) => {
    try {
        const entries = await fs.readdir(dir, {withFileTypes: true});

        await Promise.all(entries.map(async (entry) => {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                // If it's a directory, call this function recursively
                await readDirectoryRecursively(fullPath, projectMetadataMap);
            } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
                // If it's an MDX file, read and parse it
                try {
                    const fileContents = await fs.readFile(fullPath, 'utf-8');
                    const {data} = grayMatter(fileContents); // Parse the file contents
                    const fileNameWithoutExtension = entry.name.replace(/\.mdx$/, '');

                    // Map the file name to its metadata
                    projectMetadataMap.set(fileNameWithoutExtension, data);
                } catch (fileErr) {
                    console.error(`Error reading file ${fullPath}:`, fileErr);
                }
            }
        }));
    } catch (dirErr) {
        console.error(`Error reading directory ${dir}:`, dirErr);
    }
};

export const getAllProjectMetadata = async () => {
    const projectMetadataMap = new Map();
    const baseDir = path.join(process.cwd(), 'public/cs'); // Set your base directory

    await readDirectoryRecursively(baseDir, projectMetadataMap); // Start recursive reading

    return projectMetadataMap; // Return the map of project metadata
};