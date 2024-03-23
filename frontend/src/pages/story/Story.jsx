import React, { useState } from 'react';
import style from './story.module.css';
import banner from '../../assets/images/about-banner.jpg';
import badge2 from '../../assets/images/badge-2.png'
import badge2bg from '../../assets/images/badge-2-bg.png'
// import service1 from "../../assets/images/service-1.jpg";
import serviceBack from "../../assets/images/img-pattern.svg";
import separator from '../../assets/images/separator.svg';

import service1 from "../../assets/images/about-abs-image.jpg";

function Story() {


  return (
    <div className={style.storyContainer}>
      <div className={style.story}>
        <div className={style.storyTittle}>
          <h1>OUR STORY</h1>
          <img src = {separator} className = {style.separator}/>
        </div>

        <div className={style.storyTittle2}>
          <h1>Every Fla vor Tells a Story</h1>
        </div>
        <div className={style.storyTittle3}>
          <p>
            Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.
          </p>
        </div>
        <div className={style.storyFooter}>
          <h1>Book Through Call</h1>
          <div className={style.PhoneWrapper}>
            <p className = {style.PhoneNo}>+251-940-798-785</p>
            <div className={style.underline}></div>
          </div>
          <div className={`${style.btn}`}><p>READ MORE</p></div>

        </div>
      </div>
      <div className={style.banner}>
        <div className={style.mainImg}>
          <img src={banner}/>

          <div className={`${style.cardwrapper1} ${style.cardwrapperleftandright}`} >
          <div className = {style.cards}>
            <div className={style.imgwrapper}>
              <img src = {service1} className={style.service}/>
            </div>
            <img src = {serviceBack} className={style.serviceBack}/>
          </div>
          </div>

          <div className={style.badge1}>
            <div className={style.inbadge}>
              <img src={badge2} className={style.badge2}/>

              <img src={badge2bg} className={style.badge2bg}/>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Story;
