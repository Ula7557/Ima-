import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./ActivityIntellectual.module.scss";
import AboutAgencyListItem from "../../../components/AboutAgencyListItem/AboutAgencyListItem";
import ActivityIntellectualIcon from "../../../assets/icons/activity-intelect.svg";

function ActivityIntellectual() {
  const fakeData = Array(3).fill("2");

  return (
    <div className={` ${classes.activity__intellectual} load-anim`}>
      <BreadCrumb
        list={[ 
            {title: "Главная", path: "/"}, 
            {title: "Деятельность", path: "/activity"}, 
            {title: "Интеллектуальная собственность", path: "/activity-intellectual"}
          ]}
      />

      <div className={`container ${classes.activity__intellectual__inner}`}>
        <h1 className={classes.activity__intellectual__title}>
          Интеллектуальная собственность
        </h1>

        <div className={classes.activity__intellectual__wrapper}>
          <h4 className={classes.activity__intellectual__text}>
            Интеллектуальная собственность – <br /> это право на результаты
            творческой деятельности человека
          </h4>
        </div>

        <h4 className={classes.activity__intellectual__subtitle}>
          <a
            target="_blank"
            href="https://online.zakon.kz/Document/?doc_id=30421270&pos=214;-33#pos=214;-33"
            rel="noreferrer"
            className={classes.activity__intellectual__link}
          >
            Гражданский Кодекс Республики Узбекистан
          </a>{" "}
          (статья 164) определяет право собственности как право лица владеть,
          пользоваться и распоряжаться принадлежащим ему имуществом по своему
          усмотрению и в своих интересах, а также требовать устранения в сяких
          нарушений его права собственности.
        </h4>
      </div>

      <div className={`container ${classes.activity__intellectual__holder}`}>
        <div className={classes.activity__intellectual__left}>
          <h4 className={classes.activity__intellectual__intellectual}>
            Объекты интеллектуальной собственности
          </h4>

          <span className={classes.activity__intellectual__helper__text}>
            В собственности могут находиться объекты интеллектуальной
            собственности{" "}
            <a
              target="_blank"
              href="https://online.zakon.kz/Document/?doc_id=30421270&pos=214;-33#pos=214;-33"
              rel="noreferrer"
              className={classes.activity__intellectual__link}
            >
              (статья 169 ГК РУз).
            </a>{" "}
            К ним относятся:
          </span>
        </div>

        <div className={classes.activity__intellectual__right}>
          {fakeData && fakeData.length > 0
            ? fakeData.map((_, index) => (
                <div
                  key={index}
                  className={classes.activity__intellectual__block}
                >
                  <h3 className={classes.activity__intellectual__helper__title}>
                    Результаты интеллектуальной деятельности
                  </h3>

                  <AboutAgencyListItem text="Произведения науки, литературы и искусства" />

                  <AboutAgencyListItem text="Исполнения, фонограммы, передачи организаций эфирного или кабельного вещания" />

                  <AboutAgencyListItem text="Программы для электронных вычислительных машин и базы данных (далее - ЭВМ)" />
                </div>
              ))
            : ""}

          <div className={classes.activity__intellectual__bottom}>
            <img
              src={ActivityIntellectualIcon}
              className={classes.activity__intellectual__img}
              alt=""
            />

            <div>
              <span className={classes.activity__intellectual__helper__text}>
                Информационная система Интеллектал мулк
              </span>

              <a
                target="_blank"
                href="https://online.zakon.kz/Document/?doc_id=30421270&pos=214;-33#pos=214;-33"
                rel="noreferrer"
                className={classes.activity__intellectual__link}
              >
                baza.ima.uz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityIntellectual;
