"use client";

export function LoginForm() {
    return (
        <form className="space-y-6">
            <Input label="Email" type="Email" placeholder="Enter your email" />
            <Input label="Password" type="Password" placeholder="Enter your password" />

            <button className="w-full py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition duration-200 ease-in-out" >
                Sign in
            </button>

            <p className="text-center text-sm text-gray-600">
                Dont have an account?{" "}
                <a href="/auth/register" className="text-blue-600 font-medium">Create one</a>
            </p>
        </form>
    )
}

function Input({
    label,
    ...props
} : {
    label: string;
    type?: string;
    placeholder?: string;
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">{label}</label>
            <input {...props} className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    )
}