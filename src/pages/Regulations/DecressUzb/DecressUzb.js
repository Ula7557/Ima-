import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import Loader from "../../../containers/Loader";
import { useFetch } from "../../../hooks/useFetch";
import classes from "./DecressUzb.module.scss";

function DecressUzb() {
  const [loading, data, error] = useFetch("/content/all/acts?lang=en");

  if (loading) return <Loader />;
  return (
    <div className={` ${classes.decress} load-anim`}>

      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Нормативно правовые акты", path: "/regulations" },
          {
            title: "Указы и постановления Президента Республики",
            path: "/decrees-president",
          },
        ]}
      />

      <div className={`container ${classes.decress__inner}`}>
        <h1 className={classes.decress__title}>
          Указы и постановления Президента Республики
        </h1>

        <div className={classes.decress__wrapper}>
          {data.data.map((item) => (
            <>
              {!!item.category_title &&
                item.category_title !== "" &&
                item.category_title[0]?.slug ===
                  "ukazi-i-postanovleniya-prezidenta-respubliki" && (
                  <a
                    className={classes.decress__link}
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
    </div>
  );
}

export default DecressUzb;
