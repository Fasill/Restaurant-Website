import React from "react";
import style from "./TopNotch.module.css";
import service1 from "../../assets/images/service-1.jpg";
import service2 from "../../assets/images/service-2.jpg";
import service3 from "../../assets/images/service-3.jpg";
import serviceBack from "../../assets/images/img-pattern.svg";
import separator from "../../assets/images/separator.svg";

const TopNotch = () => {
  return (
    <div className={style.pageWrapper}>
      <div className={style.TopNotchWrapper}>
        <div
          className={`${style.cardwrapper} ${style.cardwrapperleftandright}`}
        >
          <div className={style.cards}>
            <div className={style.imgwrapper}>
              <img src={service1} className={style.service} />
            </div>
            <img src={serviceBack} className={style.serviceBack} />
          </div>
          <div className={style.bottomtitle}>
            <h1>Breakfast</h1>
            <div className={style.menuWrapper}>
              <p className={""}>VIEW MENU</p>
              <div className={style.underline}></div>
            </div>
          </div>
        </div>

        <div className={style.cardwrapper}>
          <div className={style.middle}>
            <div className={style.midleheader}>
              <h1>FLAVORS FOR ROYALTY</h1>
              <img src={separator} className={style.separator} />
              <h1>We Offer Top Notch</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever.
              </p>
            </div>
            <div className={style.cards}>
              <div className={style.imgwrapper}>
                <img src={service3} className={style.service} />
              </div>
              <img src={serviceBack} className={style.serviceBack} />
            </div>
          </div>
          <div className={style.bottomtitle}>
            <h1>Breakfast</h1>
            <div className={style.menuWrapper}>
              <p className={""}>VIEW MENU</p>
              <div className={style.underline}></div>
            </div>
          </div>
        </div>

        <div
          className={`${style.cardwrapper} ${style.cardwrapperleftandright}`}
        >
          <div className={style.cards}>
            <div className={style.imgwrapper}>
              <img src={service2} className={style.service} />
            </div>
            <img src={serviceBack} className={style.serviceBack} />
          </div>
          <div className={style.bottomtitle}>
            <h1>Breakfast</h1>
            <div className={style.menuWrapper}>
              <p className={""}>VIEW MENU</p>
              <div className={style.underline}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNotch;
