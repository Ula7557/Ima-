import React from "react";
import AgencyDepartmentItem from "../../../components/AgencyDepartmentItem/AgencyDepartmentItem";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./AgencyDepartment.module.scss";

import Image from "../../../assets/images/department-icon.png";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
function AgencyDepartment() {
  const [loading, data, error] = useFetch(`/content/one/page?lang=en&id=13`);
  const [loading1, data1, error1] = useFetch(
    `/content/all/agency_part?lang=ru`
  );
  if (loading) return <Loader />;
  return (
    <div className={` ${classes.agency__department} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Отделы агентства", path: "/departments-agency" },
        ]}
      />
      <div className={`container ${classes.agency__department__inner}`}>
        <h2 className={classes.agency__department__title}>
          {data.data?.title}
        </h2>

        <table className={classes.agency__department__table}>
          <tbody>
            {data1.data && data1.data
              ? data1.data.map((item, index) => (
                  <AgencyDepartmentItem item={item} key={index} />
                ))
              : "Пока нет информации"}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AgencyDepartment;
