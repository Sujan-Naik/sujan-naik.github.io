// src/app/projects/layout.js
export default function ProjectsLayout({ children }) {
  return (
    <div className="min-h-screen">
      <nav className="shadow">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="text-xl font-bold">
            My Portfolio
          </a>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} My Portfolio. Built with Next.js and GitHub API.
        </div>
      </footer>
    </div>
  )
}