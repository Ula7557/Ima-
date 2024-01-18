import React from 'react'
import { Link } from 'react-router-dom'
import classes from './AdItem.module.scss'

function AdItem({date,text,view, link = '/'}) {
  return (
    <Link to={link} className={classes.ad__item}>
        <h4 className={classes.ad__item__date}>{date}</h4>
        <h4 className={classes.ad__item__text}>{text}</h4>
        <h4 className={classes.ad__item__view}>{view}</h4>
    </Link>
  )
}

export default AdItem