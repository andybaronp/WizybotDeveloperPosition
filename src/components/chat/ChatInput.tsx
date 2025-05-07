import { Send } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="p-3 border-t border-gray-300">
      <form className="flex items-center bg-white rounded-full border border-gray-300 px-4 py-2">
        <span className="text-gray-400">
          <div className="w-5 h-5 text-gray-400">😊</div>
        </span>
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 outline-none bg-transparent text-sm mx-2"
        />
        <button
          className="bg-blue-950 text-white rounded-full p-2 "
          type="submit"
        >
          <Send className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};
export default ChatInput;
