import { useState, useEffect } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "../../components/AiChat/usless.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

function AiBot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, How can I help you today?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    // Fetch the API key when the component mounts
    setApiKey(import.meta.env.VITE_API_KEY || "");
  }, []); // Add an empty dependency array to run the effect only once

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Explain things like you're talking to a software professional with 2 years of experience.",
        },
        ...apiMessages,
      ],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiRequestBody),
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error(
            `Unauthorized: Please check your API key and permissions.`
          );
        } else {
          throw new Error(
            `Failed to fetch response from OpenAI API: ${response.status} - ${response.statusText}`
          );
        }
      }

      const data = await response.json();

      setMessages([
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: "ChatGPT",
        },
      ]);

      setIsTyping(false);
    } catch (error) {
      console.error("Error fetching response from OpenAI API:", error.message);
      // Handle error, e.g., display an error message to the user
      setIsTyping(false);
    }
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "8px",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "800px",
          width: "800px",
        }}
      >
        <MainContainer style={{ border: "2px solid #9bd3d5" }} className="test">
          <ChatContainer className="test">
            <MessageList
              className="test"
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="CV-Creator is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default AiBot;
