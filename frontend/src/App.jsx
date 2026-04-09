import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AITool from "./pages/AITool";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="font-sans">
      <Navbar />
      {!user ? <Login onLogin={setUser} /> : (
        <>
          <Landing />
          <Dashboard user={user} />
          <AITool user={user} setUser={setUser} />
        </>
      )}
    </div>
  );
}

export default App;