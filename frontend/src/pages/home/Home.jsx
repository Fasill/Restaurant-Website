import React, { useState, useEffect, useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import style from "./Home.module.css";
import separator from "../../assets/images/separator.svg";
import img1 from "../../assets/images/hero-slider-1.jpg";
import img2 from "../../assets/images/hero-slider-2.jpg";
import img3 from "../../assets/images/hero-slider-3.jpg";
import badge from "../../assets/images/features-icon-2.png";

const Home = () => {
  const [idx, setIdx] = useState(0);
  let images = [img1, img2, img3];
  const containerRef = useRef(null);

  const handleChangeLeft = () => {
    setIdx((idx - 1 + 3) % 3);
    updateTimestamp();
  };

  const handleChangeRight = () => {
    setIdx((idx + 1) % 3);
    updateTimestamp();
  };

  const updateTimestamp = () => {
    setTimestamp(Date.now());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % 3);
      updateTimestamp();
    }, 5000);

    images.forEach((image) => {
      new Image().src = image;
    });

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.style.backgroundImage = `url(${lazyImage.dataset.src})`;
          observer.unobserve(lazyImage);
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [idx]);

  return (
    <section className={`${style.homepage}`}>
      <div
        ref={containerRef}
        className={style.container1}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        data-src={images[idx]}
      >
        <div className={style.leftNext} onClick={handleChangeLeft}>
          <ArrowBackIosIcon className={style.leftArrow} />
        </div>
        <div>
          <div className={style.hero}>
            <p className={`${idx == 0 ? style.title1 : style.hidden}`}>
              TRADITIONAL & HYGIENE
            </p>
            <p className={`${idx == 1 ? style.title1 : style.hidden}`}>
              DELIGHTFUL EXPERIENCE
            </p>
            <p className={`${idx == 2 ? style.title1 : style.hidden}`}>
              AMAZING & DELICIOUS
            </p>

            <img src={separator} className={idx != 0 ? style.hidden : null} />
            <img src={separator} className={idx != 1 ? style.hidden : null} />
            <img src={separator} className={idx != 2 ? style.hidden : null} />

            <h1 className={`${idx == 0 ? style.title2 : style.hidden}`}>
              For the love of delicious food
            </h1>
            <h1 className={`${idx == 1 ? style.title2 : style.hidden}`}>
              Flavors Inspired by the Seasons
            </h1>
            <h1 className={`${idx == 2 ? style.title2 : style.hidden}`}>
              Where every flavor tells a story
            </h1>

            <p className={`${idx == 0 ? style.title3 : style.hidden}`}>
              Come with family & feel the joy of mouthwatering food
            </p>
            <p className={`${idx == 1 ? style.title3 : style.hidden}`}>
              Come with family & feel the joy of mouthwatering food
            </p>
            <p className={`${idx == 2 ? style.title3 : style.hidden}`}>
              Come with family & feel the joy of mouthwatering food
            </p>
            <div className={idx == 0 ? style.btn : style.hidden}>
              <p>VIEW OUR MENU</p>
            </div>
            <div className={idx == 1 ? style.btn : style.hidden}>
              <p>VIEW OUR MENU</p>
            </div>
            <div className={idx == 2 ? style.btn : style.hidden}>
              <p>VIEW OUR MENU</p>
            </div>
          </div>
        </div>
        <div className={style.rightNext} onClick={handleChangeRight}>
          <ArrowForwardIosIcon className={style.rightArrow} />
        </div>
        <div className={style.badge1}>
          <img src={badge} />
          <p>Book A Table</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
