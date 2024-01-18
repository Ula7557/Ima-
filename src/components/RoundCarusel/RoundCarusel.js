import React, {useEffect,useState,useRef} from 'react'
import classes from './RoundCarusel.module.scss'

import leftIcon from "../../assets/icons/Left.png";
import rightIcon from "../../assets/icons/Right.png";
import { useLang } from '../../context/LanguageProvider';
import Langauge from '../../lang'
import { Link } from 'react-router-dom';
import {images} from "../../assets/db"
import img6 from '../../assets/images/Mask Group (17).png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetch } from '../../hooks/useFetch';
import Loader from '../../containers/Loader';


export default function Roundcarusel(){

        const ref = useRef();
        const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [lang] = useLang()
    const [loading, data, error] = useFetch(`/content/all/news?lang=ru`);
    let part = ['news']
    const [menu,setMenu]=useState('news')
    const [filt,setFilt]=useState(images.filter(e=> e.title === part[0]))
    let angle = 0;
    let count = 0
    const [degs,setDegs] =useState(0)
    function galleryspin(sign) {
        if (!sign) {
            angle = angle + degs;
        } else {
            angle = angle - degs;
        }
      document.querySelector('.aff').style.transform=`rotateY(${angle}deg)`
    }
    const [imagesed,setImagesed]=useState([])
    
    function changePart(val) {
        setFilt(images.filter(y=> y.title===val))
        setMenu(val)
    }
    useEffect(()=>{
     count = 360/data.data?.length
     let newArr = []
     data.data?.map((item,i) => {
           newArr.push({...item, deg:count*i})
        })
        setDegs(count)
    setImagesed(newArr)
    },[data])
    if (loading) return <Loader/>
      return (
        <div className={`wrap_ne ${classes.news_wrapper}`}>
          <div className={classes.slider_top}>
            <div className={classes.txt_flex}>
              <p
                onClick={() => changePart("news")}
                className={
                  menu === "news"
                    ? `active ${classes.slide_txt6}`
                    : classes.slide_txt6
                }
              >
                {Langauge[lang].titles.news}
              </p>
              <p
                onClick={() => changePart("press")}
                className={
                  menu === "press"
                    ? `active ${classes.slide_txt6}`
                    : classes.slide_txt6
                }
              >
                {Langauge[lang].titles.pressRelease}
              </p>
              <p
                onClick={() => changePart("event")}
                className={
                  menu === "event"
                    ? `active ${classes.slide_txt6}`
                    : classes.slide_txt6
                }
              >
                {Langauge[lang].titles.meets}
              </p>
            </div>
            <div className={classes.slide_top_inner_wrap}>
              <div className={classes.btn_wrapper}>
                <button onClick={() => galleryspin("")}>
                  <img src={leftIcon} alt="" />
                </button>
                <button onClick={() => galleryspin("-")}>
                  <img src={rightIcon} alt="" />
                </button>
              </div>
              <Link className={classes.viewAllClass} to="/contact-agency">
                {Langauge[lang].titles.viewAll}
              </Link>
            </div>
          </div>
          <div className={classes.news_item_wrapper}>
            <div className={classes.gallery}>
              <figure className={`aff ${classes.spinner}`}>
                {imagesed.map((el, i) => (
                  <div
                    height="300"
                    style={{ transform: `rotateY(${el.deg}deg)` }}
                    key={i}
                  >
                    <img alt="" src={el.image} />
                  </div>
                ))}
              </figure>
            </div>
            <div className={classes.round_single_card}>
              <div className={classes.slide_top_inner_wrap}>
                <div className={classes.btn_wrapper}>
                  <button onClick={() => ref.current.slickPrev()}>
                    <img src={leftIcon} alt="" />
                  </button>
                  <button onClick={() => ref.current.slickNext()}>
                    <img src={rightIcon} alt="" />
                  </button>
                </div>
              </div>
              <Slider ref={ref} {...settings}>
                <div>
                  <img
                    className={classes.single_card_content}
                    src={img6}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className={classes.single_card_content}
                    src={img6}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className={classes.single_card_content}
                    src={img6}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className={classes.single_card_content}
                    src={img6}
                    alt=""
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      );
}