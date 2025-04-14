"use client";
import { useState } from 'react';
import Project from "@/app/ui/projects/project";
import PrimaryButton from "../components/Button/primary-button"
import {MDXRemoteSerializeResult} from "next-mdx-remote";

interface CarouselProps {
    mdxComponents: MDXRemoteSerializeResult[];
}

export default function CarouselHolder({ mdxComponents }: CarouselProps) {
    const [index, setIndex] = useState(0);

    const handleSelect = (direction: 'prev' | 'next') => {
        setIndex((prevIndex) => {
            console.log(prevIndex)
            if (direction === 'next') {
                return (prevIndex + 1) % mdxComponents.length;
            } else {
                return (prevIndex - 1 + mdxComponents.length) % mdxComponents.length;
            }
        });
    };

    return (
        <div className="carousel">
    <PrimaryButton onClick={() => handleSelect('prev')}>❮</PrimaryButton>
    <PrimaryButton className={"absolute right-0"} onClick={() => handleSelect('next')}>❯</PrimaryButton>

    <div className="carousel-inner">
        {mdxComponents.length > 0 && (
            <div className="opacity-100" key={index}>
                <Project mdxComponent={mdxComponents[index]} />
            </div>
        )}
    </div>
</div>
    );
}