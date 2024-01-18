import React from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import FileCard from "../../../components/FileCard";
import Loader from "../../../containers/Loader";
import { useFetch } from "../../../hooks/useFetch";
import classes from "./Projects.module.scss";
import parse from 'html-react-parser'
function Projects() {
  const [loading, data, error] = useFetch("/content/one/page?lang=ru&id=83");

  if (loading) return <Loader />;
  const { description, title, extra_desc, file } = data.data;
  return (
    <div className={` ${classes.projects} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Нормативно правовые акты", path: "/regulations" },
          {
            title: "Проекты",
            path: "/projects",
          },
        ]}
      />

      <div className={`container ${classes.projects__inner}`}>
        <h1 className={classes.projects__title}>{title}</h1>

        <h3 className={classes.projects__subtitle}>{parse(description)}</h3>

        <div className={classes.parsed}>{parse(extra_desc)}</div>

        <div className={classes.projects__holder}>
          <FileCard
            large={true}
            file={JSON.parse(file)[0]}
            title="Соглашение между Пpавительством Республики Узбекистан и Пpавительством Гpузии о сотpудничестве области охpаны пpомышленной собственности"
            memory="3.24 Mb"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
