import Project from "@/app/ui/projects/project";
import {getShowcaseProjects} from "@/app/lib/fetchProjectData";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

    let path: string = id.replace(/%20/g, ' ');

    const showcases: string[] = await getShowcaseProjects();
    if (showcases.includes(path) ){
        path = `showcase/${path}`;
    }


    return(
        <div> <Project path={`content/${path}`}/></div>
    )
}
