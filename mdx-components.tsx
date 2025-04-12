import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Header 1
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4 text-center">
        {children}
      </h1>
    ),

    // Header 2
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold  mb-3">
        {children}
      </h2>
    ),

    // Header 3
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium  mb-2">
        {children}
      </h3>
    ),

    // Header 4
    h4: ({ children }) => (
      <h4 className="text-xl font-medium  mb-2">
        {children}
      </h4>
    ),

    // Image with responsive styling
    img: (props) => (
      <Image
        sizes="100vw"
        className="rounded-lg mb-4"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="text-base  mb-4">
        {children}
      </p>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-foreground-secondary pl-4 italic  mb-4">
        {children}
      </blockquote>
    ),

    // Code block
    pre: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        {children}
      </pre>
    ),

    // Inline Code
    code: ({ children }) => (
      <code className="bg-gray-200  font-mono px-1 py-0.5 rounded">
        {children}
      </code>
    ),

    // List Items
    ul: ({ children }) => (
      <ul className="list-disc ml-5 mb-4">{children}</ul>
    ),

    // Ordered List
    ol: ({ children }) => (
      <ol className="list-decimal ml-5 mb-4">{children}</ol>
    ),

    // List Item
    li: ({ children }) => (
      <li className="mb-2">{children}</li>
    ),

    // Link
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-foreground-secondary hover:text-foreground-tertiary underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    // Horizontal Rule
    hr: () => (
      <hr className="border-t-2 border-foreground-secondary mb-4" />
    ),

    // Table
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300">
          {children}
        </table>
      </div>
    ),

    // Table Head
    th: ({ children }) => (
      <th className="bg-foreground-secondary  p-2 border border-gray-300">
        {children}
      </th>
    ),

    // Table Body
    td: ({ children }) => (
      <td className="p-2 border border-gray-300">
        {children}
      </td>
    ),

    // Custom component for any other use
    // Add more components as needed

    ...components, // Ensure to include existing components
  };
}