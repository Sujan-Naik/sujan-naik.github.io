// src/app/projects/page.js
import Link from 'next/link'

export const metadata = {
  title: 'My GitHub Projects',
  description: 'Showcase of my GitHub projects',
}

export default async function ProjectsList() {
  const projects = await getProjects()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-[var(--foreground)]">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.name}`}
            key={project.id}
            className="project-card block"
          >
            <div className="p-6">
              <h2 className="project-card-title">{project.name}</h2>
              {project.description && (
                <p className="project-card-description">{project.description}</p>
              )}
              <div className="project-card-meta">
                <div className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 rounded-full mr-1"
                    style={{ backgroundColor: project.language ? getLanguageColor(project.language) : '#ccc' }}
                  ></span>
                  <span>{project.language || 'Not specified'}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span>{project.stargazers_count}</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-2 bg-[var(--color-primary)] bg-opacity-10">
              <span className="text-sm text-[var(--color-primary-dark)]">View details →</span>
            </div>
          </Link>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="alert alert-info">
          No projects found. Make sure your GitHub token and username are set correctly.
        </div>
      )}
    </div>
  )
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

// Helper function to get a color for a programming language
function getLanguageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Swift: '#ffac45',
    Rust: '#dea584',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
  }

  return colors[language] || '#ccc'
}