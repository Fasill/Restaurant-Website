import React from 'react'
import style from './Footer.module.css'
import logo from '../../assets/images/logo.svg'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import pattern from '../../assets/images/footer-form-pattern.svg'
import { updatePage } from '../../store/StateStore.jsx';
import { useDispatch } from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch()
  const handleNavButtons = (val) =>{
    if (val === "menu"){
      dispatch(updatePage("menu"))
    }
    else if (val === "aboutus"){
      dispatch(updatePage("aboutus"))

    }
    else if (val === "ourchefs"){
      dispatch(updatePage("ourchefs"))
    }
    else if (val === "contact"){
      dispatch(updatePage("contact"))
    }
    else{
      dispatch(updatePage("Home"))
    }

  }
  return (
    <div className={style.footerWrapper1}>
      <div>
        <div className={style.leftNavbarEg}>
          <ul>
            <li onClick={() => handleNavButtons('home')}>HOME</li>
            <li onClick={() => handleNavButtons('menu')}>MENUS</li>
            <li onClick={() => handleNavButtons('aboutus')}>ABOUT US</li>
            <li onClick={() => handleNavButtons('ourchefs')}>OUT CHEFS</li>
            <li onClick={() => handleNavButtons('contact')}>CONTACT</li>
          </ul>
        </div>
        <div className={style.subscription}>
          <img src={pattern}/>
          <div className={style.mehal}>
            <img src={logo}/>
            <div className={style.contactAndSubsicription}>
              <p>Restaurant St, Delicious City, London 9578, UK</p>
              <p>booking@grilli.com</p>
              <p>Booking Request : +88-123-123456</p>
              <p>Open : 09:00 am - 01:00 pm</p>
            </div>
            <div className={style.transition}>
              <div className={style.box}></div>
              <div className={style.box}></div>
              <div className={style.box}></div>
            </div>
            <h1>Get News & Offers</h1>
            <div className={style.subInputs}>
              <MailOutlineIcon style={{ color: 'white' }} />
              <input 
                name='text'
              />
              <div className={`${style.btn}`}><p>SUBSCRIBE</p></div>
            </div>
          </div>
          <img src={pattern}/>
        </div>      
        <div className={style.rightAds}>
          <ul>
            <li><a href="https://www.facebook.com">FACEBOOK</a></li>
            <li><a href="https://www.instagram.com">INSTAGRAM</a></li>
            <li><a href="https://www.twitter.com">TWITTER</a></li>
            <li><a href="https://www.youtube.com">YOUTUBE</a></li>
            <li><a href="https://www.google.com/maps">GOOGLE MAP</a></li>
          </ul>
        </div>
      </div>
      <p>© 2022 Grilli. All Rights Reserved | Crafted by <span><a href='https://www.linkedin.com/in/fasil-hawultie/'>Fasil Hawultie</a></span></p>
    </div>
  )
}
export default Footer
