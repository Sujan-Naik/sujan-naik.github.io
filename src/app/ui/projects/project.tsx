"use client"
import { Suspense } from "react"
import { Transition } from "@headlessui/react"
import LoadingCircleSpinner from "@/app/ui/components/Loading/LoadingCircleSpinner"
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"
import { MDXProvider } from "@mdx-js/react"
import { useMDXComponents } from "../../../../mdx-components"

interface ProjectProps {
  mdxComponent: MDXRemoteSerializeResult | null
}

const Project = ({ mdxComponent }: ProjectProps) => {
  const components = useMDXComponents({})

  // Add null checking to prevent errors during hydration
  if (!mdxComponent || !mdxComponent.compiledSource) {
    return <div>Content not available</div>
  }

  return (
    <Transition show={true} appear={true}>
      <div className={"transition duration-1000 ease-in data-[enter]:opacity-0"}>
        <Suspense fallback={<LoadingCircleSpinner />}>
          <MDXProvider>
            <MDXRemote
              compiledSource={mdxComponent.compiledSource}
              scope={mdxComponent.scope || {}}
              frontmatter={mdxComponent.frontmatter || {}}
              components={components}
            />
          </MDXProvider>
        </Suspense>
      </div>
    </Transition>
  )
}

export default Project
