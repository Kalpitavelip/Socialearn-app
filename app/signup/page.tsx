"use client";

import Link from "next/link";

export default function Signup() {
    return (
        <main className= "min-hscreen bg-black text-white flex items-center justify-center px-6">
            <div className= "w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-lg">
                <h1 className= "text-3xl font-bold text-center md-2">
                    Create Your Account
                </h1>

                <p className="text-gray-400 text-center mb-6">
                    Join Socialearn and start learning, connecting, and growing.
                </p>

                <form className= "space-y-4">
                    <div>
                        <label className="block md-2">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2">Confirm Password</label>
                        <input
                            type=""
                        />
                    </div>

                    <button 
                        type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                        Create Account
                    </button>

                </form>

                <p>
                    Already have an account?{" "}
                    <Link href="/login" className="text-pink-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </main>

    );
}

