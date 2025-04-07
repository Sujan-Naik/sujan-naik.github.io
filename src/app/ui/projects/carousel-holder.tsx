"use client";
import { useState } from 'react';
import Project from "@/app/ui/projects/project";

interface CarouselProps {
    files: string[];
}

export default function CarouselHolder({ files }: CarouselProps) {
    const [index, setIndex] = useState(0);

    const handleSelect = (direction: 'prev' | 'next') => {
        setIndex((prevIndex) => {
            console.log(prevIndex)
            if (direction === 'next') {
                return (prevIndex + 1) % files.length;
            } else {
                return (prevIndex - 1 + files.length) % files.length;
            }
        });
    };

    return (
        <div className="carousel">
    <div className="carousel-inner">
        {files.length > 0 && (
            <div className="opacity-100" key={files[index]}>
                <Project path={`showcase/${files[index]}`} />
            </div>
        )}
    </div>
    <button className="button" onClick={() => handleSelect('prev')}>❮</button>
    <button className="button" onClick={() => handleSelect('next')}>❯</button>
</div>
    );
}