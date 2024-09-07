import React from "react";
import style from "./SpecialDishes.module.css";
import separator from "../../assets/images/separator.svg";
// import badge from '../../assets/images/event-1.jpg';
import badge from "../../assets/images/badge-1.png";
const SpecialDishes = () => {
  return (
    <div className={style.SpecialDishes}>
      <div className={style.leftSpecialDishes}></div>

      <div className={style.rightSpecialDishes}>
        <div>
          <img src={badge} />
          <div>
            <div className={style.storyTittle}>
              <h1>SPECIAL DISH</h1>
              <img src={separator} className={style.separator} />
            </div>

            <div className={style.storyTittle2}>
              <h1>Lobster Tortellini</h1>
            </div>
            <div className={style.storyTittle3}>
              <p>
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type.
              </p>
            </div>
            <div className={style.storyFooter}>
              <div className={style.PhoneWrapper}>
                <p className={style.PhoneNo2}>$40.00</p>

                <p className={style.PhoneNo}>$20.00</p>
              </div>
              <div className={`${style.btn}`}>
                <p>VIEW ALL MENU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
