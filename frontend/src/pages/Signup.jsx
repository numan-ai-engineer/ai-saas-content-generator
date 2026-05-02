import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", form);
      setMessage(res.data.message);
      setForm({ username: "", firstName: "", lastName: "", password: "", confirmPassword: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {message && <p className="mb-4 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border p-2 rounded"/>
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 rounded"/>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="border p-2 rounded"/>
        <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;