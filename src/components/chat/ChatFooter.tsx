import wizybot from "../../assets/wizybot.webp";
const ChatFooter = () => {
  return (
    <div className="py-0.5 px-4 text-center  text-gray-400 flex items-center justify-center bg-gray-100 gap-1">
      <a
        href="https://wizybot.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-xs"
      >
        Powered by Wizybot
      </a>
      <img src={wizybot} alt="Wizybot" className="w-4 h-4 rounded-full" />
    </div>
  );
};
export default ChatFooter;
