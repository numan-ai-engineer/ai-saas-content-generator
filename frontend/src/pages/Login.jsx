import React, { useState } from "react";
import axios from "axios";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", { username, password });
      onLogin(res.data.user);
      setMessage("Login successful!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-xl space-y-4 w-96">
        <h2 className="text-2xl font-bold text-purple-700 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
          required
        />
        <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition font-semibold">
          Login
        </button>
        {message && <p className="text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}