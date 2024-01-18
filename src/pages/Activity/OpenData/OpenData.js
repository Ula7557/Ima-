import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./OpenData.module.scss";

import { openData } from "../../../assets/db";
const OpenData = () => {
  return (
    <div className={` ${classes.openData} load-anim`}>


      <BreadCrumb
        list={["Главная", "Деятельность", "Интеллектуальная собственность"]}
      />
      <div className={classes.inner_content}>
          <h2 className={classes.open_data_title}>Открытые данные</h2>
          {openData.map((el) => (

          <div className={classes.inner_content_item} key={el.id}>
            <p className={classes.open_data_txt}>{el.message} </p>
            <div className={classes.format_wrapper}>
                <button>XML</button>
                <button>CVS</button>
                <button>JSON</button>
                <button>XML</button>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default OpenData;
