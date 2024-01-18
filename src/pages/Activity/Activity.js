import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import classes from "./Activity.module.scss";

import { Link } from "react-router-dom";

function Activity() {
  return (
    <div className={` ${classes.activity} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Деятельность", path: "/activity" },
        ]}
      />
      <div className={`container ${classes.activity__inner}`}>
        <h1 className={classes.activity__title}>Деятельность</h1>

        <div className={classes.activity__wrapper}>
          <div className={classes.activity__left}>
            <Link
              to="/activity-intellectual"
              className={classes.activity__link}
            >
              Интеллектуальная собственность
            </Link>

            <Link to="/activity-patent" className={classes.activity__link}>
              Патентные поверенные
            </Link>

            <Link to="/activity-cooperation" className={classes.activity__link}>
              Международное сотрудничество
            </Link>

            <Link to="/activity-corruption" className={classes.activity__link}>
              Борьба с коррупцией
            </Link>

            <Link to="/activity-arbitrage" className={classes.activity__link}>
              Судебная практика
            </Link>

            <Link to="/activity-analytics" className={classes.activity__link}>
              Статистика и аналитика
            </Link>

            <Link to="/activity-tenders" className={classes.activity__link}>
              Объявления и тендеры
            </Link>
          </div>

          <div className={classes.activity__right}>
            <Link to="/activity-open-data" className={classes.activity__link}>
              Открытые данные
            </Link>
            <Link to="/activity-arbitration" className={classes.activity__link}>
              Арбитражные решения
            </Link>

            <Link to="/activity-licensing" className={classes.activity__link}>
              Лицензирование
            </Link>

            <Link
              to="/activity-e-government"
              className={classes.activity__link}
            >
              Электронное правительство
            </Link>

            <Link to="/activity-appeal" className={classes.activity__link}>
              Обращение граждан
            </Link>

            <Link
              to="/activity-universities"
              className={classes.activity__link}
            >
              Политика интеллектуальной собственности в университетах
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
