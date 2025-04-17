import CarouselHolder from "@/app/ui/projects/carousel-holder";
import {getShowcasesMDX} from "@/app/lib/renderMDXNoFrontmatter";
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";


export default async function Carousel() {
    const mdxComponents = await getShowcasesMDX();

    return (
        <PrimaryCard width={"100%"}>
            <CarouselHolder mdxComponents={mdxComponents}/>
        </PrimaryCard>
    );
};

