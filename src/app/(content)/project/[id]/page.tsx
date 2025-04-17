import Project from "@/app/ui/projects/project";
import {getShowcaseProjects} from "@/app/lib/fetchProjectData";
import {loadMDXComponent} from "@/app/lib/renderMDXNoFrontmatter";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {

    const {id} = await params

    let path: string = id.replace(/%20/g, ' ');

    const showcases: string[] = await getShowcaseProjects();
    if (showcases.includes(path)) {
        path = `showcase/${path}`;
    }

    const project = await loadMDXComponent(`${path}.mdx`);


    return (
        <div><Project mdxComponent={project}/></div>
    )
}
