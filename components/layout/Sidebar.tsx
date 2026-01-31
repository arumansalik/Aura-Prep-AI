import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r px-6 py-8">
            <h1 className="text-xl font-semibold tracking-tight">
                Aura<span className="font-bold">PrepAI</span>
            </h1>

            <nav className="mt-10 space-y-4 text-sm">
                <NavItem label="Dashboard" href="/dashboard" />
                <NavItem label="Generate Answer" href="/generate" />
                <NavItem label="Saved Answers" href="#"/>
                <NavItem label="Profile" href="/profile" />
            </nav>
        </aside>
    )
}

function NavItem({ label, href} : { label: string; href: string }) {
            return (
                <Link href={href} className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-black">
                    {label}
                </Link>
            );
}