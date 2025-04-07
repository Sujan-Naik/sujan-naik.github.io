import Project from "@/app/ui/projects/project";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

    return(
        <div> <Project path={id}/></div>
    )
}
