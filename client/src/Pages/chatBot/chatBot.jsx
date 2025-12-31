import { useEffect } from "react";
import { useChatbot } from "../../hooks/useChatbot";
import ChatHeader from "../../components/Chatbot/ChatHeader/ChatHeader";

function ChatBot() {
  // const { sendMessage, messages } = useChatbot();
  // console.log(messages)
  // useEffect(() => {
  //   sendMessage("what is tailwind").then((res) => console.log(res));
  // }, []); 

  return <div>
    <ChatHeader isBotTyping={true} />
  </div>;
}

export default ChatBot;
