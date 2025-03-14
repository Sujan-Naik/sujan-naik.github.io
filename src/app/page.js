import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 bg-[#f9f9f9] dark:bg-[#1a1a1a] text-[#171717] dark:text-[#ededed] font-[family-name:var(--font-geist-sans)] flex flex-col justify-between">
      <header className="flex flex-col items-center mb-16">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-extrabold mt-4">Welcome to My Portfolio</h1>
        <p className="mt-2 text-center max-w-prose">
          I'm a passionate web developer skilled in building compelling web
          experiences. Explore my projects, learn more about my skills, and
          get in touch!
        </p>
      </header>

      <main className="flex flex-col gap-16">
        <section className="flex flex-col items-center">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            <div className="card">
              <Image
                src="/project1.jpg"
                alt="Project 1"
                width={300}
                height={200}
                className="rounded-t-md"
              />
              <div className="card-header">Project Title 1</div>
              <div className="card-content">A brief description of the project.</div>
            </div>
            <div className="card">
              <Image
                src="/project2.jpg"
                alt="Project 2"
                width={300}
                height={200}
                className="rounded-t-md"
              />
              <div className="card-header">Project Title 2</div>
              <div className="card-content">A brief description of the project.</div>
            </div>
            <div className="card">
              <Image
                src="/project3.jpg"
                alt="Project 3"
                width={300}
                height={200}
                className="rounded-t-md"
              />
              <div className="card-header">Project Title 3</div>
              <div className="card-content">A brief description of the project.</div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-center">I’d love to hear from you! You can reach me through the links below:</p>
          <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
            <a
              className="button"
              href="mailto:your-email@example.com"
            >
              Email Me
            </a>
            <a
              className="button"
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold">Resources</h2>
          <ol className="mt-4 list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                src/app/page.js
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
          </ol>
        </section>
      </main>

      <footer className="flex gap-[24px] flex-wrap items-center justify-center py-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}