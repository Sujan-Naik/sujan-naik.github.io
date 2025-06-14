import Project from "@/app/ui/projects/project";
import {getAllProjects, getProjectWithPath, getShowcaseProjects} from "@/app/lib/fetchProjectData";
import {loadMDXComponent} from "@/app/lib/renderMDXNoFrontmatter";

// This function generates static parameters for the page
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
    try {
        const posts: string[] = await getAllProjects(); // Get an array of post ids

        // Map over the posts and return an array of objects with the id
        return posts.map(post => ({
            id: post, // Each object in the array contains the slug/id
        }));
    } catch (error) {
        console.error("Error fetching project IDs:", error);
        return [];
    }
}



export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {

    const {id} = await params


    const path = await getProjectWithPath(id);

    const project = await loadMDXComponent(`/content/${path}`);


    return (
        <Project mdxComponent={project}/>
    )
}

