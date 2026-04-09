import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 text-white py-20 shadow-lg rounded-b-3xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Create Amazing Content with AI</h1>
          <p className="text-lg mb-8 drop-shadow-md">
            Generate high-quality articles, scripts, descriptions, and more with just one click.
          </p>
          <button className="bg-white text-purple-600 font-bold px-8 py-3 rounded-full hover:scale-105 transform transition shadow-lg">
            Try Free Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          
          <div className="bg-gradient-to-tr from-purple-400 to-pink-400 p-8 rounded-2xl shadow-xl hover:scale-105 transform transition">
            <h2 className="text-2xl font-bold mb-2 text-white">AI Content Generator</h2>
            <p className="text-white">Generate SEO-optimized content instantly.</p>
          </div>

          <div className="bg-gradient-to-tr from-pink-400 to-yellow-400 p-8 rounded-2xl shadow-xl hover:scale-105 transform transition">
            <h2 className="text-2xl font-bold mb-2 text-white">Multi-Tools Support</h2>
            <p className="text-white">Blog, Emails, YouTube Scripts, Captions & more.</p>
          </div>

          <div className="bg-gradient-to-tr from-yellow-400 to-green-400 p-8 rounded-2xl shadow-xl hover:scale-105 transform transition">
            <h2 className="text-2xl font-bold mb-2 text-white">User Dashboard</h2>
            <p className="text-white">Track history, credits & saved content.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center font-semibold">
        © 2026 AI SaaS – All rights reserved.
      </footer>
    </div>
  );
}