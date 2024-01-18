import React from 'react'
import classes from './News.module.scss'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'

function News() {
    return (
      <div className={` ${classes.news} load-anim`}>
        <BreadCrumb
          list={[
            { title: "Главная", path: "/" },
            { title: "Новости", path: "/all-news" },
          ]}
        />
        <div className={`container ${classes.news__inner}`}>
          <h1 className={classes.news__title}>Новости</h1>

          <div className={classes.news__wrapper}>
            <div className={classes.news__left}>
              <Link className={classes.news__link} to="/all-news">
                Новости
              </Link>
              <Link className={classes.news__link} to="/press-release">
                Пресс-релиз
              </Link>

              <Link className={classes.news__link} to="/events">
                Мероприятие
              </Link>
            </div>

            <Link className={classes.news__link} to="/ad">
              Объявление
            </Link>
          </div>
        </div>
      </div>
    );
}

export default News