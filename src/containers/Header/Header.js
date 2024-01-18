/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import classes from "./style.module.scss";
import Logo from "../../assets/images/gerb1.png";
import watcher from "../../assets/icons/eye.png";
import { useLang } from "../../context/LanguageProvider";
import colorful from "../../assets/icons/colorful.png";
import blackWhite from "../../assets/icons/black-white.png";
import Xmark from "../../assets/icons/Xmark.png";
import variables from "../../assets/styles/verble.scss";
import InputHeader from "../../components/InputHeader";
import Language1 from "../../components/language1/Language1";
import { Link } from "react-router-dom";
import Language from "../../lang";
import { SUBMENU } from "../../assets/db";

import { useSelector, useDispatch } from "react-redux";
import { toggleHamburger } from "../../redux/action/modals";
import { toggleInput } from "../../redux/action/input";

import NavbarModal from "../../components/NavbarModal/NavbarModal";
import { Facebook, Instagram, Telegram, Utube } from "../../assets/images";
import SubHeader from "../../components/SubHeader/SubHeader";

const Header = () => {
  const root = document.documentElement;
  const [verb, setverb] = useState("def");

  root.style.setProperty(
    "--font-size12",
    verb === "small" ? "14px" : verb === "large" ? "16px " : variables.font12
  );
  root.style.setProperty(
    "--font-size13",
    verb === "small" ? "15px" : verb === "large" ? "17px " : variables.font13
  );
  root.style.setProperty(
    "--font-size14",
    verb === "small" ? "16px" : verb === "large" ? "18px " : variables.font14
  );
  root.style.setProperty(
    "--font-size16",
    verb === "small" ? "18px" : verb === "large" ? "20px " : variables.font16
  );
  root.style.setProperty(
    "--font-size18",
    verb === "small" ? "20px" : verb === "large" ? "22px " : variables.font18
  );
  root.style.setProperty(
    "--font-size24",
    verb === "small" ? "26px" : verb === "large" ? "28px " : variables.font24
  );
  root.style.setProperty(
    "--font-size30",
    verb === "small" ? "32px" : verb === "large" ? "34px " : variables.font30
  );
  root.style.setProperty(
    "--font-size36",
    verb === "small" ? "38px" : verb === "large" ? "40px " : variables.font36
  );
  root.style.setProperty(
    "--font-size40",
    verb === "small" ? "42px" : verb === "large" ? "44px " : variables.font40
  );
  root.style.setProperty(
    "--font-sizerem",
    verb === "small"
      ? "1.6rem"
      : verb === "large"
      ? "1.8rem "
      : variables.fontsizerem
  );

  const [lang, setLang] = useLang();

  const ModalState = useSelector((state) => state.HamburgerState.state);
  const InputOpenState = useSelector((state) => state.InputState.state);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [display, setDisplay] = useState(false);

  const colorHandler = (state) => {
    if (state) {
      root.classList.add("grayscale-on");
    } else {
      root.classList.remove("grayscale-on");
    }
  };

  const ref = useRef(null);

  const [filte, setFilte] = useState([]);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 110) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  function show(item) {
    setOpen(!open);
    ref.current.innerHTML = item.target.textContent;

    if (item.target.textContent === "Uzbek") {
      setLang("uz");
      ref.current.parentNode.classList.value =
        "header-btns style_lang_btn__R9n9f uzb";
    } else {
      setLang("ru");
      ref.current.parentNode.classList.value =
        "header-btns style_lang_btn__R9n9f";
    }
  }

  function switcherShow(item) {
    setDisplay(!display);
  }

  useEffect(() => {
    if (ModalState || InputOpenState) {
      document.body.style.overflow = "hidden";

      const styles = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: 1200,
        margin: "0 auto !important",
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [ModalState, InputOpenState]);

  return (
    <main className="size ">
      <div className={classes.relative}>
        {/* color changer part */}
        <div className={display === true ? classes.bg : classes.switcher}>
          <div className={classes.switcher_inner}>
            <div className={classes.flex}>
              <div className={classes.left_side}>
                <p className={`font ${classes.inner_txt}`}>Размер шрифта</p>
                <button
                  onClick={() => setverb("def")}
                  className={
                    verb === "def"
                      ? `${classes.font_size_btn1_back} ${classes.font_size_btn1}`
                      : classes.font_size_btn1
                  }
                >
                  A
                </button>
                <button
                  onClick={() => setverb("small")}
                  className={
                    verb === "small"
                      ? `${classes.font_size_btn1_back} ${classes.font_size_btn1}`
                      : classes.font_size_btn1
                  }
                >
                  +A
                </button>
                <button
                  onClick={() => setverb("large")}
                  className={
                    verb === "large"
                      ? `${classes.font_size_btn1_back} ${classes.font_size_btn1}`
                      : classes.font_size_btn1
                  }
                >
                  +A
                </button>
              </div>
              <div className={classes.right_side}>
                <p className={classes.inner_txt}>Цветова палитра</p>

                <button onClick={() => colorHandler(false)}>
                  <img src={colorful} alt="" />
                </button>
                <button onClick={() => colorHandler(true)}>
                  <img src={blackWhite} alt="" />
                </button>
              </div>
            </div>
            <button className={classes.exit_btn} onClick={switcherShow}>
              <img src={Xmark} alt="" />
            </button>
          </div>
        </div>
        <div className={`${classes.general_wrapper}`}>
          <div className={classes.top_header}>
            <div className={classes.inner_left}>
              <div className={classes.img_wrapper}>
                <Link to="/">
                  <img src={Logo} alt="" />
                  <p className={`font ${classes.margin_text}`}>
                    {Language[lang].title}
                  </p>
                  <p className={`${classes.media} ${classes.margin_text}`}>
                    АГЕНТСТВО ИНТЕЛЛЕКТУАЛЬНОЙ СОБСТВЕННОСТИ
                  </p>
                </Link>
              </div>
              <div className={classes.iconsWrapper}>
                <a href="https://www.youtube.com/">
                  <Utube />
                </a>
                <a href="@gulhay0">
                  <Telegram />
                </a>
                <a href="https://www.facebook.com/">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/">
                  <Instagram />
                </a>
              </div>
            </div>

            <div className={classes.inner_right}>
              <div className={classes.iconsWrapperSecond}>
                <div className={classes.icon_eye_div}>
                  <button
                    onClick={() => {
                      setDisplay(!display);
                      dispatch(toggleInput(false));
                      dispatch(toggleHamburger(false));
                    }}
                  >
                    <img
                      src={watcher}
                      alt=""
                      className={classes.eyeIconBorder}
                    />
                  </button>
                </div>
                <button
                  onClick={() => {
                    dispatch(toggleInput(!InputOpenState));
                    setDisplay(false);
                    dispatch(toggleHamburger(false));
                  }}
                  className={
                    InputOpenState ? classes.search_btn : classes.btn_search
                  }
                ></button>
              </div>

              <Language1 />
              {/* language btn modal */}
            </div>
          </div>

          {/* ^^^^^^^^ NAVBAR ^^^^^^^^^ */}

          <nav
            className={`${classes.navbar_wrapper} ${
              sticky ? classes.sticky : null
            }`}
          >
            <div className={classes.submenu_modal}>
              <label htmlFor="check">
                <input
                  type="checkbox"
                  checked={ModalState}
                  onChange={() => {
                    dispatch(toggleHamburger(!ModalState));
                    dispatch(toggleInput(false));
                    setDisplay(false);
                  }}
                  id="check"
                />
                <span></span>
                <span></span>
                <span></span>
              </label>
              <SubHeader />
              <Link to="/contact-agency" className={classes.nav_items}>
                {Language[lang].headerLinks.contact}
              </Link>
            </div>
          </nav>
        </div>

        <NavbarModal />
      </div>
      {InputOpenState ? <InputHeader /> : ""}
    </main>
  );
};

export default Header;
