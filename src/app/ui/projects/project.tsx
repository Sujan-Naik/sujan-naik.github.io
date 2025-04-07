"use client";
import {useEffect, useState, Suspense, JSX, LazyExoticComponent} from 'react';

interface ProjectProps {
    path: string;
}

const loadMDXComponent = (path: string) => import(`@/content/${path}.mdx`);

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
        <Suspense fallback={<p>Loading...</p>}>
            {MDXComponent ? <MDXComponent/> : ''}
        </Suspense>
    );
};

export default Project;