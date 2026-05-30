export default function LoginPage() {
    return (
        <main className= "min-h-screen bg-black flex items-center justify-center px-6">
           
            <div className="big-zinc-900 p-20 rounded-2xl w-full max-w-md">

                <h1 className="text-4xl font-bold text-pink-500 text-center">
                    Welcome Back
                </h1>

                <p className="text-gray-400 text-center mt-3">
                    Login to continue your learning journey.
                </p>

                <form className="mt-8 flex flex-col gap-5">

                    <input 
                        type="email"
                        placeholder="Email"
                        className="bg-zinc-800 text-gray-400 placeholder:text-gray-500 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-zinc-800 text-gray-400 placeholder:text-gray-500 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    <button
                        className="bg-pink-500 hover:bg-pink-600 transition duration-300 text-white p-4 rounded-xl font-semibold"
                    >
                        Login
                    </button>

                </form>
            </div>

        </main>
    );
}