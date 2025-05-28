// src/ai/askOpenAI.ts

export async function askOpenAI(prompt: string): Promise<string> {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer YOUR_API_KEY`, // Replace with your actual API key
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("OpenAI API Error:", data.error);
      return `Error: ${data.error.message}`;
    }

    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    } else {
      console.error("Unexpected API response structure:", data);
      return "I'm sorry, I couldn't process your request.";
    }
  } catch (error) {
    console.error("Error communicating with OpenAI API:", error);
    return "An error occurred while contacting the AI service.";
  }
}
