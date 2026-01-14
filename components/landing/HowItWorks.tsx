export function HowItWorks() {
    return (
        <section className="mt-32 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center">
                How It Works
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <Step title="Select Subject & Unit" />
                <Step title="Ask Exam Question" />
                <Step title="Get Exam-Ready Answer" />
            </div>
        </section>
    );
}
function Step({ title }: { title: string }) {
    return (
        <div className="p-6 rounded-xl border border-gray-200">
            <h4 className="font-medium">{title}</h4>
            <p className="mt-2 text-sm text-gray-600">
                Designed exactly the way Anna University exams work.
            </p>
        </div>
    );
}