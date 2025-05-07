const ChatTypingIndicator = () => {
  return (
    <div className="flex items-start  w-full  ">
      <div className=" rounded-lg px-2 py-3 shadow-sm bg-gray-200">
        <div className="flex space-x-2">
          <div
            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "600ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default ChatTypingIndicator;
