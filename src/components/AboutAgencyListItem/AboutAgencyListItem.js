import React from 'react';
import classes from './AboutAgencyListItem.module.scss'

function AboutAgencyListItem({text, link}) {
  return (
      <li className={classes.agency__about__item}>
          {text} 
          {
            link && <a className={classes.agency__about__item__link} target='_blank' href={`https://${link}`} rel="noreferrer">{link}</a>
          }
      </li>
  )
}

export default AboutAgencyListItem;
