export const generateContent = (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  const content = `This is a generated content based on your prompt: "${prompt}"`;
  res.json({ success: true, content });
};