import React from "react";
import { Link } from "react-router-dom";
import classes from "./InformationServiseContests.module.scss";
import BreadCrumb from "../../../components/BreadCrumb";
import { concurse } from "../../../assets/db";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
import { generate_date } from "../../../services/getDate";

export default function InformationServiseContests() {
  const [loading, data, error] = useFetch("/content/all/competition?lang=ru");

  if (loading) return <Loader />;
  return (
    <div className={` ${classes.InformationServiseContests} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Информационная служба", path: "/information-servise" },
          {
            title: "Конкурсы",
            path: "/informationServise-contests",
          },
        ]}
      />
      <div className={`container ${classes.InformationServiseContests_inner}`}>
        <div className={classes.InformationServiseContests_inner_title}>
          <h1>Конкурсы </h1>
        </div>
        <div className={classes.InformationServiseContests_inner_main}>
          {data.data?.map((item) => (
            <Link
              to={`/details/${item.id}`}
              className={classes.InformationServiseContests_inner_main_item}
            >
              <img src={item.image} alt={item.title} />
              <h2>{generate_date(item.created_on)}</h2>
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
