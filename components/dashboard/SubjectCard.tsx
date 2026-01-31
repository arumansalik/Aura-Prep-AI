import Link from "next/link";

export default function SubjectCard({
    subject,
                                    } : {
    subject: {code: string, name: string};
}) {
    return (
        <Link href={`/generate?subject=${subject.code}`} className="rounded-2xl border bg-white p-6 hover:shadow-md transition group">
            <p className="text-sm text-gray-500">{subject.code}</p>
            <h4 className="mt-2 font-semibold group-hover:text-blue-600">{subject.name}</h4>
            <p className="mt-4 text-sm text-gray-600">Generate exam-ready answers →</p>
        </Link>
    )
}