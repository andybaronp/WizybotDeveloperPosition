import { Send } from "lucide-react";
import { useState } from "react";

const ChatInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };
  const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 140) return;
    setMessage(e.target.value);
  };

  return (
    <div className="p-3 border-t border-gray-300">
      <form
        className="flex items-center bg-white rounded-full border border-gray-300 px-4 py-2"
        onSubmit={handleSubmit}
      >
        <span className="text-gray-400">
          <div className="w-5 h-5 text-gray-400">😊</div>
        </span>
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 outline-none bg-transparent text-sm mx-2"
          value={message}
          onChange={onMessageChange}
        />
        <div className="text-xs mr-2 text-gray-400">{message.length}/140</div>
        <button
          className="bg-blue-950 text-white rounded-full p-2 cursor-pointer "
          type="submit"
        >
          <Send className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};
export default ChatInput;
