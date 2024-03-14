import React,{useState,useEffect} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './Home.module.css';
import separator from '../../assets/images/separator.svg';
import img1 from '../../assets/images/hero-slider-1.jpg';
import img2 from '../../assets/images/hero-slider-2.jpg';
import img3 from '../../assets/images/hero-slider-3.jpg'


const Home = () => {
  const [idx,setIdx] = useState(0);
  let images = [img1,img2,img3]
  
  const handleChangeLeft = () => {
    setIdx((idx - 1 + 3) % 3);
  };
  
  const handleChangeRight = () => {
    setIdx((idx + 1) % 3);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % 3);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <body className={`${style.all}`}>
      <div className={style.container} style={{ backgroundImage: `url(${images[idx]})`}}>

          <div className={style.leftNext} onClick={handleChangeLeft}>
            <ArrowBackIosIcon className={style.leftArrow}/>
          </div>
          <div className={style.hero}>
            <p className={`${idx == 0 ? style.title1 : style.hidden}`}>TRADATIONAL & HYGINE</p>
            <p className={`${idx == 1 ? style.title1 : style.hidden}`}>DELIGHTFUL EXPERIENCE</p>
            <p className={`${idx == 2 ? style.title1 : style.hidden}`}>AMAZING & DELICIOUS</p>

            <img src={separator} className={idx != 0 ? style.hidden : null} />
            <img src={separator} className={idx != 1 ? style.hidden : null} />
            <img src={separator} className={idx != 2 ? style.hidden : null} />

            <h1  className={`${idx == 0 ? style.title2: style.hidden}`}>
              For the love of
              delicious food
            </h1>
            <h1  className={`${idx == 1 ? style.title2: style.hidden}`}>
              Flavors Inspired by
              the Seasons
            </h1>
            <h1  className={`${idx == 2 ? style.title2: style.hidden}`}>
              Where every flavor
              tells a story
            </h1>

            <p  className={`${idx == 0 ? style.title3 : style.hidden}`}>
              Come with family & feel the joy of mouthwatering food
            </p>
            <p  className={`${idx == 1 ? style.title3 : style.hidden}`}>
              Come with family & feel the joy of mouthwatering food
            </p>            
            <p  className={`${idx == 2 ? style.title3 : style.hidden}`}>
              Come with family & feel the joy of mouthwatering food
            </p>
          </div>
          <div className={style.rightNext} onClick={handleChangeRight}>
            <ArrowForwardIosIcon className={style.rightArrow}/>
          </div>

      </div>
    </body>
  )
}

export default Home