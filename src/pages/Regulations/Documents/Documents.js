import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import Loader from "../../../containers/Loader";
import { useFetch } from "../../../hooks/useFetch";
import classes from "./Documents.module.scss";

function Documents() {
     const [loading, data, error] = useFetch("/content/all/acts?lang=en");

     if (loading) return <Loader />;

  return (
    <div className={` ${classes.document} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Нормативно правовые акты", path: "/regulations" },
          {
            title: "Документы утратившие силу",
            path: "/documents-invalidated",
          },
        ]}
      />

      <div className={`container ${classes.document__inner}`}>
        <h1 className={classes.document__title}>Документы утратившие силу</h1>

        <div className={classes.document__holder}>
          {data.data.map((item) => (
            <>
              {!!item.category_title &&
                item.category_title !== "" &&
                item.category_title[0]?.slug ===
                  "dokumenti-utrativshie-silu" && (
                  <a
                    className={classes.document__link}
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

export default Documents;
