import NavBar from "@/app/ui/navbar";
import PrimaryCard from "@/app/ui/components/Card/PrimaryCard";

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode;
}) {
    return (
        <div>

            <PrimaryCard>
                {children}
            </PrimaryCard>
        </div>
    );
}