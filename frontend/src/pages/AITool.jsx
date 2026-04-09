import React, { useState } from "react";
import axios from "axios";

export default function AITool({ user, setUser }) {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (user.credits <= 0) return alert("No credits left!");
    setOutputText(`Generated Content for: "${inputText}"`);

    // Save content in backend
    const res = await axios.post("http://localhost:5000/api/save", { username: user.username, content: inputText });
    setUser({ ...user, credits: res.data.credits, history: res.data.history });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">AI Content Generator</h1>
      <p className="text-center font-semibold mb-4">Credits left: {user.credits}</p>
      <form onSubmit={handleGenerate} className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl space-y-4">
        <textarea
          className="w-full h-32 p-4 border rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="Type something..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition font-semibold">
          Generate
        </button>
      </form>
      {outputText && (
        <div className="max-w-3xl mx-auto mt-6 bg-gradient-to-tr from-purple-400 to-pink-400 p-6 rounded-3xl shadow-xl text-white">
          <h2 className="text-xl font-bold mb-2">Generated Output:</h2>
          <p className="whitespace-pre-line">{outputText}</p>
        </div>
      )}
    </div>
  );
}