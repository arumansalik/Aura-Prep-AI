import SubjectCard from "@/components/dashboard/SubjectCard";

const subjects = [
    {
        code: "CS8491",
        name: "Computer Architecture",
    },
    {
        code: "CS8451",
        name: "Design and Analysis of Algorithms",
    },
    {
        code: "CS8492",
        name: "Database Management Systems",
    },
];

export default function SubjectGrid() {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">
                Your Subjects
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((sub) => (
                    <SubjectCard  key={sub.code} subject={sub} />
                ))}
            </div>
        </div>
    );
}