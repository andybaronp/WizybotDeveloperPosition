interface ChatBubbleProps {
  message: { text: string; time: string };
  isAgent: boolean;
}

const ChatBubble = ({ message, isAgent }: ChatBubbleProps) => {
  return (
    <div className={`flex ${isAgent ? "justify-start" : "justify-end"} `}>
      <div
        className={`${
          isAgent ? "bg-gray-200 " : "bg-cyan-600/60 "
        } rounded-lg py-2 px-3 shadow-sm text-gray-900 max-w-[90%] break-words`}
      >
        <p className="text-sm ">{message.text}</p>
        <p className="text-[10px] font-medium text-gray-600  ">
          {message.time}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
