import * as fs from "node:fs/promises";
import Link from "next/link";

export default async function Page() {
    let files: any[] = []
    try {
        files = await fs.readdir("src/content/");
    } catch (err) {
        console.error("Error reading fies", err);
    }

    return (
        <div>
            {files.map((fileName, index) => {
                const file = fileName.replace(/\.mdx$/, '');
                return <Link key={file} href={`/projects/${file}`}>
                     {file}
                </Link>
            })}
        </div>
    )
}