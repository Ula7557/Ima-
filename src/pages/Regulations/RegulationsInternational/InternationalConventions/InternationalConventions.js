import React from "react";
import classes from "./InternationalConventions.module.scss";
import FileCard from "../../../../components/FileCard";
import { useFetch } from "../../../../hooks/useFetch";
export default function RegulationsInternational() {
  const [loading, data, error] = useFetch("/content/all/acts?lang=en");
  if (error) return <>Something went wrong ...</>;
  if (loading) return <>Loading ... </>;
  return (
    <>
      <div
        className={` ${classes.RegulationsInternational_container_items} load-anim`}
      >
        <div className={classes.regulations_container__items__item}>
          {data?.data.map((el, index) => (
            <div className={classes.item_card}>
              <FileCard
                key={index}
                large={true}
                title={el.title}
                file={el.file}
                variant={el.file}
                memory="39Kb"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
