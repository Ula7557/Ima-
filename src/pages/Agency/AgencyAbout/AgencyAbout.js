/* eslint-disable no-undef */
import React from "react";
import classes from "./AgencyAbout.module.scss";

// components
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import AboutAgencyListItem from "../../../components/AboutAgencyListItem/AboutAgencyListItem";

import { useFetch } from "../../../hooks/useFetch";
import parse from "html-react-parser";
import Loader from "../../../containers/Loader";
function AgencyAbout() {
  const [loading, data1, ] = useFetch(`/content/one/page?lang=ru&id=9`);

  if (loading) return <Loader />;

  return (
    <div className={` ${classes.agency__about} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Об Агентстве", path: "/about-agency" },
        ]}
      />
      <div className={`container ${classes.agency__about__inner}`}>
        <h2 className={classes.agency__about__title}>Об Агентстве</h2>

        <div className={classes.agency__about__wrapper}>
          <div className={classes.agency__about__left}>
            <img
              src={data1.data?.image}
              alt="img"
              width="500"
              height="400"
              className={classes.agency__about__img}
            />
          </div>


          <div className={classes.agency__about__right}>
            <ul className={classes.agency__about__list}>
              {data1.data ? (
                <AboutAgencyListItem text={parse(data1.data?.description)} />
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className={`container ${classes.agency__about__bottom}`}>
        <h3 className={classes.agency__about__main}>
          Правовые основы деятельности
        </h3>

        <div className={classes.agency__about__holder}>
          <div className={classes.agency__about__card}>
            <p className={classes.agency__about__text}>
              Постановление Президента Республики Узбекистан “О мерах по
              совершенствованию государственного управления в сфере
              интеллектуальной собственности
            </p>

            <span className={classes.agency__about__info}>
              ПП-4168:{" "}
              <a
                target="_blank"
                href="https://lex.uz/docs/4195426"
                rel="noreferrer"
              >
                lex.uz/docs/4195426
              </a>
            </span>
          </div>

          <div className={classes.agency__about__card}>
            <p className={classes.agency__about__text}>
              Постановление Президента Республики Узбекистан “О мерах по
              организации деятельности Агентства по интеллектуальной
              собственности при Министерстве юстиции Республики Узбекистан”
            </p>

            <span className={classes.agency__about__info}>
              ПП- 4380:{" "}
              <a
                target="_blank"
                href="https://lex.uz/docs/4395007"
                rel="noreferrer"
              >
                lex.uz/docs/4395007
              </a>
            </span>
          </div>

          <div className={classes.agency__about__card}>
            <p className={classes.agency__about__text}>
              Постановление Кабинета Министров Республики Узбекистан “Об
              утверждении Положения об Агентстве по интеллектуальной
              собственности при Министерстве юстиции Республики Узбекистан”
            </p>

            <span className={classes.agency__about__info}>
              ПКМ-609:{" "}
              <a
                target="_blank"
                href="https://lex.uz/docs/4430819"
                rel="noreferrer"
              >
                lex.uz/docs/4430819
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyAbout;
