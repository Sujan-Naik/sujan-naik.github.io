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
            <main className="main-content">
                {/* Projects Overview */}
                <div className="projectnav">
                    {projects}
                </div>

                {/* Children Content */}
                <div className="children-container">
                    {children}
                </div>
            </main>
        </div>
    );
}