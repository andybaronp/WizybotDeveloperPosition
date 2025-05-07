import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
const ChatWindow = () => {
  return (
    <div className="relative     px-2 w-full">
      <div className="absolute bottom-5    right-4 sm:right-5  ">
        <div className="flex flex-col h-[720px] max-w-[370px]    bg-gray-50   shadow-md rounded-xl overflow-hidden border border-gray-200">
          <ChatHeader />
          <ChatMessages />
          <ChatInput />
          <ChatFooter />
        </div>
      </div>
    </div>
  );
};
export default ChatWindow;
