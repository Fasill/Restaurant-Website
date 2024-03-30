import style from './menu.module.css';

import separator from '../../assets/images/separator.svg';
import React from 'react'
import menu1 from '../../assets/images/menu-1.png';
import menu2 from '../../assets/images/menu-2.png';
import menu3 from '../../assets/images/menu-3.png';
import menu4 from '../../assets/images/menu-4.png';
import menu5 from '../../assets/images/menu-5.png';
import menu6 from '../../assets/images/menu-6.png';



const Menu = () => {
  return (
    <div className={style.menuWrapper}>
      <div className={style.card}>
        <div className={style.menuHeader}>
          <div className={style.storyTittle}>
            <h1>SPECIAL DISH</h1>
            <img src = {separator} className = {style.separator}/>
            <h2>Delicious Menu</h2>
          </div>
 
        </div>
        <div className={style.menuList}>
          <div className={style.leftMenu}>
            <div className={`${style.menuProduct} ${style.menuProduct1}`}>
              <div className={style.dish}>
                <img src = {menu1} />
              </div>
              <div className={style.dishDescription}>
                <div className = {style.dishTittle}>
                  <h1>Greek Salad</h1>
                  <div className={style.dash}></div>
                  <p className={style.dishPrice}>$25.50</p>
                </div>
                <div className={style.engridients}>
                  <p>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                </div>
              </div>
            </div>
            <div className={`${style.menuProduct} ${style.menuProduct2}`}>
              <div className={style.dish}>
                <img src = {menu2} />
                
              </div>
              <div className={style.dishDescription}>
                <div className = {style.dishTittle}>
                  <h1>butternut pumpkin</h1>
                  <div className={style.dash}></div>
                  <p className={style.dishPrice}>$10.00</p>
                </div>
                <div className={style.engridients}>
                  <p>Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</p>
                </div>
              </div>
            </div>
            <div className={`${style.menuProduct} ${style.menuProduct3}`}>
              <div className={style.dish}>
                <img src = {menu3} />
                
              </div>
              <div className={style.dishDescription}>
                <div className = {style.dishTittle}>
                  <h1>Olivas Rellenas</h1>
                  <div className={style.dash}></div>
                  <p className={style.dishPrice}>$25.00</p>
                </div>
                <div className={style.engridients}>
                  <p>Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.</p>
                </div>
              </div>
            </div>

          </div>
          <div className={style.rightMenu}>
            <div className={`${style.menuProduct} ${style.menuProduct4}`}>
              <div className={style.dish}>
              <img src = {menu4} />
                
              </div>
              <div className={style.dishDescription}>
                <div className = {style.dishTittle}>
                  <h1>Lasagne</h1>
                  <div className={style.dash}></div>
                  <p className={style.dishPrice}>$40.00</p>
                </div>
                <div className={style.engridients}>
                  <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</p>
                </div>
              </div>
            </div>
            <div className={`${style.menuProduct} ${style.menuProduct5}`}>
              <div className={style.dish}>
              <img src = {menu5} />
                
              </div>
              <div className={style.dishDescription}>
                <div className = {style.dishTittle}>
                  <h1>Tokusen Wagyu</h1>
                  <div className={style.dash}></div>
                  <p className={style.dishPrice}>$39.00</p>
                </div>
                <div className={style.engridients}>
                  <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
                </div>
              </div>
            </div>
            <div className={`${style.menuProduct} ${style.menuProduct6}`}>
              <div className={style.dish}>
              <img src = {menu6} />
                
              </div>
              <div className={style.dishDescription}>
                <div className = {style.dishTittle}>
                  <h1>Opu Fish</h1>
                  <div className={style.dash}></div>
                  <p className={style.dishPrice}>$49.00</p>
                </div>
                <div className={style.engridients}>
                  <p>Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</p>
                </div>
              </div>
            </div>  

          </div>

        </div>
      </div>     
    </div>
  )
}

export default Menu