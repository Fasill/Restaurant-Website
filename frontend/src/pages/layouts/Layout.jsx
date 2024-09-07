import React, { useState, useEffect, useRef } from "react";
import Toolbar from "../../components/toolbar/Toolbar.jsx";
import style from "./Layout.module.css";
import { useSelector } from "react-redux";
import Drawer from "../../components/drawer/LeftDrawer.jsx";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import RightDrawer from "../../components/drawer/RightDrawer.jsx";
import { useDispatch } from "react-redux";
import { updateRight } from "../../store/StateStore.jsx";
import TopNotch from "../TopNotch/TopNotch.jsx";
import Home from "../home/Home.jsx";
import Story from "../story/Story.jsx";
import SpecialDishes from "../../pages/specialDiches/SpecialDishes.jsx";
import Menu from "../menu/Menu.jsx";
import Footer from "../footer/Footer.jsx";
import { updatePage } from "../../store/StateStore.jsx";

const Layout = () => {
  const dispatch = useDispatch();

  const handleChatBot = () => {
    dispatch(updateRight(true));
  };

  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking((prevState) => !prevState);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const page = useSelector((state) => state.page);
  useEffect(() => {
    if (page === "home") {
      scrollToSection(homeRef);
    } else if (page === "menu") {
      scrollToSection(menuRef);
    } else if (page === "aboutus") {
      scrollToSection(aboutRef);
    } else if (page === "contact") {
      scrollToSection(contactRef);
    }

    dispatch(updatePage(""));
  }, [page]);

  return (
    <body className={`${style.layout}`}>
      <Toolbar />
      <div className={style.pages}>
        <div ref={homeRef} className={style.homepage}>
          <Home />
        </div>
        <div className={style.TopNotch}>
          <TopNotch />
        </div>
        <div ref={aboutRef}>
          <Story />
        </div>
        <SpecialDishes />
        <div ref={menuRef}>
          <Menu />
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>

        <Drawer />
        <RightDrawer />
        <div
          className={`${style.chatBot} ${isShaking ? style.shake : ""}`}
          onClick={handleChatBot}
        >
          <MarkUnreadChatAltIcon className={style.MarkUnreadChatAltIcon} />
        </div>
      </div>
    </body>
  );
};

export default Layout;
