import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NewsCard.module.scss'

function NewsCard({img, date, title, link='/'}) {
  return (
    <Link to={link} className={classes.news__card}>
        <img
            src={img}
            alt="img"
            className={classes.news__card__img}
        />

        <div className={classes.news__card__right}>
            <h4 className={classes.news__card__date}>
                {date}
            </h4>

            <h4 className={classes.news__card__title}>
                {title}
            </h4>
        </div>
    </Link>
  )
}

export default NewsCard