import SideNav from "@/app/ui/projects/sidenav";
import {getAllProjects} from "@/app/lib/fetchProjectData";
import SideMenuIcon from "@/app/ui/components/Icons/SideMenuIcon";

export default async function ProjectSideView(){

    const projects = await getAllProjects()
    return (
        <div>
            <SideMenuIcon>
            <SideNav projectNames={projects}></SideNav>
                </SideMenuIcon>
        </div>
    )
}

