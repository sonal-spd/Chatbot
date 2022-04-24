import React, {  useState,useEffect,useRef } from 'react';
import axios from "axios";
import Messages from "./Messages";
import { useVoice } from "./useVoice";
import { AiOutlineSend, AiFillAudio } from 'react-icons/ai';

// let speech;
// if (window.webkitSpeechRecognition) {
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   speech = new SpeechRecognition();
//   speech.continuous = true;
// } else {
//   speech = null;
// }

const Chat = props => {
  const [responses, setResponses] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  // const [isListening, setIsListening] = useState(false);
  const { text, isListening, listen, voiceSupported } = useVoice();
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, );

  // const listen = () => {
  //   setIsListening(!isListening);
  //   if (isListening) {
  //     speech.stop();
  //   } else {
  //     speech.start();
  //   }
  // };

  // useEffect(() => {
  //   speech.onresult = (event) => {
  //     currentMessage(event.results[event.results.length - 1][0].transcript);
  //     console.log(currentMessage)
  //     handleSubmit()
  //   };
  // }, []);
  useEffect(() => {
    if (text !== "") {
      const message = {
        text: text,
        isBot: false
      };
        setResponses(responses => [...responses, message]);
        handleMessageSubmit(message.text);
        setCurrentMessage("");
    }
  }, [text]);
  if (!voiceSupported) {
    return (
      <div className="app">
        <h1>
          Voice recognition is not supported by your browser, please re-try with
          a supported browser e.g. Chrome
        </h1>
      </div>
    );
  }
  const handleMessageSubmit = message => {
    console.log(message)
    axios
      .post("http://127.0.0.1:8000/predict/",{"sentence":message},
      {
        headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
        }
      })
      .then(response => {
        const responseData = {
          text: response.data !== "" ? response.data : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true
        };
        console.log(responseData)


        setResponses(responses => [...responses, responseData]);
        console.log(responses)
      })
      .catch(error => {
        const responseData = {
          text:  "Sorry, I can't get it. Can you please repeat once?",
          isBot: true
        };

        setResponses(responses => [...responses, responseData]);
       
      });
  };

  const handleMessageChange = event => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = event => {
    const message = {
      text: currentMessage,
      isBot: false
    };
      setResponses(responses => [...responses, message]);
      handleMessageSubmit(message.text);
      setCurrentMessage("");
    
  };
  const handle = event => {
    if (event.key == "Enter"){
      handleSubmit()
    }
    
  };

  return (
    <div className="chatSection "ref={messagesEndRef}>
      <div className="heading ">
        Chat with me 🤖
      </div>
      <div className="botContainer">
        <div className="messagesContainer">
          <Messages messages={responses} />
        </div>

        {/*The input section is 👇*/}
        <div className="inputSection">
          <input
            type="text"
            value={currentMessage}
            onChange={handleMessageChange}
            onKeyDown={handle}
            placeholder="Say something..."
            className="messageInputField"
          /><div className='flex float-left space-x-4 '>
          <AiOutlineSend size={30} onClick = {handleSubmit}/>
          <AiFillAudio size = {30} className={`microphone ${isListening && "isListening"}`}
            onClick={listen} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;