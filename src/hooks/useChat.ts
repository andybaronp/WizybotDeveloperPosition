import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { useRamdomQuotes } from "./useRamdomQuotes";
interface ChatMessage {
  id: string;
  text: string;
  isAgent: boolean;
  time: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { quotes, setGetRandomQuote } = useRamdomQuotes();
  const responseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  //welcome message
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: uuid(),
      text: "Hello there! Do you need any help?",
      isAgent: true,
      time: new Date().toLocaleTimeString(),
    };
    setMessages([welcomeMessage]);
    return () => {
      if (responseTimerRef.current) {
        clearTimeout(responseTimerRef.current);
      }
    };
  }, []);

  //clear timer
  useEffect(() => {
    return () => {
      if (responseTimerRef.current) {
        clearTimeout(responseTimerRef.current);
      }
    };
  }, []);

  const sendMessage = (text: string) => {
    //clear timer
    if (responseTimerRef.current) {
      clearTimeout(responseTimerRef.current);
      responseTimerRef.current = null;
    }

    const newMessage: ChatMessage = {
      id: uuid(),
      text,
      isAgent: false,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setLoading(true);

    const timerId = setTimeout(() => {
      setLoading(false);
      if (text.toLowerCase() !== "horla") {
        setGetRandomQuote(true);
      }
      const agentText =
        text.toLowerCase() === "horla" ? "hola como vas" : quotes;
      const agentMessage: ChatMessage = {
        id: uuid(),
        text: agentText,
        isAgent: true,
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, agentMessage]);
      responseTimerRef.current = null;
    }, 3000);

    responseTimerRef.current = timerId;
  };

  return { messages, sendMessage, loading };
};
