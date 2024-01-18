import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./home.module.scss";
import Card from "../../components/Card/Card";
import LinkCard from "../../components/LinkCard/LinkCard";
import Contact from "../../components/Contact/Contact";
import Subscribtion from "../../components/Subscription/Subscribtion";
import Footer from "../../containers/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import MapIcon from "../../components/Map/MapIcon";
import BannerCard from "../../components/BannerCard/BannerCard";
import { CARDTEXT } from "../../assets/db";
import { CARDMENU } from "../../assets/db";
import RoundCarusel from "../../components/RoundCarusel";
import leftIcon from "../../assets/icons/Left.png";
import rightIcon from "../../assets/icons/Right.png";
import { useLang } from "../../context/LanguageProvider";
import Language from "../../lang";
import { Slider2 } from "../../assets/db";
import TopSlider from "../../components/TopSlider";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../containers/Loader";
const Home = () => {
  const [loading, data, error] = useFetch(`/content/all/news?lang=ru`);
  const ref = useRef();
  const [card, setCard] = useState(
    CARDTEXT.filter((el) => el.part === "ГОСУДАРСТВЕННЫЕ")
  );
  const [colmen, setColmen] = useState("ГОСУДАРСТВЕННЫЕ");
  const InputOpenState = useSelector((state) => state.InputState.state);

  const [lang] = useLang();

  const [slimenu, setSlimenu] = useState("gallery");
  const [sli, setSli] = useState(Slider2.filter((a) => a.title === slimenu));
  function changePart(param) {
    let kistSlider = Slider2.filter((a) => a.title === param);
    setSli(kistSlider);
    setSlimenu(param);
  }
  if (loading) return <Loader />;

  return (
    <div
      className={` ${
        InputOpenState ? classes.container_all : classes.container
      } load-anim`}
    >
      {/* <Header /> */}
      {/* ^^^^^^ SECTION1 ^^^^^^ */}
      <div className={classes.section1}>
        <TopSlider data={data.data} />
        <div className={classes.slider_below}>
          {/* card part */}

          <div>
            <BannerCard />
          </div>
        </div>
      </div>

      {/* ^^^^^^ SECTION2 ^^^^^^^ */}

      <div className={classes.bg_div}>
        <div className={classes.section2}>
          <div className={classes.txt_wrap}>
            <p className={classes.large_txt}>
              {Language[lang].titles.services}
            </p>
            {/* <div className={classes.section2_flex_txt}>
                        {
                            CARDMENU.map((elem,i) => (
                                <p key={i} onClick={() => show(elem.link)} className={colmen === elem.link ? classes.underline_txt : classes.disabled_txt}>{elem.link}</p>
                            ))
                        }
                        <p></p>
                        <p></p>
                                </div> */}
          </div>
          <div className={classes.card_container}>
            {card.map((elem, i) => (
              <Card
                img={elem.img}
                title={elem.title}
                link={elem.link}
                text={elem.text}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ^^^^^^^^ SECTION3 ^^^^^^^^ */}

      <div className={classes.section3}>
        <div className="container">
          <div className={classes.round_div}>
            <RoundCarusel />
          </div>
          <div className={classes.slider_bottom}>
            <div className={classes.txt_flex}>
              <p className={classes.slide_txt4}>
                {Language[lang].titles.media}
              </p>
              <div className={classes.media_flex_div}>
                <p
                  onClick={() => changePart("gallery")}
                  className={
                    slimenu === "gallery"
                      ? `active ${classes.slide_txt5}`
                      : classes.slide_txt5
                  }
                >
                  {Language[lang].titles.gallery}
                </p>
                <p
                  onClick={() => changePart("videoGallery")}
                  className={
                    slimenu === "videoGallery"
                      ? `active ${classes.slide_txt5}`
                      : classes.slide_txt5
                  }
                >
                  {Language[lang].titles.videoGallery}
                </p>
              </div>
            </div>
            <div className={classes.slide_top_inner_wrap}>
              <div className={classes.btn_wrapper}>
                <button onClick={() => ref.current.slickPrev()}>
                  <img src={leftIcon} alt="" />
                </button>
                <button onClick={() => ref.current.slickNext()}>
                  <img src={rightIcon} alt="" />
                </button>
              </div>
              <Link to="/contact-agenct">{Language[lang].titles.viewAll}</Link>
            </div>
          </div>
          <div className={classes.carusel_bottom}>
            <Slider ref={ref}>
              {sli.map((item, i) =>
                item.page.map((el) => (
                  <div>
                    <Banner key={i} pages={el.page_item} amount={item.amount} />
                  </div>
                ))
              )}
            </Slider>
          </div>
        </div>
      </div>
      {/* SECTION4 */}
      <div className={classes.section4}>
        <MapIcon />
      </div>

      {/* ^^^^^^ SECTION5 ^^^^^^^ */}

      <div className={classes.section5}>
        <div className={classes.link_container}>
          <LinkCard />
        </div>
        <div className={classes.contact_container}>
          <Contact />
        </div>
      </div>


      {/* SECTION6 */}

      <div className={classes.section6}>
        <Subscribtion />
      </div>

      {/* SECTION7 */}

      <div className={classes.section7}>
        <Footer />
      </div>
    </div>
  );
};


export default Home;
