"use client";
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:3002");

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    fetchMessages();

    return () => {
      socket.off("newMessage");
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:3001/messages", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      try {
        // const token = localStorage.getItem('token');
        // const decodedToken = JSON.parse(atob(token.split('.')[1]));
        // const userId = decodedToken.sub;
        const userId = sessionStorage.getItem("idUser");
        socket.emit("sendMessage", { userId, content: inputMessage });
        setInputMessage("");
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };
  {
    console.log(messages);
  }
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg: any) => (
          <div className="min-w-min flex gap-2 items-center">
            <div className="flex justify-center flex-col items-center">
              <img
                className="h-16 w-16 rounded-[50%]"
                src={msg.avatarUrl}
                alt="user avatar"
              />
              <span className="font-bold">{msg.username} </span>
            </div>
            <div
              key={msg.id}
              className="bg-white p-3 rounded-lg shadow w-fit h-[50%]"
            >
              <p className="max-w-min">{msg.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-white">
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 p-2 border rounded-l"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}