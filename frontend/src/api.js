import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export const testBackend = async () => {
  try {
    const res = await API.get("/");
    return res.data;
  } catch (error) {
    console.error("Backend Error:", error);
    return "Error connecting to backend!";
  }
};