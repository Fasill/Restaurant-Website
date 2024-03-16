import React from 'react'
  import style from './ TopNotch.module.css'
import service1 from "../../assets/images/service-1.jpg";
import service2 from "../../assets/images/service-2.jpg";
import service3 from "../../assets/images/service-3.jpg";
import shape1 from "../../assets/images/shape-1.png";
import shape2 from "../../assets/images/shape-2.png";
import serviceBack from "../../assets/images/img-pattern.svg"
import separator from '../../assets/images/separator.svg';

const  TopNotch = () => {
  return (
    <div className={style.TopNotchWrapper}> 
      <div className = {style.cards}>
        <div className={style.imgwrapper}>
          <img src = {service1} className={style.service}/>
        </div>
        <img src = {serviceBack} className={style.serviceBack}/>
      </div>

      <div className={style.middle}>
        <div className={style.midleheader}>
          <h1>FLAVORS FOR ROYALTY</h1>
          <img src = {separator} className = {style.separator}/>
          <h1>We Offer Top Notch</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever.</p>
        </div>
        <div className = {style.cards}>
          <div className={style.imgwrapper}>
            <img src = {service3} className={style.service}/>
          </div>
          <img src = {serviceBack} className={style.serviceBack}/>
        </div>
      </div>
      
      <div className = {style.cards}>
        <div className={style.imgwrapper}>
          <img src = {service2} className={style.service}/>
        </div>
        <img src = {serviceBack} className={style.serviceBack}/>
      </div>

    </div>
  )
}

export default  TopNotch