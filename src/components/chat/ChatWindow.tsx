import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import logo from "../../assets/wizybot.webp";
import { useState } from "react";
const ChatWindow = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(true);
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="relative px-2 w-full">
      <div className="absolute bottom-5 right-4 sm:right-5">
        {isMinimized ? (
          <div className="flex flex-col items-center cursor-pointer hover:scale-110 transition-transform delay-100 ">
            <div className="flex justify-end w-full">
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-600 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-cyan-500"></span>
              </span>
            </div>

            <div
              className="-mt-3 w-12 h-12 rounded-full flex items-center justify-center  "
              onClick={toggleMinimize}
            >
              <img
                src={logo}
                alt="Wizybot"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col  not-last:  h-[720px] max-w-[370px] bg-gray-50 shadow-md rounded-xl overflow-hidden border border-gray-200">
            <ChatHeader toggleMinimize={toggleMinimize} />
            <ChatMessages />
            <ChatInput />
            <ChatFooter />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
