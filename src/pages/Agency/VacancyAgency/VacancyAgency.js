import React, { useEffect, useState } from "react";
import classes from "./VacancyAgency.module.scss";
import Vacency from "../../../components/Vacency";
import email from "../../../assets/icons/Vector (34).png";
import location from "../../../assets/icons/Vector (35).png";
import tel from "../../../assets/icons/Vector (37).png";
import faks from "../../../assets/icons/Vector (36).png";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { detail } from "../../../assets/db";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
const Contact = () => {
  return (
    <div className={classes.Vacency_main_middle_right}>
      <div className={classes.Vacency_main_middle_right_top}>
        <div className={classes.Vacency_main_middle_right_top_title}>
          <h1>Резюме высылать на адрес</h1>
        </div>
        <div className={classes.Vacency_main_middle_right_top_child}>
          <img src={email} />
          <p>E-mail</p>
          <a href="info@ima.uz">info@ima.uz</a>
        </div>
        <div className={classes.Vacency_main_middle_right_top_child}>
          <img src={location} />
          <p>Почтовый адрес</p>
          <a href="100011, г.Ташкент, Хадринский район, дом 33">
            100011, г.Ташкент, Хадринский район, дом 33
          </a>
        </div>
      </div>
      <div className={classes.Vacency_main_middle_right_bottom}>
        <h3>Для получения дополнительной информации, можете позвонить</h3>
        <div className={classes.Vacency_main_middle_right_bottom_child}>
          <img src={faks} />
          <span>
            <h3> Отдел кадров</h3>
            <a href="+998 (71) 232 50 44">+998 (71) 232 50 44</a>
          </span>
        </div>
        <div className={classes.Vacency_main_middle_right_bottom_child}>
          <img src={tel} />
          <span>
            <h3>Факс</h3>
            <a href="+998 (71) 232 50 44">+998 (71) 232 50 44</a>
          </span>
        </div>
        <div className={classes.Vacency_main_middle_right_bottom_child}>
          <img src={faks} />
          <span>
            <h3>Горячая линия</h3>
            <a href="+998 (71) 232 50 44">+998 (71) 232 50 44</a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default function VacancyAgency() {
  const [loading, data, error] = useFetch(`/content/all/vacancy?lang=en`);
  const [width, setWidth] = useState(2000);
  useEffect(() => {
    if (window.innerWidth < 978) {
      setWidth(window.innerWidth);
    }
  }, []);
  const [tabs, settabs] = useState("открытые вакансии");
  function setopn(params) {
    if (tabs === params) {
      settabs(null);
    } else {
      settabs(params);
    }
  }
  if (loading) return <Loader />;

  return (
    <div className={` ${classes.Vacency} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Вакансии", path: "/vacany-agency" },
        ]}
      />
      <div className={classes.Vacency_main}>
        <div className={classes.Vacency_main_title}>
          <h1>Вакансии</h1>
        </div>
        <div className={classes.Vacency_main_reaspns}>
          <button
            className={
              tabs === "открытые вакансии"
                ? `active  ${classes.clicked}`
                : classes.clicked
            }
            onClick={() => setopn("открытые вакансии")}
          >
            открытые вакансии
          </button>
          <button
            className={
              tabs === "контакты"
                ? `active  ${classes.clicked}`
                : classes.clicked
            }
            onClick={() => setopn("контакты")}
          >
            контакты
          </button>
        </div>
        <div>
          {data.data && data.data ? (
            width <= 978 ? (
              tabs === "открытые вакансии" ? (
                <Vacency obj={data.data} />
              ) : (
                <Contact />
              )
            ) : (
              <div className={classes.Vacency_main_middle}>
                <Vacency obj={data.data} />
                <Contact />
              </div>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
