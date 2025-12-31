import { useState } from "react";
import axios from "axios";
import popSound from "@/assets/sounds/pop.mp3";
import notificationSound from "@/assets/sounds/notification.mp3";

const popAudio = new Audio(popSound);
popAudio.volume = 0.2;

const notificationAudio = new Audio(notificationSound);
notificationAudio.volume = 0.2;

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const sendMessage = async (prompt) => {
    setMessages((prev) => [...prev, { human: prompt }]);
    setIsBotTyping(true);
    setError("");
    popAudio.play();
    try {
      const { data } = await axios.post(
        "http://localhost:5500/api/chat",
        {
          prompt,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      notificationAudio.play();

      // => Success: Update the specific message with the AI response
      setMessages((prev) => {
        // Clone the array to avoid mutation
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;

        // => Safety check to ensure we are updating the correct message
        if (lastIndex >= 0) {
          newMessages[lastIndex] = {
            ...newMessages[lastIndex],
            model: data.message,
          };
        }
        return newMessages;
      });
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Something went wrong";
      console.error("Chat Error:", errorMessage);
      console.log(err);
      setError(errorMessage);
    } finally {
      setIsBotTyping(false);
    }
  };

  const retryLastMessage = () => {
    if (messages.length === 0) return;

    // => Get the last prompt
    const lastPrompt = messages[messages.length - 1].human;
    setMessages((prev) => prev.slice(0, -1));

    sendMessage(lastPrompt);
  };

  return {
    messages,
    isBotTyping,
    error,
    sendMessage,
    retryLastMessage,
  };
};
