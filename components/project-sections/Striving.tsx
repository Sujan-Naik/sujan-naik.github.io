import Link from "next/link";

export default function Striving() {
  return (
    <section>
      <h2>Striving</h2>
      <Link href="https://striving.uk">My Site</Link>
      <Link href="https://github.com/Sujan-Naik/striving-web">Github Repository</Link>
      <p>Striving is a rapid project prototype, documentation and manual generator</p>
      <h3>Features</h3>
      <ul>
        <li>LLM Chatbot with xAI and OpenAI Model Access</li>
        <li>LLM Github Integration for rapid code generation</li>
        <li>Unified Project Showcase with Documentation and Manuals</li>
      </ul>
      <h3>Technical Details</h3>
      <ul>
        <li>xAI and OpenAI Integration</li>
        <li>Vercel Deployment</li>
        <li>Next.js + Typescript</li>
        <li>Tailwind CSS</li>
        <li>NextAuth.js + Drizzle ORM + Neon PostgreSQL</li>
        <li>MongoDB for Project Data Storage</li>
      </ul>
    </section>
  );
}