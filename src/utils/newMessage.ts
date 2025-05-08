import { v4 as uuid } from "uuid";
import { formatDate } from "./dates";
import type { ChatMessage } from "../interfaces/ChatMessage";

export const newMessage = (
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
