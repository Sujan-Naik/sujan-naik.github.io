import fs from "fs/promises";
import path from "path";



export const getProjectWithPath = async (inputName: string) => {
    if (!inputName) {
        throw new Error('Invalid input: inputName must be a non-empty string.');
    }

    try {
        const directories = await fs.readdir("public/content", { withFileTypes: true });

        // Preparing an array to hold possible matches
        let foundFilePath = null;

        // Iterate over each directory
        for (const dir of directories) {
            if (dir.isDirectory()) {
                const dirPath = path.join("public/content", dir.name);
                const fileNames = await fs.readdir(dirPath);

                // Check if the inputName corresponds to any .mdx files in this directory
                const matchingFile = fileNames.find(fileName => fileName === `${inputName}.mdx`);

                if (matchingFile) {
                    foundFilePath = `${dir.name}/${matchingFile}`;
                    break; // Exit once we find the first match
                }
            }
        }

        // If we found the match, return it; otherwise, throw an error
        if (foundFilePath) {
            return foundFilePath;
        } else {
            throw new Error('File not found');
        }
    } catch (err) {
        console.error("Error reading files", err);
        throw new Error('An error occurred while searching for the file.');
    }
}


export const getShowcaseProjects = async () => {
    let files: string[] = [];

    try {
        const fileNames = await fs.readdir("public/showcase");

        files = fileNames
            .filter(fileName => fileName.endsWith('.mdx'))
            .map(fileName => fileName.replace(/\.mdx$/, ''));
    } catch (err) {
        console.error("Error reading files", err);
    }

    return files;
};


export const getAllProjects = async () => {
    let files: string[] = [];

    try {
        const fileNames = await fs.readdir("public/content/", {recursive: true});
        files = fileNames
            .filter(fileName => fileName.endsWith('.mdx'))
            .map(fileName => fileName.replace(/\.mdx$/, ''))
            .map(fileName => fileName.replace(/.*\//, ''));

        console.log(files)
    } catch (err) {
        console.error("Error reading files", err);
    }
    return files;
};


export const getDirectories = async () => {
    let directories: string[] = [];
    try {
        const files = await fs.readdir("public/content");

        // Use Promise.all to resolve the array of promises from the map
        const stats = await Promise.all(
            files.map(async (file) => {
                const filePath = `public/content/${file}`;
                const stat = await fs.stat(filePath);
                return stat.isDirectory() ? file : null; // Return the directory name or null
            })
        );

        // Filter out null values to get only directory names
        directories = stats.filter((dir): dir is string => dir !== null);
    } catch (err) {
        console.error("Error reading directories", err);
    }

    return {
        directoryNames: directories,
    };
};

export const getFilesInDirectory = async (directory: string) => {
    let files: string[] = [];
    try {
        const dirPath = `public/content/${directory}`;
        files = await fs.readdir(dirPath);
        // Filter for .mdx files only
        files = files.filter(file => file.endsWith('.mdx')).map(value => value.replace(/\.mdx$/, ''));
    } catch (err) {
        console.error(`Error reading files in directory ${directory}`, err);
    }
    return files;
}

