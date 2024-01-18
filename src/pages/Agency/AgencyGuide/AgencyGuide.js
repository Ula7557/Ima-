import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./AgencyGuide.module.scss";
import AgencyGuideUser from "../../../components/AgencyGuideUser/AgencyGuideUser";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
function AgencyGuide() {
  const [loading, data, error] = useFetch(`/content/one/page?lang=en&id=10`);
  const [loading1, data1, error1] = useFetch(`/content/all/lead?lang=ru`);
  if (loading) return <Loader />;

  return (
    <div className={` ${classes.agency__guide} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Руководство", path: "/guide-agency" },
        ]}
      />
      <div className={`container ${classes.agency__guide__inner}`}>
        <h2 className={classes.management__title}>{data.data?.title}</h2>

        {data1.data && data1.data.length > 0
          ? data1.data?.map((item, index) => (
              <AgencyGuideUser object={item} key={index} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default AgencyGuide;
