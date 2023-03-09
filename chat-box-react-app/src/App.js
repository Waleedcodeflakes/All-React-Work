import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="75e4fe04-5083-4d9f-9a28-60dfe6680525"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")} //147024
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
