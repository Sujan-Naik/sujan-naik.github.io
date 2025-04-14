import NavBar from "@/app/ui/navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>

      <NavBar/>
    <div className="max-w-4xl mx-auto px-6 py-8 border border-foreground-secondary bg-background-tertiary rounded-lg shadow-md">
  {children}
</div>
      </div>
  );
}