import SideNav from "@/app/ui/projects/sidenav";
import {getAllProjects} from "@/app/lib/fetchProjectData";

export default async function ProjectSideView(){

    const projects = await getAllProjects()
    return (
        <div>
            <SideNav projectNames={projects}></SideNav>
        </div>
    )
}

