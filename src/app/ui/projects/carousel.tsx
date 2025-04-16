import CarouselHolder from "@/app/ui/projects/carousel-holder";
import {getShowcasesMDX} from "@/app/lib/renderMDXNoFrontmatter";
import PrimaryCard from "@/app/ui/components/Card/card";



export default async function Carousel() {
    const mdxComponents = await getShowcasesMDX();

    return (
        <PrimaryCard>
            <CarouselHolder mdxComponents={mdxComponents}/>
        </PrimaryCard>
    );
};

