import Link from "next/link";

export default function HeadedUI() {
  return (
    <section>
      <h2>Headed-UI</h2>
      <Link href="https://headed-ui.vercel.app/">My Site</Link>
      <Link href="https://github.com/Sujan-Naik/headed-ui">Github Repository</Link>
      <p>A UI Component Library for ESM to provide starting points based on Headless UI.</p>
      <p>
        2,632 downloads on <Link href="https://www.npmjs.com/package/headed-ui">NPM</Link>
      </p>
      <h3>Technical Details</h3>
      <ul>
        <li>Vercel Demo Deployment</li>
        <li>Next.js Typescript</li>
        <li>Tailwind CSS Styling</li>
      </ul>
    </section>
  );
}