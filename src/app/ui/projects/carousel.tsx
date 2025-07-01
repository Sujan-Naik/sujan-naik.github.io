import CarouselHolder from "@/app/ui/projects/carousel-holder";
import {getShowcasesMDX} from "@/app/lib/cs/renderMDXNoFrontmatter";
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";


export default async function Carousel() {
    const mdxComponents = await getShowcasesMDX();

    return (
        <PrimaryCard width={"95%"}>
            <CarouselHolder mdxComponents={mdxComponents}/>
        </PrimaryCard>
    );
};

