const BASE_URL = "http://localhost:5000";

export const loginUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    return await res.json();
  } catch (error) {
    return {
      success: false,
      message: "Server error"
    };
  }
};