import React from 'react'
import classes from './InternationalOrganizationsCard.module.scss'

function InternationalOrganizationsCard({ img, text, link }) {
    return (
        <div className={classes.international__organizations__card}>
            <div className={classes.international__organizations__card__top}>
                <img
                    src={img}
                    className={classes.international__organizations__card__img}
                    alt="International-organizations-card-img"
                />
            </div>

            <h4 className={classes.international__organizations__card__title}>
                {text}
            </h4>

            <a
                href={`https://${link}`}
                target='_blank'
                className={classes.international__organizations__card__link}
                rel="noreferrer"
            >
                {link}
            </a>
        </div>
    )
}

export default InternationalOrganizationsCard