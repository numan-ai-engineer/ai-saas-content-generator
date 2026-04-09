import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-700 drop-shadow-md">
        Welcome to AI SaaS Dashboard
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-tr from-purple-400 to-pink-400 p-6 rounded-2xl shadow-xl hover:scale-105 transform transition text-white font-semibold">
          User History
        </div>
        <div className="bg-gradient-to-tr from-yellow-400 to-green-400 p-6 rounded-2xl shadow-xl hover:scale-105 transform transition text-white font-semibold">
          Credits & Stats
        </div>
      </div>
    </div>
  );
}