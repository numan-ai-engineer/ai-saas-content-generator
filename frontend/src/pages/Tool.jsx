import { useState } from "react";
import { testBackend } from "../api";

export default function Tool() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await testBackend(); // backend call
      setResult(res.content || res);
    } catch (err) {
      setResult("Error generating content");
    }
  };

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <textarea
        placeholder="Type your content idea here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "80%", height: "100px", padding: "10px" }}
      />
      <br />
      <button
        onClick={handleGenerate}
        style={{
          marginTop: "15px",
          padding: "12px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Generate Content
      </button>

      {result && (
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>
          <h3>Generated Content:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}