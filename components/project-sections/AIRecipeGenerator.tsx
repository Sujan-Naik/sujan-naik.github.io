import Link from "next/link";

export default function AIRecipeGenerator() {
  return (
    <section>
      <h2>AI Recipe Generator</h2>
      <p><em>Tech Stack: React + TypeScript + Vite</em></p>
      <p>AI-powered recipe generation using AWS Amplify, Bedrock, and Claude 3 Sonnet model.</p>
      <Link href="https://github.com/Sujan-Naik/ai-recipe-generator/">
        GitHub Repository
      </Link>
    </section>
  );
}