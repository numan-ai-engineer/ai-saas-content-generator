import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-white border-r shadow-sm fixed top-0 left-0 p-6">

      <h1 className="text-2xl font-bold mb-10 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent cursor-pointer"
        onClick={() => navigate("/")}
      >
        AI SaaS
      </h1>

      <ul className="space-y-4">

        <li 
          className="text-gray-700 cursor-pointer hover:text-purple-600 transition"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </li>

        <li 
          className="text-gray-700 cursor-pointer hover:text-purple-600 transition"
          onClick={() => navigate("/tools")}
        >
          AI Tools
        </li>

        <li 
          className="text-gray-700 cursor-pointer hover:text-purple-600 transition"
          onClick={() => navigate("/history")}
        >
          History
        </li>

        <li 
          className="text-gray-700 cursor-pointer hover:text-red-500 transition"
          onClick={() => navigate("/login")}
        >
          Logout
        </li>

      </ul>

    </div>
  );
}