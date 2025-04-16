import {pixelifySans} from "@/app/ui/fonts";
import SujanLogo from "@/app/ui/sujan-logo";
import Carousel from "@/app/ui/projects/carousel";
import PrimaryLink from "./ui/components/Link/primary-link";
import PrimarySwitch from "@/app/ui/components/Switch/primary-switch";
import {Transition} from "@headlessui/react";
import Hero from "@/app/ui/hero";
import path from "path";
import fs from "fs/promises";
import PrimaryButton from "@/app/ui/components/Button/primary-button";
import PrimaryCard from "@/app/ui/components/Card/card";


export default async function Home(){

   const models: string[] = await getModels() as string[];
  return (
    <div>
        <header>
            <Transition show={true} appear={true}>

                <div className={"text-center transition duration-1000 ease-in data-[enter]:opacity-0"}>
                    <hgroup>
                <h1> <SujanLogo/> </h1>
                <p > Welcome to my portfolio website!</p>
                        </hgroup>
            </div>
                </Transition>
        </header>

        <Hero models={models}/>


        <section>
            <hgroup className={"p-3"}>
                <h1>
                    Featured Projects
                </h1>
                <PrimarySwitch>
                    <Carousel />
                </PrimarySwitch>
            </hgroup>

            <hgroup>
                <PrimaryCard>
                    <PrimaryLink href={"/projects"}>
                        <h3> View all my work...</h3>
                    </PrimaryLink>
                </PrimaryCard>

            </hgroup>
        </section>
    </div>
  )
}

async function getModels() {
  const modelsDirectory = path.join(process.cwd(), 'public/models'); // Adjust path as necessary
  const filenames = await fs.readdir(modelsDirectory);

  return filenames;
}