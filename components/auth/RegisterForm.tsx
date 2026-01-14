"use client";

export default function RegisterForm() {
    return (
        <form className="space-y-5">
            <Input label="Full Name" placeholder="Enter your name" />
            <Input label="Email" placeholder="Enter your email" />
            <Input label="Register Number" placeholder="Anna Univ Reg No" />
            <Input label="Password" type="passowrd" placeholder="Enter your password" />
            <Input label="Confirm Password" type="password" placeholder="Enter your password" />

            <button className="w-full py-3 rounded-xl bg-black text-white font-medium hover:opacity-90 transition">Create Account</button>

            <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/auth/login" className="text-blue-600 font-medium">Sign in</a>
            </p>
        </form>
    )
}

function Input({
    label,
    ...props
}: {
    label: string;
    type?: string;
    placeholder?: string;
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1">
                {label}
            </label>
            <input {...props} className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    )
}