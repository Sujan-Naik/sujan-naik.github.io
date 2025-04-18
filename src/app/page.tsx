import SujanLogo from "@/app/ui/sujan-logo";
import Carousel from "@/app/ui/projects/carousel";
import PrimaryLink from "./ui/components/Link/primary-link";
import PrimarySwitch from "@/app/ui/components/Switch/primary-switch";
import {Transition} from "@headlessui/react";
import Hero from "@/app/ui/hero";
import path from "path";
import fs from "fs/promises";
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";


export default async function Home() {

    const models: string[] = await getModels() as string[];
    return (
        <div>
            <header>
                <Transition show={true} appear={true}>

                    <div className={"text-center transition duration-1000 ease-in data-[enter]:opacity-0"}>
                        <hgroup>
                            <h1><SujanLogo/></h1>
                            <p> Welcome to my portfolio website!</p>
                        </hgroup>
                    </div>
                </Transition>
            </header>



            <section>
                <hgroup className={"p-3"}>
                    <h1>
                        Featured Projects
                    </h1>
                    <PrimarySwitch>
                        <Carousel/>
                    </PrimarySwitch>
                </hgroup>
            </section>

            <Hero models={models}/>
        </div>
    )
}

async function getModels() {
    const modelsDirectory = path.join(process.cwd(), 'public/models'); // Adjust path as necessary
    const filenames = await fs.readdir(modelsDirectory);

    return filenames;
}