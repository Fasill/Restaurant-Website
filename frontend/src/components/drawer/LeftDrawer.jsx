import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';

import style from './drawer.module.css'
import { info } from '../../store/StateStore.jsx';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/images/logo.svg';


export default function LeftDrawer() {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(value, "Value");
  }, [value]);

  const handleHamburgerClick = () => {
    console.log("hello");
    dispatch(info(false));
  }



  return (
    <div>
      <Drawer open={value} onClose={handleHamburgerClick}>
        <div className={style.wrapper}>
          <div className={style.close} >
            <div onClick={handleHamburgerClick}>
              <CloseIcon className = {style.closeIcon } sx={{fontSize: '18px' }} />
            </div>

          </div>
          <div className={style.logo}>
            <img src={logo}/>
          </div>
          <ul className={style.list}>
            <li>
              <div className={`${style.devider}`}></div>
              <p>HOME</p>
            </li>
            <li>
              <div className={`${style.devider}`}></div>
              <p>MENU</p>
            </li>
            <li>
              <div className={`${style.devider}`}></div>
              <p>ABOUT US</p>
            </li>
            <li>
              <div className={`${style.devider}`}></div>
              <p>OUR CHEFS</p>
            </li>
            <li>
              <div className={`${style.devider}`}></div>
              <p>CONTACT US</p>
            </li>
          </ul>
          <footer className={style.footer}>
            <h1>Visit Us</h1>

            <p className={style.address1}>Restaurant St, Delicious City,</p>
            <p className={style.address2}>London 9578, UK</p>
            <p className={style.address3}>Open: 9.30 am - 2.30pm</p>
            <p className={style.address4}>booking@grilli.com</p>
            <div className={`${style.devider}`}></div>
          
            <p className = {style.book}>Booking Request</p>
            <div className={style.PhoneWrapper}>
              <p className = {style.PhoneNo}>+251-940-798-785</p>
              <div className={style.underline}></div>
            </div>
          </footer>
         
        </div>
      </Drawer>
    </div>
  );
}
