import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-8 py-5 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold">AI SaaS</div>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 font-semibold">
        <li className="hover:text-yellow-300 cursor-pointer transition">Home</li>
        <li className="hover:text-yellow-300 cursor-pointer transition">Dashboard</li>
        <li className="hover:text-yellow-300 cursor-pointer transition">AI Tool</li>
        <li className="hover:text-yellow-300 cursor-pointer transition">Login</li>
      </ul>
    </nav>
  );
}