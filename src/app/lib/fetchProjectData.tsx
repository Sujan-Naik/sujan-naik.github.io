import fs from "fs/promises";

export const getShowcaseProjects = async () => {
    let files: string[] = [];

    try {
        const fileNames = await fs.readdir("content/showcase");

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
        const fileNames = await fs.readdir("content/", {recursive: true});
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
        const files = await fs.readdir("content");

        // Use Promise.all to resolve the array of promises from the map
        const stats = await Promise.all(
            files.map(async (file) => {
                const filePath = `content/${file}`;
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
        const dirPath = `content/${directory}`;
        files = await fs.readdir(dirPath);
        // Filter for .mdx files only
        files = files.filter(file => file.endsWith('.mdx')).map(value => value.replace(/\.mdx$/, ''));
    } catch (err) {
        console.error(`Error reading files in directory ${directory}`, err);
    }
    return files;
}

