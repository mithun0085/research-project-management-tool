import "./AppChat.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import React from 'react';

const socket = io.connect("http://localhost:5000");

function AppChat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="AppChat">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Live Group Chat</h3>
          <input
            type="text"
            placeholder="Visible Nick Name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Group ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default AppChat;
