import React from "react";
import classes from "./AwardedEmployees.module.scss";
import photo from "../../../assets/icons/ФОТО.png";
import photo1 from "../../../assets/icons/ФОТО (1).png";
import photo2 from "../../../assets/icons/ФОТО (2).png";
import Awardes from "../../../components/Awardes";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
export default function AwardedEmployees() {
  const [loading, data, error] = useFetch(`/content/one/page?lang=ru&id=17`);
  const [loading1, data1, error1] = useFetch(`/content/all/award?lang=ru`);
  if (loading) return <Loader />;

  return (
    <div className={` ${classes.AwardedEmployees} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Награжденные сотрудники", path: "/awards-agency" },
        ]}
      />
      <div className={classes.AwardedEmployees_main}>
        <div className={classes.AwardedEmployees_main_title}>
          <h1>{data.data?.title}</h1>
        </div>
        {data1.data && data1.data ? <Awardes item={data1.data} /> : ""}
      </div>
    </div>
  );
}
