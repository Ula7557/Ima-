import React from "react";
import classes from "./AgencyStructure.module.scss";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import SturctureImg from "../../../assets/images/structureMobile.jpg";

import { SRLWrapper } from "simple-react-lightbox";

function Structura() {
  return (
    <div className={` ${classes.agency__structure} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Структура Агентства", path: "/structura-agency" },
        ]}
      />
      <div className={`container ${classes.agency__structure__inner}`}>
        <div className={classes.structura}>
          <h2 className={classes.structura__title}>Структура Агенства</h2>

          <SRLWrapper>
            <img
              className={classes.agency__mobile__img}
              style={{ width: "100%", objectFit: "contain", height: "auto" }}
              src={SturctureImg}
              alt=""
            />
          </SRLWrapper>

          <div className={classes.structura__tree}>
            <div className={classes.structura__row}>
              <div className={classes.structura__element}>
                Илмий техник кенгаш
              </div>
              <div className={classes.structura__border}>
                Директор уринбосари
              </div>
              <div className={classes.structura__border}>
                Ихтиролар ва фойдали моделлар булими
              </div>
              <div className={classes.structura__border}>
                Товар белгилари ва товар келиб чикиш жойи номлари булими
              </div>
              <div className={classes.structura__border}>
                Саноат намуналари булими
              </div>
            </div>

            <div className={classes.structura__row}>
              <div className={classes.structura__element}>
                Адлия вазири уринбосари директори
              </div>
              <div className={classes.structura__border}>
                Директор уринбосари
              </div>
              <div className={classes.structura__border}>
                Интеллектуал мулк сохасини тахлил килиш ва ривожлантириш булими
              </div>
              <div className={classes.structura__border}>
                Интеллектуал мулк хукукдарига риоя этилиши мониторинг булими
              </div>
              <div className={classes.structura__border}>
                Ахборот технологиялари булими
              </div>
              <div className={classes.structura__border}>
                Халкаро хамкорлик булими
              </div>
            </div>

            <div className={classes.structura__row}>
              <div className={classes.structura__element}>
                Директор маслахатчиси
              </div>
              <div className={classes.structura__border}>
                Ташкилий-назорат булими
              </div>
              <div className={classes.structura__border}>
                Бошкариш, лицензиялаш, депозитлаш ва патент хужжатлари булими
              </div>
              <div className={classes.structura__border}>Юридик булим</div>
              <div className={classes.structura__border}>
                Молия-иктисод булими
              </div>
              <div className={classes.structura__border}>
                Кадрлар билан ишлаш буйича бош мутахассис
              </div>
              <div className={classes.structura__border}>
                Биринчи булим мутахассиси
              </div>
              <div className={classes.structura__border}>Матбуот котиби</div>
              <div className={classes.structura__border}>
                Мамурий-хужжатлар булими
              </div>
              <div className={classes.structura__border}>
                Интеллектуал мулк консультатив марказ ДУК
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Structura;
