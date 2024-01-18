import React, { useEffect } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import classes from "./Servives.module.scss";

function Services() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/services/public");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={` ${classes.services} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Услуги", path: "/services/public" },
        ]}
      />
      <div className={`container ${classes.services__inner}`}>
        <div className={classes.services__top}>
          <h1 className={classes.services__title}>Услуги</h1>
          <NavLink to="/services/public" className={classes.services__sublink}>
            Государственные
          </NavLink>
          <NavLink
            to="/services/interactive"
            className={classes.services__sublink}
          >
            Интерактивные
          </NavLink>
        </div>
        <Outlet />
      </div>

      <div></div>
    </div>
  );
}

export default Services;
