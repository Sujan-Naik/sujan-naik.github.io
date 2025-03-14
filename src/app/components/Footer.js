import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-6 bg-[#f9f9f9] dark:bg-[#1a1a1a] text-[#171717] dark:text-[#ededed]">
      <div className="flex gap-6 mb-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Image
            src="/github.svg" // Replace with your GitHub logo path
            alt="GitHub"
            width={24}
            height={24}
          />
          <span className="ml-2">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Image
            src="/linkedin.svg" // Replace with your LinkedIn logo path
            alt="LinkedIn"
            width={24}
            height={24}
          />
          <span className="ml-2">LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Image
            src="/twitter.svg" // Replace with your Twitter logo path
            alt="Twitter"
            width={24}
            height={24}
          />
          <span className="ml-2">Twitter</span>
        </a>
      </div>

      <div className="flex gap-6 mb-4">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          Documentation
        </a>
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          Learn
        </a>
      </div>

      <div className="text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}