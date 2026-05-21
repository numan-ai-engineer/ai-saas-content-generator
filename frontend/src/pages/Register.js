import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Account Created Successfully 🚀");

    console.log(formData);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Create Account
      </h2>

      <p style={{ textAlign: "center", color: "gray" }}>
        Build your AI SaaS profile
      </p>

      <form onSubmit={handleSubmit}>

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Country</label>
        <input
          type="text"
          name="country"
          placeholder="Pakistan"
          value={formData.country}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter strong password"
          value={formData.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <div
          style={{
            background: "#f0fdf4",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          ✅ Password must contain:
          <br />
          • 8+ characters
          <br />
          • Uppercase & lowercase
          <br />
          • Number or symbol
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

export default Register;