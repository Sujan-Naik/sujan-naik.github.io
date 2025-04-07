import * as fs from "node:fs/promises";
import Link from "next/link";


export default async function Page(){
    const {projectNames} = await getFiles();
    return (
        <div>
            {projectNames && projectNames.map((fileName, index) => {
                const file = fileName.replace(/\.mdx$/, '');
                return <Link key={file} href={`/projects/${file}`}>
                     {file}
                </Link>
            })}
        </div>
    )
}

async function getFiles (){
    let files: any[] = []
    try {
        files = await fs.readdir("src/content/");
        console.log()
    } catch (err) {
        console.error("Error reading fies", err);
    }
    return {
        projectNames: files,
    };
};