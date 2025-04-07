export default function Layout({
  children,
  navigation,
  projects,
}: {
  children: React.ReactNode;
  navigation: React.ReactNode;
  projects: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Side Navigation */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        {navigation}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* Projects Overview */}
        <div className="bg-white shadow rounded-lg p-4">
          {projects}
        </div>

        {/* Children Content */}
        <div className="bg-white shadow rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-3">
          {children}
        </div>
      </main>
    </div>
  );
}