import React from "react";
import classes from "./collagium.module.scss";
import CollegiomMeetings from "../../../components/CollegiomMeetings";
import CollegiomTable from "../../../components/Table";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
const Collegiom = () => {
  return (
    <div className={` ${classes.Collegiom} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Коллегия", path: "/collegue-agency" },
        ]}
      />
      <div className={`container ${classes.Collegiom_top}`}>
        <div className={classes.Collegiom_top_title}>
          <h1>Коллегия</h1>
        </div>
        <div className={classes.Collegiom_top_header}>
          <h2>Ф.И.О</h2>
          <h2>Должность</h2>
        </div>
        <div className={classes.Collegiom_top_table}>
          <CollegiomTable elem={"1"} />
          <CollegiomTable elem={"2"} />
          <CollegiomTable elem={"3"} />
          <CollegiomTable elem={"4"} />
          <CollegiomTable elem={"5"} />
        </div>
      </div>
      <div className={`container ${classes.Collegiom_bottom}`}>
        <div className={classes.Collegiom_bottom_title}>
          <h1>Заседания Коллегии</h1>
        </div>
        <div className={classes.Collegiom_bottom_main}>
          <CollegiomMeetings
            className={classes.Collegiom_bottom_main_child}
            text={"20 Январь, 2018"}
            title={"План рaботы Коллегии на первое полугодие"}
          />
          <CollegiomMeetings
            className={classes.Collegiom_bottom_main_child}
            text={"20 Январь, 2018"}
            title={"План рaботы Коллегии на первое полугодие"}
          />
          <CollegiomMeetings
            className={classes.Collegiom_bottom_main_child}
            text={"20 Январь, 2018"}
            title={"План рaботы Коллегии на первое полугодие"}
          />
          <CollegiomMeetings
            className={classes.Collegiom_bottom_main_child}
            text={"20 Январь, 2018"}
            title={"План рaботы Коллегии на первое полугодие"}
          />
          <CollegiomMeetings
            className={classes.Collegiom_bottom_main_child}
            text={"20 Январь, 2018"}
            title={"План рaботы Коллегии на первое полугодие"}
          />
          <CollegiomMeetings
            className={classes.Collegiom_bottom_main_child}
            text={"20 Январь, 2018"}
            title={"План рaботы Коллегии на первое полугодие"}
          />
          <CollegiomMeetings
            className={classes.Collegiom_bottom_main_child}
            text={"20 Январь, 2018"}
            title={"План рaботы Коллегии на первое полугодие"}
          />
        </div>
      </div>
    </div>
  );
};
export default Collegiom;
