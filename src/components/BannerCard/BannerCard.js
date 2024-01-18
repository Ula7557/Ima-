import React, { useRef } from "react";
import classes from "./BannerCard.module.scss";
import watch from "../../assets/images/watch.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftIcon from "../../assets/icons/Left.png";
import rightIcon from "../../assets/icons/Right.png";
import { useLang } from '../../context/LanguageProvider'
import Language from '../../lang'
const BannerCard = ({ count = 4 }) => {
    const [lang] = useLang();
    const ref = useRef();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: count,
        slidesToScroll: 1,


         responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <>
            <div className={classes.slider_top}>
                <p className={classes.slide_txt}>{Language[lang].titles.ads}</p>
                <div className={classes.slide_top_inner_wrap}>
                    <div className={classes.btn_wrapper}>

                        <button
                            onClick={() => ref.current.slickPrev()}>
                            <img src={leftIcon} alt="" />
                        </button>
                        <button
                            onClick={() => ref.current.slickNext()}>
                            <img src={rightIcon} alt="" />
                        </button>

                    </div>
                    <a href="google.com">Посмотреть все</a>
                </div>
            </div>
            <div className={classes.card_wrapper}>
                <Slider ref={ref} {...settings}>
                    <div className={classes.card_item}>
                        <p className={classes.card_item_lightTxt}>10 Декабрь, 2021</p>
                        <p className={classes.card_item_boldTxt}>
                            Общественный контроль в центре внимание Агентства{" "}
                        </p>
                        <p className={classes.flex_txt}>
                            <img src={watch} alt="" /> 321
                        </p>
                    </div>

                    <div className={classes.card_item}>
                        <p className={classes.card_item_lightTxt}>15 Ноябрь, 2021</p>
                        <p className={classes.card_item_boldTxt}>
                            Пресс-конференция по итогам месяца{" "}
                        </p>
                        <p className={classes.flex_txt}>
                            <img src={watch} alt="" /> 576
                        </p>
                    </div>

                    <div className={classes.card_item}>
                        <p className={classes.card_item_lightTxt}>23 Октябрь, 2021</p>
                        <p className={classes.card_item_boldTxt}>
                            Переход исключительных прав к другому лицу
                        </p>
                        <p className={classes.flex_txt}>
                            <img src={watch} alt="" /> 109
                        </p>
                    </div>

                    <div className={classes.card_item}>
                        <p className={classes.card_item_lightTxt}>30 Сентябрь, 2021</p>
                        <p className={classes.card_item_boldTxt}>
                            Общественный контроль в центре внимание Агентства
                        </p>
                        <p className={classes.flex_txt}>
                            <img src={watch} alt="" /> 333
                        </p>
                    </div>

                    <div className={classes.card_item}>
                        <p className={classes.card_item_lightTxt}>30 Сентябрь, 2021</p>
                        <p className={classes.card_item_boldTxt}>
                            Общественный контроль в центре внимание Агентства
                        </p>
                        <p className={classes.flex_txt}>
                            <img src={watch} alt="" /> 333
                        </p>
                    </div>
                </Slider>
            </div>
        </>

    )
        ;
};

export default BannerCard;
