import Carousel from "@/app/ui/projects/carousel";
import {Transition} from "@headlessui/react";
import Skills from "@/app/ui/skills";
import path from "path";
import fs from "fs/promises";
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";
import SecondaryCard from "@/app/ui/components/Card/SecondaryCard";
import Timeline from "@/app/ui/timeline";
import AboutMe from "@/app/ui/about-me";

export default async function Home() {

    const models: string[] = await getModels() as string[];
    return (
        <div>

                <Transition show={true} appear={true}>

                    <hgroup className={"text-center transition duration-1000 ease-in data-[enter]:opacity-0"}>
                        <PrimaryCard width={"95%"}>
                            <h1>Hello, I'm Sujan Naik, a Software Engineer</h1>
                            <h2>I do Full-Stack Web and App Development and Video Game Development</h2>
                        </PrimaryCard>
                    </hgroup>
                </Transition>

            <section className={"d-flex text-center justify-content-center "}>
                <SecondaryCard width={"100%"}>
                    <AboutMe>

                    </AboutMe>
                </SecondaryCard>

            </section>

            {/*<section className={"flex justify-center text-center"}>*/}
            {/*    <PrimaryCard width={'80vw'}>*/}
            {/*        <Skills models={models}/>*/}
            {/*    </PrimaryCard>*/}
            {/*</section>*/}

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