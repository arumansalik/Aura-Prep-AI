import Link from "next/link";

export function FinalCTA() {
    return (
        <section className="mt-40 mb-32 text-center">
            <h2 className="text-4xl font-semibold">
                Your Exam Preparation,
                <br /> Simplified.
            </h2>

            <p className="mt-4 text-gray-600">
                Stop guessing what to study. Start preparing smart.
            </p>

            <Link
                href="/dashboard"
                className="inline-block mt-8 px-8 py-3 rounded-xl bg-black text-white text-sm font-medium hover:scale-105 transition"
            >
                Get Started Free
            </Link>
        </section>
    );
}
