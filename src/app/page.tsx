import {pixelifySans} from "@/app/ui/fonts";
import SujanLogo from "@/app/ui/sujan-logo";
import Carousel from "@/app/ui/projects/carousel";
import PrimaryLink from "./ui/components/Link/primary-link";


export default function Home(){
  return (
    <div>
        <header>
            <hgroup className={"text-center"}>
                <h1> <SujanLogo/> </h1>
                <p > I'm an aspiring Game Developer and Web Developer (I built this website from scratch!)</p>
            </hgroup>
        </header>
        <section>
            <hgroup>
                <h1>
                    My Best Projects
                </h1>
            </hgroup>
            <Carousel />
            <hgroup>
                <PrimaryLink href={"/projects"}>
                   <h3> View All</h3>
                </PrimaryLink>
            </hgroup>
        </section>
    </div>
  )
}

