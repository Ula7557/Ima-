import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import Loader from "../../../containers/Loader";
import { useFetch } from "../../../hooks/useFetch";
import classes from "./CabinetMinisters.module.scss";

function CabinetMinisters() {
  const [loading, data, error] = useFetch("/content/all/acts?lang=en");

  if (loading) return <Loader />;

  return (
    <div className={` ${classes.cabinet} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Нормативно правовые акты", path: "/regulations" },
          {
            title: "Постановления кабинета Министров",
            path: "/cabinet-ministers",
          },
        ]}
      />

      <div className={`container ${classes.cabinet__inner}`}>
        <h2 className={classes.cabinet__title}>
          Постановления Кабинета Министров
        </h2>
        {data.data.map((item) => (
          <>
            {!!item.category_title &&
              item.category_title !== "" &&
              item.category_title[0]?.slug ===
                "ukazi-i-postanovleniya-prezidenta-respubliki" && (
                <a
                  className={classes.cabinet__link}
                  href={item.description.replace(/<\/?[^>]+(>|$)/g, "")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>{item.title}</h4>
                </a>
              )}
          </>
        ))}
      </div>
    </div>
  );
}

export default CabinetMinisters;
