import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center text-center mt-28 px-4">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                Crack <span className="text-blue-600">Anna University</span> Exams
                <br />
                <span className="text-blue-600">5x Faster </span>with AuraPrep
            </h1>

            <p className="mt-6 max-w-3xl text-gray-600 text-lg">
                Stop reading random notes. Generate <strong>exam-ready-answers</strong> for
                <strong> 2, 13 & 16 marks</strong>, strictly based on Anna University
                syllabus and valuation patterns.
            </p>

            <div className="mt-10 flex gap-4">
                <Link href="/dashboard" className="px-4 py-3 rounded-xl bg-black text-white text-sm font-medium hover:scale-105 transition">
                    Start Preparing
                </Link>
                <Link href="#features" className="px-7 py-3 rounded-xl border border-gray-3000 text-sm font-medium hover:bg-gray-100">
                    Explore Features
                </Link>
            </div>
        </section>
    );
}
