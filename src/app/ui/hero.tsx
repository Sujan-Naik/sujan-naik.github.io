// components/HeroSection.tsx

"use client"
import React, {useState} from 'react';

import PrimaryTabs from "@/app/ui/components/Tabs/primary-tabs";
import GLTFModelLoader from "@/app/ui/GLTFModelLoader";
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";
import {Radio, RadioGroup} from "@headlessui/react";
import PrimaryLink from "@/app/ui/components/Link/primary-link";
import PrimaryAccordion, {AccordionItem} from "@/app/ui/components/Accordion/primary-accordion";

interface HeroProps {
    models: string[]; // Define models as an array of strings
}

const Hero: React.FC<HeroProps> = ({models}) => {
    const [selectedItem, setSelectedItem] = useState<string>(''); // Track selected item
    const [isHovered, setIsHovered] = useState(false); // State to track hover
    return (
        <>
            <h2 className="text-2xl mb-4">Overview of My Skills</h2>
            <div className="radio-group-container" onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
                {isHovered && < RadioGroup value={selectedItem} onChange={setSelectedItem}>
                    <div className="space-y-4">
                        {/* Radio Item 1 */}
                        <Radio value="gameDev"
                               className={({checked}) => `radio ${checked ? 'radio-checked' : 'radio-default'}`}>
                            {({checked}) => (
                                <>
                                    {/* Circle Icon */}
                                    <span className={`radio-icon ${checked ? '' : ''}`}>
                        {checked && <span className="radio-icon-checked"/>}
                    </span>
                                    {/* Label */}
                                    <span className="text-lg">Video Game Development & Design</span>
                                </>
                            )}
                        </Radio>

                        {/* Radio Item 3 */}
                        <Radio value="fullstack"
                               className={({checked}) => `radio ${checked ? 'radio-checked' : 'radio-default'}`}>
                            {({checked}) => (
                                <>
            <span className="radio-icon">
                {checked && <span className="radio-icon-checked"/>}
            </span>
                                    <span className="text-lg">Fullstack Web Development</span>
                                </>
                            )}
                        </Radio>

                        {/* Radio Item 4 */}
                        <Radio value="modding"
                               className={({checked}) => `radio ${checked ? 'radio-checked' : 'radio-default'}`}>
                            {({checked}) => (
                                <>
            <span className="radio-icon">
                {checked && <span className="radio-icon-checked"/>}
            </span>
                                    <span className="text-lg">Game Modding</span>
                                </>
                            )}
                        </Radio>

                        {/* Radio Item 6 */}
                        <Radio value="animating"
                               className={({checked}) => `radio ${checked ? 'radio-checked' : 'radio-default'}`}>
                            {({checked}) => (
                                <>
            <span className="radio-icon">
                {checked && <span className="radio-icon-checked"/>}
            </span>
                                    <span className="text-lg">Modeling and Animating</span>
                                </>
                            )}
                        </Radio>
                    </div>
                </RadioGroup>}
                {!isHovered && <h1>Hover over me!</h1>}
            </div>

            {/* Display selected item content conditionally */}
            <PrimaryCard>
                <h3 className="text-xl font-semibold">Selected Skill Area:</h3>
                {selectedItem === 'gameDev' && <div>You selected Video Game Development & Design.
                    <h1> RoboSim Roguelike Scholar</h1>
                    <PrimaryLink href={'project/RSRS'}> Check out the full page!</PrimaryLink>
                    <blockquote>
                        <li>A 3D Roguelike Video Game written in Unity for my final year Computer Science BSc project as
                            part of a knowledge exchange project with IBM.
                        </li>
                        <li>A similar gameplay loop to Risk of Rain 2.</li>
                        <li>Procedural Terrain Generation.</li>
                        <li>A Procedural Ability System.</li>
                        <li>Large Language Model and Text To Speech Integration.</li>
                    </blockquote>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/_wCXgZ2Xxfk?controls=1`}
                        title="Video Player"
                        allowFullScreen
                    />
                </div>}
                {selectedItem === 'fullstack' && <div>You selected Fullstack Web Development.
                    <p>I have a reasonable amount of experience in a variety of frameworks, technologies and
                        languages.</p>
                    <h1> My Web Dev Projects/Experience (by recency)</h1>
                    <h2> This Website</h2>
                    <li>
                        Developed by myself using Next.js in Typescript with the App router.
                    </li>
                    <li>
                        It is statically hosted on github and renders MDX dynamically to be easily updated in the future
                        with more work!
                    </li>
                    <li>
                        Provides an intuitive and visually appealing experience through the use of wrappers of
                        headlessUI components and customised stylesheets.
                    </li>

                    <h2>PollAnywhere</h2>
                    <PrimaryLink href={'project/PollAnywhere'}> Check out a more comprehensive overview!</PrimaryLink>
                    <li>
                        A spin-off of the well known PollEverywhere aimed towards Informatics lecturers developed using
                        the MERN stack.
                    </li>
                    <li>
                        Makes use of websockets to provide real time updates, allowing lecturers to see students answers to quiz questions.
                    </li>
                    <li>
                        Worked in a team of 7 to develop using Agile Methodologies.
                    </li>
                    <li>Frontend at Vercel with a database using MongoDB and a backend at Render.</li>

                    <h2>Dingo</h2>
                    <PrimaryLink href={'project/Dingo'}> Check out a more comprehensive overview!</PrimaryLink>
                    <li>An intuitive task and team management web app.</li>
                    <li>Developed in a team of 5 using the Django Web Framework.</li>
                    <li>Deployed at Vercel </li>
                </div>}
                {selectedItem === 'modding' && <div>You selected Game Modding.
                    <p>I create Minecraft Plugins and Mods, as well as curate Modpacks.</p>
                    <p>SonorousMC is the name of my Minecraft network, featuring a ProjectKorra server, Modpack server
                        and my Main MMORPG Fantasy Project server! </p>
                    <PrimaryAccordion>
                        <AccordionItem title={"MMORPG Fantasy Project server"}>
                            <div>
                                <h2><a
                                    href="https://github.com/SonorousMinecraft/SonorousAbilities">Abilities</a> (alpha)
                                </h2>
                                <blockquote>
                                    <p>A groundbreakingly complex ability system, heavily inspired by <a
                                        href="https://projectkorra.com/">Project Korra</a> but written from scratch and
                                        aims to
                                        do things a different way.</p>
                                    <p>Consists of Archetypes (the name for classes) such as Earth, Ocean, Sky, Sun,
                                        Chaos
                                        etc.</p>
                                    <p>Makes use of block displays and item displays released in Minecraft 1.19.4 to
                                        create
                                        visually appealing abilities.</p>
                                </blockquote>

                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/WEVVOWkuW0w?controls=1`}
                                    title="Video Player"
                                    allowFullScreen
                                />
                            </div>

                            <div>
                                <h2><a href="https://github.com/SonorousMinecraft/SonorousRPG">RPG</a> (skill system at
                                    vertical
                                    slice, other features not implemented yet)</h2>
                                <blockquote>
                                    <p>The centerpiece of the server, skill system, custom enchantments, custom items,
                                        etc.</p>
                                    <p>The skill system features passives and levels for each player.</p>
                                </blockquote>
                            </div>

                            <div>
                                <h2><a href="https://github.com/SonorousMinecraft/SonorousWorldGen">World
                                    Generation</a> (pre-alpha, works but I have ideas to improve it)</h2>
                                <blockquote>
                                    <p>An entirely revamped world generation from scratch designed to rejuvenate the
                                        world.</p>
                                    <p>Uses noise to generate more coherent continent based land masses with intuitive
                                        biome
                                        placement.</p>
                                    <p>Custom tree generation (large ones) using fractal noise.</p>
                                    <p>Structure generation using WorldEdit Schematics.</p>
                                    <p>Procedurally generated Kingdoms that can place entities, using WorldEdit
                                        schematic
                                        buildings.</p>
                                </blockquote>
                            </div>

                            <div>
                                <h2><a href="https://github.com/SonorousMinecraft/SonorousMobs">Mobs</a> (pre-alpha but
                                    probably
                                    making major changes)</h2>
                                <blockquote>
                                    <p>A complete re-doing of Minecraft's entity AI. Probably not good as it stands.</p>
                                    <p>Makes use of an adapted Procedural version of SonorousAbilities.</p>
                                    <p>More complex behaviours and whatnot.</p>
                                    <p>Pathfinding with Navmeshes.</p>
                                </blockquote>
                            </div>

                            <div>
                                <h2><a href="https://github.com/SonorousMinecraft/SonorousModels">Models</a> (still
                                    early
                                    stages)</h2>
                                <blockquote>
                                    <p>A new idea I had to figure out how to make modded Models in Minecraft as a
                                        plugin.</p>
                                    <p>This will at some stage be used with Mobs.</p>
                                </blockquote>
                            </div>

                            <div>
                                <h2><a href="https://github.com/SonorousMinecraft/SonorousNPCs">NPCs</a> (needs to be
                                    redone
                                    largely)</h2>
                                <blockquote>
                                    <p>A naive attempt at complex behaving NPCs.</p>
                                    <p>Features a dialogue system that also allows for movement.</p>
                                </blockquote>
                            </div>
                        </AccordionItem>
                        <AccordionItem title={"Avatar Duels"}>
                            <h2>
                                The central plugin, fork of addons and duel system with AI opponents
                            </h2>
                            <a href="https://github.com/Sujan-Naik/AvatarDuels">Github Link</a>
                        </AccordionItem>
                        <AccordionItem title={"Vibrant Voyages"}>
                            <h2> A Modpack I've curated and implemented a public server for</h2>
                            <a href={"https://modrinth.com/modpack/vibrant-voyages"}> Modrinth page link</a>
                        </AccordionItem>
                    </PrimaryAccordion>


                </div>}
                {selectedItem === 'animating' && <div>You selected Modeling and Animating.
                    <p> Here are some characters I modelled, created animations for and rigged using Blender for my
                        first Unity Video Game, RoboSim Roguelike Scholar...</p>
                    <PrimaryCard height={"50%"}>


                        <PrimaryTabs tabs={models}>
                            {models && models.map(value =>
                                <GLTFModelLoader key={value} url={`models/${value}`}></GLTFModelLoader>
                            )}
                        </PrimaryTabs>
                    </PrimaryCard>
                </div>}
            </PrimaryCard>
        </>
    );
};


export default Hero;