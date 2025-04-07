import fs from "fs/promises";

export const getShowcaseProjects = async () => {
    let files: string[] = [];

    try {
        const fileNames = await fs.readdir("src/content/showcase");

        files = fileNames
            .filter(fileName => fileName.endsWith('.mdx'))
            .map(fileName => fileName.replace(/\.mdx$/, ''));
    } catch (err) {
        console.error("Error reading files", err);
    }

    return files;
};

export const getProjects = async () => {
    let files: string[] = [];

    try {
        const fileNames = await fs.readdir("src/content/");

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
        const fileNames = await fs.readdir("src/content/",{ recursive: true });

        files = fileNames
            .filter(fileName => fileName.endsWith('.mdx'))
            .map(fileName => fileName.replace(/\.mdx$/, ''))
            .map(fileName => fileName.replace(/.*\//, ''));
    } catch (err) {
        console.error("Error reading files", err);
    }

    return files;
};