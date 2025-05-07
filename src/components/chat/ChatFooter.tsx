import wizybot from "../../assets/wizybot.webp";
const ChatFooter = () => {
  return (
    <div className="py-0.5 px-4 text-center text-xs text-gray-400 flex items-center justify-center bg-gray-100 gap-1">
      Powered by Wizybot
      <img src={wizybot} alt="Wizybot" className="w-4 h-4 rounded-full" />
    </div>
  );
};
export default ChatFooter;
