import React, { useState, useEffect } from 'react';
import Toolbar from '../../components/toolbar/Toolbar.jsx';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';
import { useSelector } from 'react-redux';
import Drawer from '../../components/drawer/LeftDrawer.jsx' 
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import RightDrawer from '../../components/drawer/RightDrawer.jsx';
import { useDispatch } from 'react-redux';
import { updateRight } from '../../store/StateStore.jsx';
import TopNotch from '../ TopNotch/ TopNotch.jsx';
import Home from '../home/Home.jsx'

const layout = () => {

  const value = useSelector(state => state.value);

  useEffect(()=>{
    console.log(value,"Value2")
  },[value])

  const dispatch = useDispatch();

  const handleChatBot = ()=>{
    dispatch(updateRight(true));
  }


//  ====================
const [isShaking, setIsShaking] = useState(false);

// useEffect hook to trigger shaking every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setIsShaking(prevState => !prevState);
  }, 3000);

  return () => clearInterval(interval);
}, []);
// =====================
 
  return (
    <body className={`${style.layout}`}> 
        <Toolbar />
      <div className={style.pages}>
        <div className = {style.homepage}>
          <Home/>
        </div>
        <div className = {style.TopNotch}>
          <TopNotch/>
        </div>
        {/* <Outlet/> */}
        <Drawer/>
        <RightDrawer/>
        <div className={`${style.chatBot} ${isShaking?style.shake:''}`} onClick={handleChatBot}>
          <MarkUnreadChatAltIcon className= {style.MarkUnreadChatAltIcon} />
        </div>
      </div>
    </body>
  );
}

export default layout;