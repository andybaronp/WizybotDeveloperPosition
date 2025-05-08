import { ChevronDown, ShoppingCart } from "lucide-react";
import logo from "../../assets/wizybot.webp";

interface ChatHeaderProps {
  toggleMinimize: () => void;
}

const ChatHeader = ({ toggleMinimize }: ChatHeaderProps) => {
  return (
    <div className="overflow-hidden">
      <div className="flex  flex-col gap-2 justify-between bg-gradient-to-r from-blue-950 from-80% to-blue-800 text-white p-2">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <img src={logo} alt="Wizybot" className="rounded-full" />
            </div>
            <div>
              <div className="font-medium text-[8px]">Chat with</div>
              <div className="text-xs">Wizybot</div>
            </div>
          </div>
          <div className="flex items-center">
            <ShoppingCart className="w-5 h-5 mr-2" />
            <ChevronDown
              className="w-5 h-5 cursor-pointer hover:scale-110 transition-all"
              onClick={toggleMinimize}
            />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="size-1 rounded-full bg-green-500/80 inline-block mr-1"></span>
          <p className="text-xs font-medium">We reply immediately!</p>
        </div>
      </div>
      {/* Wave Effect */}
      <div className="bg-gradient-to-r from-blue-950 from-80% to-blue-800 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          className="block"
          style={{ display: "block", marginBottom: "-5px" }}
        >
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,32L60,37.3C120,43,240,53,360,53.3C480,53,600,43,720,37.3C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ChatHeader;
