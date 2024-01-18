import React from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import Loader from '../../../containers/Loader';
import { useFetch } from '../../../hooks/useFetch';
import classes from './IndustryRegulations.module.scss'

function IndustryRegulations() {
  const [loading, data, error] = useFetch("/content/all/acts?lang=en");

  if (loading) return <Loader />;


  return (
    <div className={` ${classes.industry} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Нормативно правовые акты", path: "/regulations" },
          {
            title: "Отраслевые нормативно-правовые акте",
            path: "/industry-regulations",
          },
        ]}
      />

      <div className={`container ${classes.industry__inner}`}>
        <h2 className={classes.industry__title}>
          Отраслевые нормативно-правовые акте
        </h2>

        <div className={classes.industry__holder}>
          {data.data.map((item) => (
            <>
              {!!item.category_title &&
                item.category_title !== "" &&
                item.category_title[0]?.slug ===
                  "otraslevie-normativno-pravovie-akte" && (
                  <a
                    className={classes.industry__link}
                    href={item.description.replace(/<\/?[^>]+(>|$)/g, "")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4>{item.title}</h4>
                  </a>
                )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndustryRegulations