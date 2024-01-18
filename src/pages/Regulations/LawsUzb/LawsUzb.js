import React from "react";
import classes from "./LawsUzb.module.scss";
import BreadCrumb from "../../../components/BreadCrumb";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
import parse from "html-react-parser";
function LawsUzb() {
  const [loading, data, error] = useFetch("/content/all/acts?lang=en");

  if (loading) return <Loader />;

  return (
    <div className={` ${classes.laws} load-anim`}>

      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Нормативно правовые акты", path: "/regulations" },
          {
            title: "Законы Республики Узбекистан",
            path: "/laws-Uzbekistan",
          },
        ]}
      />

      <div className={`container ${classes.laws__inner}`}>
      
        <h1 className={classes.laws__title}>Законы Республики Узбекистан</h1>
        {data.data.map((item) => (
          <>
            {!!item.category_title &&
              item.category_title !== "" &&
              item.category_title[0]?.slug ===
                "zakoni-respubliki-uzbekistan" && (
                <a
                  className={classes.laws__link}
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

export default LawsUzb;
