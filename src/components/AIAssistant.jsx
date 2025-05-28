import { useState } from "react";
import { askOpenAI } from "../ai/askOpenAI";
import { motion } from "framer-motion";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, `You: ${input}`]);
    const reply = await askOpenAI(input);
    setMessages((prev) => [...prev, `Bot: ${reply}`]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="w-80 bg-white rounded-xl shadow-lg p-4 border border-gray-300"
        >
          <div className="text-lg font-bold mb-2">🤖 Drone Assistant</div>
          <div className="h-40 overflow-y-auto text-sm bg-gray-50 p-2 mb-2 rounded">
            {messages.map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about drones..."
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <button
            onClick={handleSend}
            className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
          >
            Send
          </button>
          <button
            onClick={() => setOpen(false)}
            className="text-xs mt-1 text-gray-500 hover:text-red-500"
          >
            Close
          </button>
        </motion.div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          🤖
        </button>
      )}
    </div>
  );    
}