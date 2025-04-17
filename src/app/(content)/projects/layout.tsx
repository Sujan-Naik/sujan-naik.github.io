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
            <aside className="sidenav">
                {navigation}
            </aside>

            {/* Main Content Area */}
            <main className="flex-1">
                {/* Projects Overview */}
                <div className="projectnav">
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