export function FeaturesSection() {


    return (
        <section
            id="features"
            className="mt-36 max-w-7xl mx-auto px-4"
        >
            {/* Section Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold tracking-tight">
                    Built for <span className="text-blue-600">Exam Performance</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Every feature is designed around how Anna University exams
                    are actually evaluated — not generic AI answers.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">

                {/* BIG CARD */}
                <div
                    className="md:col-span-2 md:row-span-2 rounded-3xl border border-gray-200 p-8 flex flex-col justify-between hover:shadow-lg transition">
                    <div>
            <span className="text-xs uppercase tracking-wide text-blue-600 font-medium">
              Core Feature
            </span>
                        <h3 className="mt-3 text-2xl font-semibold">
                            Mark-Wise Answer Generation
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Generate answers strictly tailored for <strong>2, 13, and 16 marks</strong>.
                            No unnecessary content. No missing points. Just what the evaluator expects.
                        </p>
                    </div>

                    <div className="text-sm text-gray-500">
                        ✔ Word-limit aware &nbsp;•&nbsp; ✔ Valuation format
                    </div>
                </div>

                {/* MEDIUM CARD */}
                <div className="md:col-span-2 rounded-3xl border border-gray-200 p-8 hover:shadow-lg transition">
          <span className="text-xs uppercase tracking-wide text-blue-600 font-medium">
            Syllabus Control
          </span>
                    <h3 className="mt-3 text-xl font-semibold">
                        Syllabus-Locked AI
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm">
                        AI answers are generated only from your selected
                        <strong> regulation, subject code, unit, and syllabus</strong>.
                        No out-of-scope hallucinations.
                    </p>
                </div>

                {/* SMALL CARD */}
                <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition">
                    <h4 className="font-medium">
                        Previous Year Question Mode
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                        Solve repeated Anna University questions with
                        examiner-friendly structure.
                    </p>
                </div>

                {/* SMALL CARD */}
                <div className="rounded-3xl border border-gray-200 p-6 hover:shadow-lg transition">
                    <h4 className="font-medium">
                        Last-Minute Revision
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                        Compress long notes into exam-ready answers in seconds.
                    </p>
                </div>



            </div>
        </section>
    );
}