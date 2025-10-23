import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Projects() {
  const base = path.join(process.cwd(), "components/project-sections");
  const files = fs.readdirSync(base);

  const sections = files.map((file) => {
    const name = file.replace(/\.[tj]sx?$/, "");
    const Component = dynamic(() =>
      import(`@/components/project-sections/${name}`)
    );
    return { name, Component };
  });

  return (
    <>
      <Header />
      <Navbar />
      <main className="flex">
        <nav className="sticky self-start top-1 p-6 flex flex-col justify-between items-center space-y-6 ">
          {sections.map(({ name }) => (
            <div key={name}>
              <a href={`#${name.toLowerCase()}`}>{name}</a>
            </div>
          ))}
        </nav>

        <article className="w-full">
          {sections.map(({ name, Component }) => (
            <section id={name.toLowerCase()} key={name}>
              <Component />
            </section>
          ))}
        </article>
      </main>
    </>
  );
}