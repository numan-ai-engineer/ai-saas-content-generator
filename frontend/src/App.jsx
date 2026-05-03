// src/App.jsx
// App.jsx
import Signup from "./pages/Signup";

// Add a button in sidebar:
<button onClick={() => setPage("signup")} className="hover:bg-gray-800 p-2 rounded">
  Sign Up
</button>

// And render page:
{page === "signup" && <Signup />}
import React, { useState } from "react";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AITool from "./pages/AITool";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  import Landing from "./pages/Landing";

function App() {
  return <Landing />;
}

export default App;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col bg-black text-white w-60 p-6">
        <h1 className="text-3xl font-bold mb-10">AI SaaS</h1>
        <nav className="flex flex-col gap-4">
          <button onClick={() => setPage("home")} className="hover:bg-gray-800 p-2 rounded">
            Home
          </button>
          <button onClick={() => setPage("dashboard")} className="hover:bg-gray-800 p-2 rounded">
            Dashboard
          </button>
          <button onClick={() => setPage("ai")} className="hover:bg-gray-800 p-2 rounded">
            AI Tool
          </button>
          {!user ? (
            <button onClick={() => setPage("login")} className="hover:bg-gray-800 p-2 rounded">
              Login
            </button>
          ) : (
            <button onClick={() => setUser(null)} className="hover:bg-gray-800 p-2 rounded">
              Logout
            </button>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        {page === "home" && <Landing />}
        {page === "dashboard" && user && <Dashboard user={user} />}
        {page === "ai" && user && <AITool user={user} />}
        {page === "login" && !user && <Login setUser={setUser} />}
        {!user && (page === "dashboard" || page === "ai") && (
          <p className="text-red-500 font-bold">Please login to access this page</p>
        )}
      </div>
    </div>
  );
}

export default App;