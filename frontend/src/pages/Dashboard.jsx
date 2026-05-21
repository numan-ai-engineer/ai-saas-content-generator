import React from "react";

function Dashboard() {
  const user = {
    name: "Waqar Ali",
    email: "waqar@example.com",
    country: "Pakistan",
    status: "Active",
    joined: "May 2026",
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "30px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        🚀 User Dashboard
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          marginTop: "30px",
        }}
      >
        <h2>{user.name}</h2>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Country:</strong> {user.country}
        </p>

        <p>
          <strong>Status:</strong> {user.status}
        </p>

        <p>
          <strong>Joined:</strong> {user.joined}
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Dashboard;