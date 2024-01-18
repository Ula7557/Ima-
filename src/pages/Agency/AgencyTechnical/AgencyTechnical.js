import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./AgencyTechnical.module.scss";
import AgencyGuideItem from "../../../components/AgencyStructureItem/AgencyStructureItem";
import CollegiomMeetings from "../../../components/CollegiomMeetings";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
function AgencyTechnical() {
  const [loading, data, error] = useFetch(`/content/one/page?lang=en&id=31`);
  const [loading1, data1, error1] = useFetch(`/content/all/council?lang=ru`);
  if (loading) return <Loader />;
  return (
    <div className={` ${classes.agency__guide} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Руководство", path: "/technical-agency" },
        ]}
      />
      <div className={`container ${classes.agency__guide__inner}`}>
        <div className={classes.council}>
          <h2 className={classes.council__title}>{data.data?.title}</h2>
          <table className={classes.council__table}>
            <thead className={classes.council__thead}>
              <tr className={classes.council__tablerow}>
                <th className={classes.council__header}>Ф.И.О</th>
                <th className={classes.council__header}>Должность</th>
              </tr>
            </thead>
            <tbody>
              {data1?.data && data1.data
                ? data1.data.map((item, index) => (
                    <AgencyGuideItem object={item} keys={index + 1} />
                  ))
                : "We do not have information!"}
            </tbody>
          </table>
          <div className={classes.Collegiom_bottom_main}>
            <CollegiomMeetings
              className={classes.Collegiom_bottom_main_child}
              title="План работы НТС"
            />
            <CollegiomMeetings
              className={classes.Collegiom_bottom_main_child}
              title="План работы НТС"
            />
            <CollegiomMeetings
              className={classes.Collegiom_bottom_main_child}
              title="План работы НТС"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyTechnical;
