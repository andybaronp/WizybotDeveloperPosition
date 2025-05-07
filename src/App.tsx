import ChatWindow from "./components/chat/ChatWindow";
import AppLoyout from "./components/layout/AppLoyout";
import Header from "./components/layout/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <AppLoyout>
      <Header />
      <MainContent />
      <ChatWindow />
    </AppLoyout>
  );
}

export default App;
