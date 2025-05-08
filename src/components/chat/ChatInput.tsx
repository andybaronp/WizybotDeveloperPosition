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
    <div className=" border-t border-gray-300">
      <form
        className="flex items-center justify-center bg-gray-100 px-2 py-2"
        onSubmit={handleSubmit}
      >
        <div className="size-6 text-gray-400">😊</div>

        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 outline-none h-6   mx-2 bg-transparent"
          value={message}
          onChange={onMessageChange}
        />
        <div className="text-[10px] mr-2 text-gray-400">
          {message.length}/140
        </div>
        <button
          className="bg-blue-950 text-white rounded-full p-1 cursor-pointer "
          type="submit"
        >
          <Send className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};
export default ChatInput;
