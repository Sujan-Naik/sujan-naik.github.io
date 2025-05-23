import fs from "fs/promises";

import {serialize} from "next-mdx-remote/serialize";
import matter from "gray-matter";
import {MDXRemoteSerializeResult} from "next-mdx-remote";

export const loadMDXComponent = async (path: string) => {

    // Read the file content
    const fileContent = await fs.readFile(`public/${path}`, 'utf-8');

    // Use `gray-matter` to parse the frontmatter and content
    const {content} = matter(fileContent);

    // Serialize the remaining content to MDX
    const mdxSource = await serialize(content);

    return mdxSource;
}


export const getShowcasesMDX = async (): Promise<MDXRemoteSerializeResult[]> => {
    let mdxComponents: MDXRemoteSerializeResult[] = [];

    try {
        const fileNames = await fs.readdir("public/showcase");

        // Use Promise.all to resolve all promises from the mapping
        const mdxPromises = fileNames
            .filter(fileName => fileName.endsWith('.mdx'))
            .map(fileName => loadMDXComponent(`showcase/${fileName}`)); // No await here

        mdxComponents = await Promise.all(mdxPromises); // Wait for all promises to resolve

    } catch (err) {
        console.error("Error reading files", err);
    }

    return mdxComponents;
};