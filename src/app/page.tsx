import Carousel from "@/app/ui/projects/carousel";
import {Transition} from "@headlessui/react";
import Skills from "@/app/ui/skills";
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

                            <h1> I am a Full Stack Web Developer and Video Game Developer</h1>

                    </div>
                </Transition>
            </header>

            <section className={"flex justify-center text-center"}>
                <PrimaryCard width={'80vw'}>
                    <Skills models={models}/>
                </PrimaryCard>
            </section>

            <section>
                <hgroup className={"p-3"}>
                    <h1>
                        Featured Projects
                    </h1>

                    <Carousel/>
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