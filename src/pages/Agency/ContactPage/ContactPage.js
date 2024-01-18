/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./ContactPage.module.scss";
import ActivityArbitrageTable from "../../../components/ActivityArbitrageTable";

import Contact from "../../../components/Contact/Contact";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
const ContactPage = () => {
  const [loading, data] = useFetch(`/content/all/schedule?lang=ru`);
  if (loading) return <Loader />;
  return (
    <div className={` ${classes.general__wrapper} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Контакты", path: "/contact-agency" },
        ]}
      />
      <div className={classes.inner_wrapper}>
        <Contact />

        {/* table and map section */}
        <div className={classes.table_container}>
          <h2 className={classes.table_title}>
            График дней приема Физических и Юридических лиц
          </h2>
          {data.data && data.data ? (
            <ActivityArbitrageTable left={true} object={data.data} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
