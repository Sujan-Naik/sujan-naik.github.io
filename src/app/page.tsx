import {pixelifySans} from "@/app/ui/fonts";
import SujanLogo from "@/app/ui/sujan-logo";
import Carousel from "@/app/ui/projects/carousel";

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
                    My Projects
                </h1>
            </hgroup>
            <Carousel />
        </section>
    </div>
  )
}

