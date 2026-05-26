export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">

        <h1 className="text-3xl font-bold text-red-500">
          SociaLearn
        </h1>

        <div className="flex gap-8">
          <a href="#">Home</a>
          <a href="#">Feature</a>
          <a href="#">Community</a>
          <a href="#">Login</a>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-32">

        <h1 className="text-6xl font-bold text-white-500">
          Learn English Through People
        </h1>

        <div className="mt-8 flex gap-4">

          <button className="bg-pink-400 text-white px-6 py-3 rounded-xl hover:bg-pink-600">
            Get Started
          </button>

          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-700">
            Learn More
          </button>

        </div>

      </section>

      {/*feaures section*/}
      <section className="mt-40 px-10">

        <h2 className= "text-5xl font-bold text-center text-pink-900">
          Why sociaLearn?
        </h2>

        <p className="text-center text-gray-400 mt-4 text-lg">
          Learn through conversations, voices and social interactions.
        </p>

        <div className= "grid grid-col-3 gap-8 mt-16">

          {/* Card 1*/}
          <div className = "bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800">

            <div className = "text-5xl">
              🗣  ️
            </div>

            <h3 className= "text-2xl font-semibold mt-6">
              Voice conversations
            </h3>

            <p className= "text-gray-400 mt-4">
              Practice English naturally through short voice talks.
            </p>

          </div>

          {/* Card 2*/}
          <div className="big-zinc-900 p-8 rounded-2xl hover:bg-zinc-800">

            <div className="text-5xl">
              🤝
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Match your vibes
            </h3>

            <p className="text-gray-400 mt-4">
              Build connections and improve your English skills.
            </p>

          </div>

          {/* Card 3*/}
          <div className="big-zinc-900 p-8 rounded-2xl hover:bg-zinc-800">

            <div className="text-5xl">
              🌐
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Build Confidence
            </h3>

            <p className="text-gray-400 mt-4">
              Improve speaking confidence in a friendly social environment.
            </p>
          
          </div>

        </div>
      </section>

      {/* Community Section */}
<section className="mt-40 px-10 pb-20">

  <h2 className="text-5xl font-bold text-center text-pink-500">
    Meet The Community
  </h2>

  <p className="text-center text-gray-400 mt-4 text-lg">
    Practice English with people from different backgrounds.
  </p>

  <div className="grid grid-cols-3 gap-8 mt-16">

    {/* User Card 1 */}
    <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition duration-300">

      <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-2xl font-bold">
        A
      </div>

      <h3 className="text-2xl font-semibold mt-6">
        Ananya
      </h3>

      <p className="text-green-400 mt-2">
        Intermediate Speaker
      </p>

      <p className="text-gray-400 mt-4">
        Loves business talks and daily English conversations.
      </p>

    </div>

    {/* User Card 2 */}
    <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition duration-300">

      <div className="w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center text-2xl font-bold">
        R
      </div>

      <h3 className="text-2xl font-semibold mt-6">
        Rahul
      </h3>

      <p className="text-green-400 mt-2">
        Beginner Speaker
      </p>

      <p className="text-gray-400 mt-4">
        Practicing confidence through voice conversations.
      </p>

    </div>

    {/* User Card 3 */}
    <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition duration-300">

      <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-2xl font-bold">
        S
      </div>

      <h3 className="text-2xl font-semibold mt-6">
        Sanya
      </h3>

      <p className="text-green-400 mt-2">
        Advanced Speaker
      </p>

      <p className="text-gray-400 mt-4">
        Helping learners improve pronunciation and fluency.
      </p>

    </div>

  </div>

  </section>

  
  </main>
  );
}
