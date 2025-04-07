import fs from 'fs/promises';
import CarouselHolder from "@/app/ui/projects/carousel-holder";

const getShowcaseProjects = async () => {
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

export default async function Carousel() {
    const files = await getShowcaseProjects();

    return (
        <div>
            <h1>My Carousel</h1>
            <CarouselHolder files={files}/>
        </div>
    );
};

export const getStaticProps = async () => {
    const files = await getShowcaseProjects();

    return {
        props: {
            files,
        },
    };
};

