/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Facebook, Instagram, Telegram } from "../../../assets/images";
import BreadCrumb from "../../../components/BreadCrumb";
import classes from "./SingleNews.module.scss";
import Img from "../../../assets/images/about-agency.png";
import AuthorImg from "../../../assets/images/mapCard.png";
import Eye from "../../../assets/icons/eye2.png";
import { useReactToPrint } from "react-to-print";
import Print from "../../../assets/icons/print.svg";
import NewsPic from "../../../assets/images/newsPic1.png";
import "./single.scss";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Loader from "../../../containers/Loader";
function SingleNews() {
  const params = useParams();
  const [loading, data, error] = useFetch(
    `/content/one/news?id=${params.newsId}&lang=ru`
  );
  const [loading1, data1, error1] = useFetch(`/content/all/news?lang=ru`);
  const [galery, setGallery] = useState([]);
  useEffect(() => {
    if (data.data) {
      const ar = [];
      for (let [key, value] of Object.entries(JSON.parse(data.data?.gallery))) {
        ar.push(value);
      }
      setGallery(ar);
    }
  }, [data]);
  const ref = useRef(null);
  const sliderRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  // img Slider settings
  const SliderConfig = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
          dots: true,
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
  const [breadcrumb, setBreadcrumb] = useState([
    { title: "Главная", path: "/" },
    { title: "Новости", path: "/all-news" },
    { title: "Каталог новости", path: "/news" },
  ]);
  useEffect(() => {
    if (!loading) {
      setBreadcrumb((prev) => [
        ...prev,
        { title: data.data?.title, path: "/all-news/" + data.data?.id },
      ]);
    }
  }, [loading]);
  if (loading) return <Loader />;
  return (
    <div className={` ${classes.single__news} load-anim`}>
      <BreadCrumb list={breadcrumb.slice(0, 4)} />

      <div ref={ref} className={`container ${classes.single__news__inner}`}>
        <h1 className={classes.single__news__title}>{data.data?.title}</h1>

        <p className={classes.single__news__date}>
          {new Date(data.data?.updated_on.replace(" ", "T")).getDate()}.
          {Number(
            new Date(data.data?.updated_on.replace(" ", "T")).getMonth() + 1
          ) < 10
            ? "0" +
              Number(
                new Date(data.data?.updated_on.replace(" ", "T")).getMonth() + 1
              )
            : Number(
                new Date(data.data?.updated_on.replace(" ", "T")).getMonth() + 1
              )}{" "}
          {new Date(data.data?.updated_on.replace(" ", "T")).getHours() +
            ":" +
            new Date(data.data?.updated_on.replace(" ", "T")).getMinutes()}
        </p>

        <div className={classes.single__news__wrapper}>
          <div className={classes.single__news__top}>
            <div className={`slide ${classes.single__news__left}`}>
              <Slider {...SliderConfig}>
                {galery.map((elem, i) => (
                  <img
                    key={i}
                    src={elem}
                    className={classes.single__news__img}
                    alt=""
                  />
                ))}
              </Slider>
            </div>

            <div className={classes.single__news__right}>
              {
                <p className={classes.single__news__text}>
                  {parse(data.data?.description)}
                </p>
              }

              <div className={classes.single__news__author}>
                <img
                  src={AuthorImg}
                  className={classes.single__news__author__img}
                  alt=""
                />

                <div>
                  <h4 className={classes.author__name}>Автор: Дониер Каюмов</h4>

                  <div className={classes.watchers__wrapper}>
                    <img className={classes.eye} src={Eye} alt="" />
                    <h4 className={classes.watchers}>321</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.single__news__bottom}>
            <div className={classes.single__news__social}>
              <h4>Поделиться в:</h4>
              <a
                href="https://web.telegram.org/k/"
                target="_blank"
                rel="noreferrer"
                className={classes.single__news__icon}
              >
                <Telegram />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className={classes.single__news__icon}
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className={classes.single__news__icon}
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
      </div>

      <div className="container">
        <div className={classes.holder}>
          <h4 className={classes.holder__text}>Другие новости</h4>

          <div
            className={classes.holder__wrapper}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <button className={classes.holder__btn}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.31677 15L8.09938 14.1557L2.10559 8.07448H15V6.86204H2.17391L8.04348 0.774439L7.31677 0L0 7.48413L7.31677 15Z"
                  fill="#0065DD"
                />
              </svg>
            </button>

            <button
              className={classes.holder__btn}
              onClick={() => sliderRef.current.slickNext()}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.68323 15L6.90062 14.1557L12.8944 8.07448H0L0 6.86204H12.8261L6.95652 0.774439L7.68323 0L15 7.48413L7.68323 15Z"
                  fill="#0065DD"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`news-item-slide ${classes.news_item_wrapper}`}>
          <Slider ref={sliderRef} {...settings}>
            {data1.data?.map((elem, i) => (
              <Link
                to={`/all-news/${elem.id}`}
                key={i}
                className={classes.news_item}
              >
                <img src={elem.image} alt="" className={classes.news_img} />
                <p className={classes.margin_bottom}>
                  {new Date(elem.updated_on.replace(" ", "T")).getDate()}.
                  {Number(
                    new Date(elem.updated_on.replace(" ", "T")).getMonth() + 1
                  ) < 10
                    ? "0" +
                      Number(
                        new Date(elem.updated_on.replace(" ", "T")).getMonth() +
                          1
                      )
                    : Number(
                        new Date(elem.updated_on.replace(" ", "T")).getMonth() +
                          1
                      )}
                </p>
                <p className={classes.news__text}>{elem.title}</p>
              </Link>
            ))}
          </Slider>
          <div className={classes.holder__wrapper__bottom}>
            <div
              className={classes.holder__wrapper}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <button className={classes.holder__btn}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.31677 15L8.09938 14.1557L2.10559 8.07448H15V6.86204H2.17391L8.04348 0.774439L7.31677 0L0 7.48413L7.31677 15Z"
                    fill="#0065DD"
                  />
                </svg>
              </button>

              <button
                className={classes.holder__btn}
                onClick={() => sliderRef.current.slickNext()}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.68323 15L6.90062 14.1557L12.8944 8.07448H0L0 6.86204H12.8261L6.95652 0.774439L7.68323 0L15 7.48413L7.68323 15Z"
                    fill="#0065DD"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
