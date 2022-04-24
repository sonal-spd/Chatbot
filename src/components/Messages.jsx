import React,{useEffect,useRef} from 'react'
import "./style.css";
import Message from "./Message";


const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);
  console.log("Messages: " + messages);
  return (
    <div className="messagesSection " ref={messagesEndRef}>
      {messages.map(message => {
        return (
          <div className="messagesContainer" >
            <Message message={message} />
            
          </div>
        );
      })}
    </div>
  );
};

export default Messages;