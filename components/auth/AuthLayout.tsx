export default function AuthLayout({
    title,
    subtitle,
    children
} : {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen grid md:grid-cols-2">
            <div className="hidden md:flex relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-16 flex-col justify-between">


                <div
                    className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/20 rounded-full blur-3xl"/>


                <div className="relative z-10">
                    <h1 className="text-4xl font-semibold tracking-tight">
                        Aura <span className="font-bold">Prep</span> AI
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-md">
                        Prepare smarter for Anna University exams with
                        syllabus-locked AI answers, valuation-focused structure,
                        and mark-wise precision.
                    </p>
                </div>


                <div className="relative z-10 text-sm text-white/80">
                    Built for students who care about results.
                </div>
            </div>

            <div className="flex items-center justify-center px-6">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-semibold tracking-tight">
                        {title}
                    </h2>
                    <p className="mt-2 text-gray-600">
                        {subtitle}
                    </p>

                    <div className="mt-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}