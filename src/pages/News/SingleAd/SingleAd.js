import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import { Facebook, Instagram, Telegram } from "../../../assets/images";
import classes from "./SingleAd.module.scss";
import Print from "../../../assets/icons/print.svg";
import Eye from "../../../assets/icons/eye2.png";
import { useReactToPrint } from "react-to-print";

import watch from "../../../assets/images/watch.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./helper.scss";

import leftIcon from "../../../assets/icons/Left.png";
import rightIcon from "../../../assets/icons/Right.png";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";

function SingleAd() {
  const ref = useRef(null);
  const sliderRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });
  const params = useParams();
  const [loading, data, error] = useFetch(
    `/content/all/news?lang=en&id=${params.adId}`
  );
  const [breadcrumb, setBreadcrumb] = useState([
    { title: "Главная", path: "/" },
    { title: "Новости", path: "/all-news" },
    { title: "Объявления", path: "/ad" },
  ]);
  useEffect(() => {
    if (!loading) {
      // setBreadcrumb((prev) => [
      //   ...prev,
      //   { title: data.data?.title, path: "/all-news/" + data.data?.id },
      // ]);
    }
  }, [loading]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className={` ${classes.single__ad} load-anim`}>
      <BreadCrumb list={breadcrumb.slice(0, 4)} />

      <div ref={ref} className={`container ${classes.single__ad__inner}`}>
        <h1 className={classes.single__ad__title}>
          Выдано свидетельство программе по экспресс-оценки степени активности
          фиброза печени
        </h1>

        <div className={classes.single__ad__wrapper}>
          <h4 className={classes.single__ad__date}>28 Июнь, 2017</h4>

          <div>
            <p className={classes.single__ad__text}>
              Если посмотреть историю Национальной патентной системы
              Узбекистана, 1992-2011 годы - создание Государственного патентного
              ведомства и Агентства по авторскому праву, компетентных органов по
              охране интеллектуальной собственности, изучение практического
              опыта мировой патентной системы, и были годы восстановления
              экономики.В этот период были приняты законы в области правовой
              охраны интеллектуальной собственности, в том числе: «О товарных
              знаках, знаках обслуживания и наименованиях мест происхождения
              товаров», «Об изобретениях, полезных моделях и промышленных
              образцах», «О программах для ЭВМ и базах данных», «О Селекционные
              достижения», «Об авторских и смежных правах», «Об интегральных
              топологиях микросхем», «Об охране».
            </p>

            <p className={classes.single__ad__text}>
              Также она стала членом Всемирной организации интеллектуальной
              собственности (ВОИС) и более 10 международных соглашений в сфере
              интеллектуальной собственности, а также наладила международное
              сотрудничество. Постановлением Президента Республики Узбекистан от
              24 мая 2011 года «О создании Агентства Республики Узбекистан по
              интеллектуальной собственности» Агентство Республики Узбекистан по
              интеллектуальной собственности создано на основе Государственного
              патента Управление и авторское право. В результате созданы более
              широкие условия для эффективного использования свободы
              научно-технического творчества нашего народа. Существует целостная
              система проведения единой государственной политики в сфере
              интеллектуальной собственности, обеспечивающая единый подход,
              подготовку и реализацию международных договоров нашей страны в
              этой сфере
            </p>
          </div>
        </div>

        <div className={classes.single__ad__bottom}>
          <div className={classes.single__ad__social}>
            <h4>Поделиться в:</h4>
            <a
              href="https://web.telegram.org/k/"
              target="_blank"
              rel="noreferrer"
              className={classes.single__ad__icon}
            >
              <Telegram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className={classes.single__ad__icon}
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={classes.single__ad__icon}
            >
              <Instagram />
            </a>
          </div>

          <div className={classes.watchers__wrapper}>
            <img className={classes.eye} src={Eye} alt="" />
            <h4 className={classes.watchers}>321</h4>
          </div>

          <div>
            <div onClick={handlePrint}>
              <img className={classes.print} src={Print} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container slider-bottom-wrapper">
        <div className={classes.slider_below}>
          <div className={classes.slider_top}>
            <p className={classes.slide_txt}>Другие объявления</p>
            <div className={classes.slide_top_inner_wrap}>
              <div className={classes.btn_wrapper}>
                <button onClick={() => sliderRef.current.slickPrev()}>
                  <img src={leftIcon} alt="" />
                </button>
                <button onClick={() => sliderRef.current.slickNext()}>
                  <img src={rightIcon} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className={`ads-slider ${classes.card_wrapper}`}>
              <Slider ref={sliderRef} {...settings}>
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
                  <p className={classes.card_item_lightTxt}>
                    30 Сентябрь, 2021
                  </p>
                  <p className={classes.card_item_boldTxt}>
                    Общественный контроль в центре внимание Агентства
                  </p>
                  <p className={classes.flex_txt}>
                    <img src={watch} alt="" /> 333
                  </p>
                </div>

                <div className={classes.card_item}>
                  <p className={classes.card_item_lightTxt}>
                    30 Сентябрь, 2021
                  </p>
                  <p className={classes.card_item_boldTxt}>
                    Общественный контроль в центре внимание Агентства
                  </p>
                  <p className={classes.flex_txt}>
                    <img src={watch} alt="" /> 333
                  </p>
                </div>
              </Slider>
              <div className={classes.btn_wrapper}>
                <button onClick={() => sliderRef.current.slickPrev()}>
                  <img src={leftIcon} alt="" />
                </button>
                <button onClick={() => sliderRef.current.slickNext()}>
                  <img src={rightIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleAd;