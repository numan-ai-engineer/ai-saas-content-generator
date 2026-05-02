// src/pages/Landing.jsx
import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-white p-10 rounded shadow-md">
        <h2 className="text-5xl font-bold mb-4">Create Amazing Content with AI</h2>
        <p className="mb-6 text-gray-700 text-lg">
          Generate high-quality articles, scripts, descriptions, and more with just one click.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded text-lg font-semibold">
          Try Free Demo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">AI Content Generator</h3>
          <p>Generate SEO-optimized content instantly.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">Multi-Tools Support</h3>
          <p>Blog, Emails, YouTube Scripts, Captions & more.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">User Dashboard</h3>
          <p>Track history, credits & saved content.</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;