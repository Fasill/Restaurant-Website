import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './Home.module.css'
const Home = () => {
  return (
    <body className={`${style.all}`}>
      <div className={style.container}>
        <div className={style.leftNext}>
          <ArrowBackIosIcon className={style.leftArrow}/>
        </div>
        <div ></div>
        <div className={style.rightNext}>
          <ArrowForwardIosIcon className={style.rightArrow}/>
        </div>

      </div>
    </body>
  )
}

export default Home