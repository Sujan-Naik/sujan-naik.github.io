"use client"
import { Suspense, useEffect, useState } from "react"
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
  // Add a state to ensure rendering only happens on the client
  const [isClient, setIsClient] = useState(false)

  // This effect ensures the component only renders MDX on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Add null checking to prevent errors during hydration
  if (!mdxComponent || !mdxComponent.compiledSource) {
    return <div>Content not available</div>
  }

  return (
    <Transition show={true} appear={true}>
      <div className={"transition duration-1000 ease-in data-[enter]:opacity-0"}>
        <Suspense fallback={<LoadingCircleSpinner />}>
          {/* Only render MDX content on the client side */}
          {isClient ? (
            <MDXProvider>
              <MDXRemote
                compiledSource={mdxComponent.compiledSource}
                scope={mdxComponent.scope || {}}
                frontmatter={mdxComponent.frontmatter || {}}
                components={components}
              />
            </MDXProvider>
          ) : (
            <LoadingCircleSpinner />
          )}
        </Suspense>
      </div>
    </Transition>
  )
}

export default Project
