import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    setResult(text);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI SaaS Platform</h1>

      <input
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={handleClick}>Show Text</button>

      <h3>{result}</h3>
    </div>
  );
}

export default App;