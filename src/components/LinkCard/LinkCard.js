import React, { useRef } from "react";
import classes from "./LinkCard.module.scss";

import linkCard1 from "../../assets/images/linkCard1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftIcon from "../../assets/icons/Left.png";
import rightIcon from "../../assets/icons/Right.png";
import { useLang } from "../../context/LanguageProvider";
import Language from '../../lang'

const LinkCard = () => {

    const [lang] = useLang();

    const ref = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1,


         responsive: [
        
        {
                settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
         {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className={classes.position}>
            <div className={classes.link_card}>

                <div className={classes.useful_links}>
                    <p className={classes.slide_txt}>{Language[lang].titles.useFullLinks}</p>

                    <div className={classes.btn_wrapper}>
                        <button
                            onClick={() => ref.current.slickPrev()}
                        >
                            <img src={leftIcon} alt="" />
                        </button>
                        <button
                            onClick={() => ref.current.slickNext()}>
                            <img src={rightIcon} alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className={classes.linkCard_wrap}>
                <Slider ref={ref} {...settings}>
                    <div className={classes.linkCard_wraper}>
                        <img src={linkCard1} alt="" className={classes.link_card} />
                        <p className={classes.link_txt1}>Национальный правовой интернет-портал</p>
                        <p className={classes.link_txt2}>
                            <a href="huquqiyportal.uz">huquqiyportal.uz</a>
                        </p>
                    </div>

                    <div className={classes.linkCard_wraper}>
                        <img src={linkCard1} alt="" className={classes.link_card} />
                        <p className={classes.link_txt1}>Национальный правовой интернет-портал</p>
                        <p className={classes.link_txt2}>
                            <a href="huquqiyportal.uz">huquqiyportal.uz</a>
                        </p>
                    </div>
                    <div className={classes.linkCard_wraper}>
                        <img src={linkCard1} alt="" className={classes.link_card} />
                        <p className={classes.link_txt1}>Национальный правовой интернет-портал</p>
                        <p className={classes.link_txt2}>
                            <a href="huquqiyportal.uz">huquqiyportal.uz</a>
                        </p>
                    </div>


                    <div className={classes.linkCard_wraper}>
                        <img src={linkCard1} alt="" className={classes.link_card} />
                        <p className={classes.link_txt1}>Национальный правовой интернет-портал</p>
                        <p className={classes.link_txt2}>
                            <a href="huquqiyportal.uz">huquqiyportal.uz</a>
                        </p>
                    </div>

                    <div className={classes.linkCard_wraper}>
                        <img src={linkCard1} alt="" className={classes.link_card} />
                        <p className={classes.link_txt1}>Национальный правовой интернет-портал</p>
                        <p className={classes.link_txt2}>
                            <a href="huquqiyportal.uz">huquqiyportal.uz</a>
                        </p>
                    </div>


                    <div className={classes.linkCard_wraper}>
                        <img src={linkCard1} alt="" className={classes.link_card} />
                        <p className={classes.link_txt1}>Национальный правовой интернет-портал</p>
                        <p className={classes.link_txt2}>
                            <a href="huquqiyportal.uz">huquqiyportal.uz</a>
                        </p>
                    </div>

                    <div className={classes.linkCard_wraper}>
                        <img src={linkCard1} alt="" className={classes.link_card} />
                        <p className={classes.link_txt1}>Национальный правовой интернет-портал</p>
                        <p className={classes.link_txt2}>
                            <a href="huquqiyportal.uz">huquqiyportal.uz</a>
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default LinkCard;
