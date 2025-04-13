// src/lib/loadMdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getMdxContent = async (filename: string) => {
    const filePath = path.join(process.cwd(), 'src/content', `${filename}.mdx`);
    const fileContents = await fs.promises.readFile(filePath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
        frontmatter: data, // Include all frontmatter data
        content,
    };
};

export default getMdxContent;