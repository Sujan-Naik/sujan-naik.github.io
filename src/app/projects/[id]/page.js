// src/app/projects/[id]/page.js
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Mark this component as a Server Component
export default async function Project({ params }) {
  const { id } = await params
  const project = await getProjectData(id)

  // Handle case where project doesn't exist
  if (!project) {
    notFound()
  }

  const readme = await getProjectReadme(project.full_name)

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <Link href="/projects" className="text-[var(--color-primary-dark)] hover:text-[var(--color-secondary)] transition-colors">
          &larr; Back to all projects
        </Link>
        <h1 className="text-3xl font-bold mt-4 text-[var(--foreground)]">{project.name}</h1>
        {project.description && (
          <p className="mt-2 text-[var(--muted-foreground)]">{project.description}</p>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="card">
            <div className="card-header">README</div>
            <div className="prose max-w-none text-[var(--card-foreground)]" dangerouslySetInnerHTML={{ __html: readme }} />
          </div>
        </div>

        <div>
          <div className="project-card">
            <div className="project-card-header">
              <h2 className="project-card-title">Project Details</h2>
            </div>
            <ul className="space-y-2">
              <li>
                <span className="font-medium text-[var(--foreground)]">Repository:</span>{' '}
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary-dark)] hover:text-[var(--color-secondary)] transition-colors"
                >
                  {project.full_name}
                </a>
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">Language:</span>{' '}
                <span className="badge badge-primary">{project.language || 'Not specified'}</span>
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">Stars:</span>{' '}
                <span className="badge badge-secondary">{project.stargazers_count}</span>
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">Forks:</span>{' '}
                <span className="badge badge-tertiary">{project.forks_count}</span>
              </li>
              <li>
                <span className="font-medium text-[var(--foreground)]">Last Updated:</span>{' '}
                <span className="badge badge-highlight">
                  {new Date(project.updated_at).toLocaleDateString()}
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center py-2 block"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await getProjects()

  return projects.map((project) => ({
    id: project.name,
  }))
}

// Metadata for the page
export async function generateMetadata({ params }) {
  const { id } = params
  const project = await getProjectData(id)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.name} | My Projects`,
    description: project.description || 'Project showcase',
  }
}

// Helper function to fetch all projects
async function getProjects() {
  // Set up GitHub API authentication
  const headers = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    'User-Agent': 'next-js-portfolio'
  }

  // Get your GitHub username from environment variables
  const username = process.env.GITHUB_USERNAME

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers,
      // This ensures the data is up-to-date at build time but can be cached after
      next: { revalidate: 86400 } // Revalidate once per day
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.status}`)
    }

    const repos = await res.json()
    // Filter out forks if you want
    return repos.filter(repo => !repo.fork)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// Helper function to fetch individual project data
async function getProjectData(projectId) {
  // Set up GitHub API authentication
  const headers = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    'User-Agent': 'next-js-portfolio',
    Accept: 'application/vnd.github.v3+json'
  }

  // Get your GitHub username from environment variables
  const username = process.env.GITHUB_USERNAME

  try {
    const res = await fetch(`https://api.github.com/repos/${username}/${projectId}`, {
      headers,
      next: { revalidate: 86400 } // Revalidate once per day
    })

    if (!res.ok) {
      if (res.status === 404) {
        return null
      }
      throw new Error(`Failed to fetch project: ${res.status}`)
    }

    return await res.json()
  } catch (error) {
    console.error(`Error fetching project ${projectId}:`, error)
    return null
  }
}

// Helper function to fetch project README
async function getProjectReadme(fullName) {
  // Set up GitHub API authentication
  const headers = {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    'User-Agent': 'next-js-portfolio',
    Accept: 'application/vnd.github.html'
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${fullName}/readme`, {
      headers,
      next: { revalidate: 86400 } // Revalidate once per day
    })

    if (!res.ok) {
      if (res.status === 404) {
        return '<p>No README found for this project.</p>'
      }
      throw new Error(`Failed to fetch README: ${res.status}`)
    }

    return await res.text()
  } catch (error) {
    console.error(`Error fetching README for ${fullName}:`, error)
    return '<p>Error loading README content.</p>'
  }
}