import React, { useState } from "react";
import AnimatedTextBox from "../components/AnimatedTextBox";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const handleInputEnter = (e) => {
    // console.log(e.code);

    if (e.code === "Enter") {
      joinRoom();
    }
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room Id and username is required");
      return;
    }

    // redirect to codeeditor page
    navigate(`/codeeditor/${roomId}`, {
      replace: true,

      //   passing parament to other page
      state: {
        username,
      },
    });
  };

  const createNewRoom = (e) => {
    e.preventDefault();

    const id = uuidV4();
    setRoomId(id);

    toast.success("Created a new room");
  };

  return (
    <>
      <div className="homePageWrapper">
        <div className="formWrapper">
          <h1 className="homePageLogo">
            <span>Code Sync</span> Editor
          </h1>
          <h4 className="mainLabel">Paste invitation ROOM ID</h4>
          <div className="inputGroup">
            <AnimatedTextBox
              label={"Room Id"}
              textType="text"
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}
              onKeyUp={handleInputEnter}
            />
            <AnimatedTextBox
              label={"Username"}
              textType="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              onKeyUp={handleInputEnter}
            />
            <button className="btn joinBtn" onClick={joinRoom}>
              Join
            </button>
            <span className="createInfo">
              If you don't have an invite then create &nbsp;
              <a onClick={createNewRoom} href="" className="createNewBtn">
                new room
              </a>
            </span>
          </div>
        </div>
        <footer>
          <h4>
            Created with ❤️ &nbsp; by &nbsp;
            <a href="https://github.com/mg143pavankumar">Mistry Pavan Kumar</a>
          </h4>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
