import React from 'react'
import classes from './CMICard.module.scss'
export default function CMICard({title,text}) {
    return(
        <span className={classes.CMICard} >
            <h2 className={classes.CMICard_title} >{title}</h2>
            <ul className={classes.CMICard_item} >
                {
                    text.map((item,i)=>(
                        <li key={i} >{item.subText}</li>
                    ))
                }
            </ul>
        </span>
    )
    
}