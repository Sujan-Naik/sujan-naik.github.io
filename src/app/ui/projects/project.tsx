"use client";
import {useEffect, useState, Suspense, JSX, LazyExoticComponent} from 'react';
import {Transition} from "@headlessui/react";

interface ProjectProps {
    path: string;
}

const loadMDXComponent = (path: string) => import(`@/${path}.mdx`);

const Project = ({ path }: ProjectProps) => {
    const [MDXComponent, setMDXComponent] = useState<LazyExoticComponent<any>>();

    useEffect(() => {
        const fetchMDX = async () => {
            const loadedPost = await loadMDXComponent(path);
            setMDXComponent(() => loadedPost.default);
        };
        fetchMDX();
    }, [path]);

    return (
        <Transition show={true} appear={true}>

                <div className={"transition duration-1000 ease-in data-[enter]:opacity-0"}>
        <Suspense fallback={<p>Loading...</p>}>
            {MDXComponent ? <MDXComponent/> : ''}
        </Suspense>
                </div>
        </Transition>
    );
};

export default Project;