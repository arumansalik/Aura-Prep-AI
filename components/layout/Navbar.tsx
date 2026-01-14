import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full px-12 py-6 flex items-center justify-between bg-white/80 backdrop-blur-md">
            <h1 className="text-xl font-semibold tracking-tight ">
                Aura<span className="font-bold text-blue-600 ">Prep</span> AI
            </h1>

            <div className="hidden md:flex gap-8 text-sm text-gray-600">
                <a href="" className="hover:text-black">Features</a>
                <a href="" className="hover:text-black">How it works</a>
                <a href="" className="hover:text-black">Why AuraPrep AI</a>
            </div>

            <div className="flex items-center gap-6">
                <Link href="/auth/login" className="text-sm text-gray-600 hover:text-black">
                    Login
                </Link>
                <Link href="/dashboard" className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:opacity-90">
                    Get Started
                </Link>
            </div>
        </nav>
    );
}