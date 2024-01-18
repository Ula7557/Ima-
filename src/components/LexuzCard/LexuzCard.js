import React from 'react'
import classes from './LexuzCard.module.scss'
import LexuzImg from '../../assets/images/lexuzcard.png'

function LexuzCard({text, link}) {
    return (
        <a
            href={link}
            target='_blank'
            className={classes.lexuz__card}
            rel="noreferrer"
        >
            <img src={LexuzImg} className={classes.lexuz__card__img} alt="" />
            <p className={classes.lexuz__card__text}>
                {text}
            </p>
        </a>
    )
}

export default LexuzCard