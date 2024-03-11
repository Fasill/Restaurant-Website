import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import axios from 'axios';

import style from './chat.module.css';
import { updateRight } from '../../store/StateStore.jsx';
import SendIcon from '@mui/icons-material/Send';
import goldenFlower from '../../assets/images/goldenFlower.png';

import {Backedlink} from '../../utils/Backendlink.jsx';

export default function RightDrawer() {
  const [userMessage, setUserMessage] = useState('');
  const [botMessages, setBotMessages] = useState([]);
  const [isLoading,setIsLoading] = useState(false); 

  const right = useSelector(state => state.right);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(right, "right");
  }, [right]);

  const handleHamburgerClick = () => {
    console.log("hello");
    dispatch(updateRight(false));
  }

  const handleSendClick = async () => {
    setIsLoading(true)
    if (userMessage.trim() !== '') {
      // Add user message to the chat UI
      setBotMessages(prevMessages => [...prevMessages, { sender: 'user', message: userMessage }]);
      
      // Send user message to the server or API
      try {
        console.log("sending")
        const response = await axios.post(Backedlink, { "prompt": userMessage });
        console.log("reciveng")
        console.log(response.message)
        const botResponse = response.data.message; 
     
        setBotMessages(prevMessages => [...prevMessages, { sender: 'bot', message: botResponse }]);
      } catch (error) {
        console.error('Error sending message:', error);
      }

      setUserMessage('');
    }
    setIsLoading(false)

  }

  return (
    <div>
      <Drawer anchor="right" open={right} onClose={handleHamburgerClick}>
        <div className={style.wrapper}>
          <div className={style.chatContainer}>
            <div className={style.flower}>
              <img className={style.img1} src={goldenFlower} alt="Golden Flower" />
            </div>
            <div className={style.header}>Chat Bot</div>

            <div className={style.playground}>
              {botMessages.map((msg, index) => (
                <div key={index} className={msg.sender === 'user' ? style.userWrapper : style.botWrapper}>
                  {msg.message}
                </div>
              ))}
            </div>

            <div className={style.inputWrapper}>
              <input type='text' value={userMessage} onChange={e => setUserMessage(e.target.value)} />
              <div className={style.sendButton} onClick={handleSendClick}>
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
