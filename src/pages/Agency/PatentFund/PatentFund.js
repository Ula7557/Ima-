/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./PatentFund.module.scss";
import FundImage from "../../../assets/images/fund.png";
import PatentFundItem from "../../../components/PatentFundItem/PatentFundItem";
import { useFetch } from "../../../hooks/useFetch";
import parse from "html-react-parser";
import Loader from "../../../containers/Loader";
function PatentFund() {
  const [loading, data, error] = useFetch(`/content/one/page?lang=ru&id=46`);
  if (loading) return <Loader />;

  return (
    <div className={` ${classes.patent__fund} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          {
            title: "Государственный патентный фонд",
            path: "/patent-fund",
          },
        ]}
      />
      <div className={`container ${classes.patent__fund__inner}`}>
        <h2 className={classes.patent__fund__title}>{data.data?.title}</h2>

        <div className={classes.patent__fund__wrapper}>
          <div className={classes.patent__fund__left}>
            <img
              src={data.data?.image}
              alt="fund-image"
              width="500"
              height="400"
              className={classes.patent__fund__img}
            />
          </div>

          <div className={classes.patent__fund__right}>
            {data.data && data.data ? (
              <p className={classes.patent__fund__text}>
                {parse(data.data.description)}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={classes.patent__fund__bottom}>
          <table>
            <thead>
              <tr>
                <th className={classes.patent__fund__thead}>Режим работы</th>

                <th className={classes.patent__fund__thead}>
                  Время обслуживание
                </th>

                <th className={classes.patent__fund__thead}>Санитарный день</th>
              </tr>
            </thead>
            <tbody>
              {data.data && data.data ? (
                <PatentFundItem
                  time={parse(data.data.extra_desc)}
                  debut={data.data.cont_bio}
                  sanitaryDay={data.data.extra_text}
                />
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
        {data.data && data.data ? (
          <div className={classes.patent__fund__mobile}>
            <div className={classes.patent__fund__mobile__wrapper}>
              <h3 className={classes.patent__fund__mobile__title}>
                Режим работы:
              </h3>
              <h4 className={classes.patent__fund__mobile__subtitle}>
                {parse(data.data.extra_desc)}
              </h4>
              {/* <p className={classes.patent__fund__mobile__text}>
                                Выходные дни Cб – Вс
                            </p> */}
            </div>

            <div className={classes.patent__fund__mobile__wrapper}>
              <h3 className={classes.patent__fund__mobile__title}>
                Время обслуживание:
              </h3>
              <h4 className={classes.patent__fund__mobile__subtitle}>
                {data.data.cont_bio}
              </h4>
            </div>

            <div className={classes.patent__fund__mobile__wrapper}>
              <h3 className={classes.patent__fund__mobile__title}>
                Санитарный день:
              </h3>
              <h4 className={classes.patent__fund__mobile__subtitle}>
                {data.data.extra_text}
              </h4>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PatentFund;
