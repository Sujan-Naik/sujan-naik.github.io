import React from 'react';
import {getAllProjects} from "@/app/lib/fetchProjectData";
import {getAllProjectMetadata} from "@/app/lib/fetchProjectMetadata";

export default async function Page({params,
                                   }: {
    params: Promise<{ stub: string }>
}) {

    const {stub} = await params

    return (
        <div>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${stub}?autoplay=0&controls=1`}
                title="Video Player"
                allowFullScreen
            />
        </div>
    );
};

interface ProjectMetadata {
    title: string;
    githubUrl: string;
    previewImage: string;
    video: string;
}

export async function generateStaticParams(): Promise<Array<{ stub: string }>> {
    try {
        const metadata: Map<string, ProjectMetadata> = await getAllProjectMetadata();

        // Log the metadata to debug
        console.log("Project Metadata:", Array.from(metadata.entries()));

        // Iterate over values and ensure video is defined
        return Array.from(metadata.values())
            .map(value => value.video) // Extract video values
            .filter(video => video !== undefined && video !== null) // Filter out undefined/null values
            .map(video => ({
                stub: video // Each object in the array contains the stub
            }));

    } catch (error) {
        console.error("Error fetching project metadata:", error);
        return [];
    }
}