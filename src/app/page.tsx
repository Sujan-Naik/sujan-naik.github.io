import {pixelifySans} from "@/app/ui/fonts";
import SujanLogo from "@/app/ui/sujan-logo";
import Carousel from "@/app/ui/projects/carousel";
import PrimaryLink from "./ui/components/Link/primary-link";
import fs from "fs/promises";
import Project from "@/app/ui/projects/project";
import PrimarySwitch from "@/app/ui/components/Switch/primary-switch";
import {Transition} from "@headlessui/react";
import PrimaryHero from "@/app/ui/primary-hero";


export default function Home(){


  return (
    <div>
        <header>
            <Transition show={true} appear={true}>

                <div className={"text-center transition duration-1000 ease-in data-[enter]:opacity-0"}>
                    <hgroup>
                <h1> <SujanLogo/> </h1>
                <p > I'm an aspiring Game Developer and Web Developer (I built this website from scratch!)</p>
                        </hgroup>
            </div>
                </Transition>
        </header>
        <PrimaryHero></PrimaryHero>
        {/*<section>*/}
        {/*        <Project path={`home/home`} />*/}

        {/*</section>*/}
        <section>
            <hgroup className={"p-3"}>
                <h1>
                    Highlighted Projects
                </h1>
                <PrimarySwitch>
                    <Carousel />
                </PrimarySwitch>
            </hgroup>

            <hgroup>
                <PrimaryLink href={"/projects"}>
                   <h3> View all my work...</h3>
                </PrimaryLink>
            </hgroup>
        </section>
    </div>
  )
}
