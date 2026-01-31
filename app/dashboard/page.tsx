import WelcomeCard from "@/components/dashboard/WelcomeCard";
import SubjectGrid from "@/components/dashboard/SubjectGrid";

export default function DashboardPage() {
    return (
        <div className="space-y-10">
            <WelcomeCard />
            <SubjectGrid />
        </div>
    )
}