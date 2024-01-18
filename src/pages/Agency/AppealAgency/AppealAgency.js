import React from "react";
import classes from "./AppealAgency.module.scss";
import Table from "../../../components/Table";
import BoardAppealItem from "../../../components/BoardAppealItem";
import icon from "../../../assets/icons/ICON (3).png";
import icontel from "../../../assets/icons/Vector (33).png";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
export default function BoardAppeal() {
  const [loading, data, error] = useFetch(`/content/one/page?lang=ru&id=38`);
  const [loading1, data1, error1] = useFetch(`/content/all/appeal?lang=ru`);
  const [loading2, data2, error2] = useFetch(
    `/content/all/arbitration?lang=ru`
  );
  if (loading) return <Loader />;

  return (
    <div className={` ${classes.BoardAppeal} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Апелляционный совет", path: "/appeal-agency" },
        ]}
      />
      <div className={`container ${classes.BoardAppeal_top}`}>
        <div className={classes.BoardAppeal_top_title}>
          <h1>{data.data?.title}</h1>
        </div>
        <div className={classes.BoardAppeal_top_header}>
          <h2>Ф.И.О</h2>
          <h2>Должность</h2>
        </div>
        {data1.data && data1.data
          ? data1.data.map((item, i) => (
              <Table elem={i + 1} name={item.title} position={item.position} />
            ))
          : "We do not have information"}
      </div>
      <div className={`container ${classes.BoardAppeal_bottom}`}>
        <div className={classes.BoardAppeal_bottom_title}>
          <h1>Арбитражные решения</h1>
        </div>
        {data2.data && data2.data ? (
          <BoardAppealItem obj={data2.data} />
        ) : (
          "We do not have information "
        )}
        <div className={classes.BoardAppeal_extra_info}>
          <div className={classes.BoardAppeal_extra_info_title}>
            <h1>Порядок рассмотрения апелляций</h1>
          </div>
          <div className={classes.BoardAppeal_extra_info_main}>
            <div className={classes.BoardAppeal_extra_info_main_child}>
              <a href="https://lex.uz/doc/245254">
                Положение об Апелляционном совете Агентства по интеллектуальной
                собственности Республики Узбекистан
              </a>
              <a href="">lex.uz/doc/245254</a>
            </div>
            <div className={classes.BoardAppeal_extra_info_main_child}>
              <a href="https://lex.uz/doc/245254">
                Правила подачи и рассмотрения апелляций и заявлений в
                Апелляционном совете Агентства по интеллектуальной собственности
                Республики Узбекистан
              </a>
            </div>
            <div className={classes.BoardAppeal_extra_info_main_child}>
              <p>
                Для получения подробной информации можете обращаться по телефону
              </p>
              <h3>
                {" "}
                <img alt="" src={icontel} />{" "}
                <a href="+998 (71) 232 50 10">+998 (71) 232 50 10</a>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
