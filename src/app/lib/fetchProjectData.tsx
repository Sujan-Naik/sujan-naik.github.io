import fs from "fs/promises";
import matter from "gray-matter";

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


export const getDirectories = async () => {
    let directories: string[] = [];
    try {
        const files = await fs.readdir("src/content");

        // Use Promise.all to resolve the array of promises from the map
        const stats = await Promise.all(
            files.map(async (file) => {
                const filePath = `src/content/${file}`;
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

export const  getFilesInDirectory = async(directory: string)=> {
    let files: string[] = [];
    try {
        const dirPath = `src/content/${directory}`;
        files = await fs.readdir(dirPath);
        // Filter for .mdx files only
        files = files.filter(file => file.endsWith('.mdx'));
    } catch (err) {
        console.error(`Error reading files in directory ${directory}`, err);
    }
    return files;
}

export const getFileContent = async (directory: string, filename: string) => {
    let content = null;
    try {
        const filePath = `src/content/${directory}/${filename}`;
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data } = matter(fileContents); // Assuming you're using gray-matter to parse the frontmatter
        content = {
            title: data.title,
            githubUrl: data.githubUrl,
            previewImage: data.previewImage
        };
    } catch (err) {
        console.error(`Error loading content of file ${filename} in directory ${directory}`, err);
    }
    return content;
};

