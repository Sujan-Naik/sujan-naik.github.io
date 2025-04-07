import fs from 'fs/promises';
import CarouselHolder from "@/app/ui/projects/carousel-holder";
import {getShowcaseProjects} from "@/app/lib/fetchProjectData";



export default async function Carousel() {
    const files = await getShowcaseProjects();

    return (
        <div>
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

