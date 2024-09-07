import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export const chat = async (req, res) => {
  const { prompt } = req.body;

  console.log("got a request");
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
  try {
    const text = response.text();
    res.status(200).send(text);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};
