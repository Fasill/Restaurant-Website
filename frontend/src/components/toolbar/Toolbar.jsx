import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import style from './style.module.css';
import { useEffect,useState } from 'react';
import logo from '../../assets/images/logo.svg';

import { useDispatch, useSelector } from 'react-redux';
import { info } from '../../store/StateStore.jsx';

const Toolbar = () => {
 
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setShowNavbar(scrollTop === 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // ==========================================================
    const [scrollDirection, setScrollDirection] = useState();

    useEffect(() => {
      let lastScrollPosition = window.pageYOffset;
  
      const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > lastScrollPosition) {
          setScrollDirection(true);
        } else {
          setScrollDirection(false);
        }
  
        lastScrollPosition = currentScrollPosition;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    // ===============================================================
    //=============================================================
    const dispatch = useDispatch();

    const handleHamburgerClick = ()=>{
      dispatch(info(true));
    }

 

    //==============================================================
  
  return (
    <div   className={`${style.all} ${!showNavbar?style.hidden:""} ${scrollDirection? style.scrolling : ""}`}>

        <div  className={`${style.toolbar}`}>
            <div  className={`${style.container}`}>

                <div className={`${style.left_toolbar} `}>
                    <address>
                        <FaMapMarkerAlt />
                        <span>Restorant St, Delicios City, Addis Ababa 8578, Ethiopia</span>
                    </address>
                    <div className={`${style.devider}`}></div>
                    <div className={`${style.items_2}`}>
                        <div className='icon'>
                            <FaClock />
                        </div>
                        <span className={`${style.span}`}>
                            Daily: 8.00 am to 10.00 pm
                        </span>
                    </div>
                </div>
                <div className={`${style.right_toolbar}`}>
                    <div className={`${style.item_3}`}>
                        <div>
                            <FaPhone />
                        </div>
                        <span className={`${style.span} ${style.contacts}`}>+251940798785</span>
                    </div>
                    <div className={`${style.devider}`}></div>

                    <div className={`${style.item_4}`}>
                        <div>
                            <FaEnvelope />
                        </div>
                        <span className={`${style.span} ${style.contacts}`}>booking@restaurant.com</span>
                    </div>
                </div>
            </div>
        </div>

        <div  className={`${style.navbar} ${!showNavbar ?style.scrolled: ""}`}>
          <div className={`${style.logo}`}>
              <img src={logo} alt="" className="img" />
          </div>
          <nav>
            <ul>  
                    
                    <li className={`${style.navElements2}`}></li>
                    <li className={`${style.navElements}`}>HOME</li>
                    <li className={`${style.navElements}`}>MENUS</li>
                    <li className={`${style.navElements}`}>ABOUT US</li>
                    <li className={`${style.navElements}`}>OUR CHEFS</li>
                    <li className={`${style.navElements}`}>CONTACT</li>
                    <li className={`${style.wraper}`}>

                    <div className={`${style.mainbtn}`}><p>FIND A TABLE</p></div>
                    <div className={`${style.humberger}`} onClick={handleHamburgerClick}>
                      <div className={`${style.line1}`}></div>
                      <div className={`${style.line2}`}></div>
                      <div className={`${style.line3}`}></div>

                    </div>
                    </li>
                    <div className={`${style.runner}`}></div>




              </ul>
          </nav>
        </div>


    </div>
  );
}

export default Toolbar;
