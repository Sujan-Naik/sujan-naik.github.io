import CarouselHolder from "@/app/ui/projects/carousel-holder";
import {getShowcasesMDX} from "@/app/lib/renderMDXNoFrontmatter";



export default async function Carousel() {
    const mdxComponents = await getShowcasesMDX();

    return (
        <div>
            <CarouselHolder mdxComponents={mdxComponents}/>
        </div>
    );
};

