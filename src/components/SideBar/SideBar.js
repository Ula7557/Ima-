import React, {useRef} from "react";
import classes from "./SideBar.module.scss"
import {Link} from "react-router-dom"
import sidebar1 from "../../assets/icons/sidebar1.png";
import sidebar2 from "../../assets/icons/sidebar2.png";
import sidebar3 from "../../assets/icons/sidebar3.png";
import sidebar4 from "../../assets/icons/sidebar4.png";
import sidebar5 from "../../assets/icons/sidebar5.png";
import sidebar6 from "../../assets/icons/sidebar6.png";
import sidebar_exit from "../../assets/icons/sidebar_exit.png";
import btn from "../../assets/icons/home_link_btn.png";

const SideBar = () => {
  const ref = useRef();

const clickHandler = () => {
    ref.current.style.cssText = "right: 0; width: 240px; padding: 30px;"
    
  }
  const closeHandler = () => {
       ref.current.style.cssText = "right: -360px; width: 0; padding: 0;"
  }

  return <div>
        <div className={classes.link_btn_wrap}>
          <button className={classes.link_btn_img} onClick={clickHandler}>
            <img src={btn} alt="" />
          </button>

          {/* sidebar menu */}


          <div className={classes.sidebar_menu} ref={ref}>
            <div className={classes.sidebar_container}>

            <ul>
              <li>
                <Link to="/about">
                <img src={sidebar1} alt=""/>
                Обратная связь
                </Link>
              </li>
               <li>
                <Link to="/about">
                <img src={sidebar2} alt=""/>
                Подать онлайн заявку
                </Link>
              </li>
               <li>
                <Link to="/about">
                <img src={sidebar3} alt=""/>
               Обращение к руководству агентство
                </Link>
              </li>
               <li>
                <Link to="/about">
                <img src={sidebar4} alt=""/>
                Поиск по база данных
                </Link>
              </li>
               <li>
                <Link to="/about">
                <img src={sidebar5} alt=""/>
               Онлайн платежи
                </Link>
              </li>
               <li>
                <Link to="/about">
                <img src={sidebar6} alt=""/>
                Калькулятор пошлин
                </Link>
              </li>
            </ul>
          </div>
            <button className={classes.sidebar_exit} onClick={closeHandler}>
              <img src={sidebar_exit} alt=""/>
            </button>
          </div>
        </div>
  </div>;
};

export default SideBar;
