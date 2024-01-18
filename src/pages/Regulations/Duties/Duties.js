import React from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import Loader from '../../../containers/Loader';
import { useFetch } from '../../../hooks/useFetch';
import classes from './Duties.module.scss'

function Duties() {
     const [loading, data, error] = useFetch("/content/all/acts?lang=en");

     if (loading) return <Loader />;

  return (
    <div className={` ${classes.duties} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Нормативно правовые акты", path: "/regulations" },
          {
            title: "Тарифы и пошлины",
            path: "/tariffs-duties",
          },
        ]}
      />

      <div className={`container ${classes.duties__inner}`}>
        <h1 className={classes.duties__title}>Тарифы и пошлины</h1>
        {data.data.map((item) => (
          <>
            {!!item.category_title &&
              item.category_title !== "" &&
              item.category_title[0]?.slug === "tarifi-i-poshlini" && (
                <a
                  className={classes.duties__link}
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
  );
}

export default Duties