import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { useRamdomQuotes } from "./useRamdomQuotes";
import type { ChatMessage } from "../interfaces/ChatMessage";
import { CONSTANTS } from "../utils/constans";
import { formatDate } from "../utils/dates";

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { getRandomQuotes } = useRamdomQuotes();
  const responseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  //welcome message
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: uuid(),
      text: CONSTANTS.DEFAULT_GREETING_MESSAGE,
      isAgent: true,
      time: formatDate(),
      showProductRecommendation: false,
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
    const userMessage = newMessage(text, false);
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const timerId = setTimeout(async () => {
      setLoading(false);

      if (text.toLowerCase() === CONSTANTS.PRODUCT_RECOMMENDATION_TRIGGER) {
        const agentMessage = newMessage("¡Show me some products!", true, true);
        setMessages((prev) => [...prev, agentMessage]);
      } else {
        const agentMessage = newMessage(await getRandomQuotes(), true);
        setMessages((prev) => [...prev, agentMessage]);
      }
      responseTimerRef.current = null;
    }, 3000);

    responseTimerRef.current = timerId;
  };

  return { messages, sendMessage, loading };
};

const newMessage = (
  text: string,
  isAgent: boolean,
  showProductRecommendation: boolean = false
) => {
  const newMessage: ChatMessage = {
    id: uuid(),
    text,
    isAgent,
    time: formatDate(),
    showProductRecommendation,
  };
  return newMessage;
};
