import React from "react";

import AgencyOrganizationItem from "../../../components/AgencyOrganizationItem";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import FileCard from "../../../components/FileCard";

import classes from "./AgencyOrganizations.module.scss";

import ipCenterImage from "../../../assets/icons/ipcenter.png";
import { useFetch } from "../../../hooks/useFetch";
import parse from "html-react-parser";
import Loader from "../../../containers/Loader";
function AgencyOrganizations() {
  const [loading, data, error] = useFetch(`/content/one/page?lang=en&id=21`);
  if (loading) return <Loader />;

  return (
    <div className={` ${classes.agency__organization} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          {
            title: "Подведомтсвенные организации",
            path: "/organizations-agency",
          },
        ]}
      />
      <div className={`container ${classes.agency__organization__inner}`}>
        <h2 className={classes.agency__organization__title}>
          {data.data?.title}
        </h2>

        <div className={classes.agency__organization__wrapper}>
          <h4 className={classes.agency__organization__text}>
            {data.data && parse(data.data.description)}
          </h4>
        </div>
        <h3 className={classes.agency__organization__subtitle}>
          {data.data?.cont_name}
        </h3>
        <table className={classes.agency__organization__table}>
          <thead>
            <tr>
              <td>Директор</td>

              <td>Контакты</td>

              <td>Адрес</td>

              <td>Режим работы</td>
            </tr>
          </thead>
          <tbody>
            {data.data && data.data ? (
              <AgencyOrganizationItem item={data.data} />
            ) : (
              ""
            )}
          </tbody>
        </table>

        <div className={classes.agency__organization__table__mobile}>
          <div className={classes.agency__organization__mobile__wrapper}>
            <h4 className={classes.agency__organization__mobile__title}>
              Директор
            </h4>

            <h4 className={classes.agency__organization__mobile__subtitle}>
              {data.data?.position}
            </h4>
          </div>

          <div className={classes.agency__organization__mobile__wrapper}>
            <h4 className={classes.agency__organization__mobile__title}>
              Контакты:
            </h4>

            <a
              href={`tel:${data.data?.tel}`}
              className={classes.agency__organization__mobile__subtitle}
            >
              Тел: {data.data?.cont_phone}
            </a>

            <a
              href={`tel:${data.data?.mobile}`}
              className={classes.agency__organization__mobile__subtitle}
            >
              Факс: {data.data?.cont_mobile}
            </a>
          </div>

          <div className={classes.agency__organization__mobile__wrapper}>
            <h4 className={classes.agency__organization__mobile__title}>
              Адрес:
            </h4>

            <h4 className={classes.agency__organization__mobile__subtitle}>
              {data.data?.address}
            </h4>
          </div>

          <div className={classes.agency__organization__mobile__wrapper}>
            <h4 className={classes.agency__organization__mobile__title}>
              Режим работы:
            </h4>

            <h4 className={classes.agency__organization__mobile__subtitle}>
              {data.data?.cont_bio}
            </h4>

            {/* <h4  className={classes.agency__organization__mobile__text}>
                            {data.data?.weekend}
                        </h4> */}
          </div>
        </div>

        <div className={classes.agency__organization__bottom}>
          <div className={classes.agency__organization__holder}>
            <img
              src={ipCenterImage}
              className={classes.agency__organization__img}
              alt="ipcenter"
            />

            <div>
              <span className={classes.agency__organization__unique}>
                Государственное унитарное предприятие
              </span>
              <a
                className={classes.agency__organization__link}
                href="https://ipcenter.uz"
                target="_blank"
                rel="noreferrer"
              >
                ipcenter.uz
              </a>
            </div>
          </div>

          <FileCard memory="3.24Mb" />
        </div>
      </div>
    </div>
  );
}

export default AgencyOrganizations;
