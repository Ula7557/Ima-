import React from "react";
import classes from "./ActivityAppeal.module.scss";
import tel from "../../../assets/icons/Vector (37).png";
import faks from "../../../assets/icons/Vector (36).png";
import BreadCrumb from "../../../components/BreadCrumb";
import ActivityArbitrageTable from "../../../components/ActivityArbitrageTable";
import { ger, germob } from "../../../assets/db";
export default function ActivityAppeal() {
  return (
    <div className={` ${classes.ActivityAppeal} load-anim`}>

      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Деятельность", path: "/activity" },
          { title: "Обращение граждан", path: "/activity-appeal" },
        ]}
      />

      <div className={`container ${classes.ActivityAppeal_item}`}>
        <h1>Обращение граждан</h1>
        <div className={classes.ActivityAppeal_item_header}>
          <h1>График дней приема Физических и Юридических лиц </h1>
          <ActivityArbitrageTable left={true} object={ger} object1={germob} />
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
    </div>
  );
}
