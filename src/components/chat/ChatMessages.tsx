import ChatBubble from "./ChatBubble";
import ChatTypingIndicator from "./ChatTypingIndicator";

const messages = [
  {
    text: "Hello there! Do you need any help?",
    time: "10:13AM | Jan 1",
    isAgent: true,
  },
  {
    text: "Hey, do you have shipping to Medellin?",
    time: "10:14AM | Jan 1",
    isAgent: false,
  },
  {
    text: "Yes, we have shipping to Medellin. It takes 2-3 days. Do you want to buy something?",
    time: "10:15AM | Jan 1",
    isAgent: true,
  },
  {
    text: "I want to buy a coffee mug. Do you have any?",
    time: "10:16AM | Jan 1",
    isAgent: false,
  },
  {
    text: "Yes, we have coffee mugs. It costs 20 USD. Do you want to buy it?",
    time: "10:17AM | Jan 1",
    isAgent: true,
  },
  {
    text: "Yes, I want to buy it. How can I pay it?",
    time: "10:18AM | Jan 1",
    isAgent: false,
  },
  {
    text: "You can pay with credit card or PayPal. Do you have a promo code?",
    time: "10:19AM | Jan 1",
    isAgent: true,
  },
  {
    text: "No, I don't have a promo code. Can I get one?",
    time: "10:20AM | Jan 1",
    isAgent: false,
  },
];

const ChatMessages = () => {
  return (
    <div className="flex-1 p-3 overflow-y-auto space-y-3">
      {messages.map((message, index) => (
        <ChatBubble key={index} message={message} isAgent={message.isAgent} />
      ))}
      <ChatTypingIndicator />
    </div>
  );
};
export default ChatMessages;
