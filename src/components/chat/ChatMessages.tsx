import { useEffect, useRef } from "react";
import type { ChatMessage } from "../../interfaces/ChatMessage";
import ChatBubble from "./ChatBubble";
import ChatTypingIndicator from "./ChatTypingIndicator";
import CarouselProducts from "../CarouselProdcuts";

const ChatMessages = ({
  messages,
  loading,
}: {
  messages: ChatMessage[];
  loading: boolean;
}) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 "
      id="chat-window"
    >
      {messages.map((message, index) =>
        message.showProductRecommendation ? (
          <div key={message.id} className="flex justify-start w-full">
            <div className="rounded-lg shadow-sm w-full">
              <CarouselProducts key={message.id} />
            </div>
          </div>
        ) : (
          <ChatBubble key={index} message={message} isAgent={message.isAgent} />
        )
      )}
      {loading && <ChatTypingIndicator />}
      <div ref={endOfMessagesRef} />
    </div>
  );
};
export default ChatMessages;
