import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import axios from "axios";
import style from "./chat.module.css";
import { updateRight } from "../../store/StateStore.jsx";
import SendIcon from "@mui/icons-material/Send";
import goldenFlower from "../../assets/images/goldenFlower.png";
import CloseIcon from "@mui/icons-material/Close";
import { backendlink } from "../../utils/Backendlink.jsx";

export default function RightDrawer() {
  const [userMessage, setUserMessage] = useState("");
  const [botMessages, setBotMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isfirst, setIsfirst] = useState(false);
  const right = useSelector((state) => state.right);
  const dispatch = useDispatch();

  const handleHamburgerClick = () => {
    dispatch(updateRight(false));
  };
  const handleSendClick = async () => {
    if (!isLoading && userMessage.trim() !== "") {
      await sendMessage(userMessage);
      setUserMessage("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (right && !isfirst) {
        setIsfirst(true);
        setIsLoading(true);

        try {
          const response = await axios.post(`${backendlink}/chat`, {
            prompt:
              "give me a 1 line greeting as a grilli resturant chat bot and your name is chefbot note: make it short and if they askyou your name answer grillis restoerant chefbot and dont ever say 'I apologize for the lengthy response earlier. Here's a concise greeting:'",
          });
          const botResponse = response.data;

          setBotMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", message: botResponse },
          ]);
          setTimeout(() => {
            const playgroundDiv = document.querySelector(
              `.${style.playground}`
            );
            if (playgroundDiv) {
              playgroundDiv.scrollTop = playgroundDiv.scrollHeight;
            }
          }, 4);
        } catch (error) {
          console.log("");

          // console.error("Error sending message:", error);
        }

        setIsLoading(false);
      }
    };
    fetchData();
  }, [right]);

  const sendMessage = async (message) => {
    setIsLoading(true);
    setBotMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", message },
    ]);
    try {
      const response = await axios.post(`${backendlink}/chat`, {
        prompt: message,
      });
      const botResponse = response.data;
      setBotMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", message: botResponse },
      ]);
      setTimeout(() => {
        const playgroundDiv = document.querySelector(`.${style.playground}`);
        if (playgroundDiv) {
          playgroundDiv.scrollTop = playgroundDiv.scrollHeight;
        }
      }, 4);
    } catch (error) {
      console.log("");
      // console.error("Error sending message:", error);
    }
    setUserMessage("");
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (!isLoading & (e.key === "Enter")) {
      handleSendClick();
      setUserMessage("");
    }
  };

  return (
    <div>
      <Drawer anchor="right" open={right} onClose={handleHamburgerClick}>
        <div className={style.wrapper}>
          <div className={style.chatContainer}>
            <div className={style.titlewraper}>
              <div className={style.avatar}>CB</div>
              <div className={style.header}>ChefBot</div>
              <div className={style.close}>
                <div onClick={handleHamburgerClick}>
                  <CloseIcon
                    className={style.closeIcon}
                    sx={{ fontSize: "18px" }}
                  />
                </div>
              </div>
            </div>
            <div className={style.playground}>
              {botMessages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.sender === "user" ? style.userWrapper : style.botWrapper
                  }
                >
                  {msg.message}
                </div>
              ))}
            </div>
            <div className={style.inputWrapper}>
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <div
                className={style.sendButton}
                onClick={handleSendClick}
                disabled={!isLoading}
              >
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
