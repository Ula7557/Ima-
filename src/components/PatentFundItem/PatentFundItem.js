import React from 'react'
import classes from './PatentFundItem.module.scss'

function PatentFundItem({ time, weekend, debut, subtitle, sanitaryDay }) {
    return (
        <tr className={classes.patent__fund__item}>
            <td>
                <h4 className={classes.patent__fund__subtitle}>
                    {time}
                </h4>
                <span className={classes.patent__fund__helpertext}>
                    {weekend}
                </span>
            </td>

            <td>
                <h4 className={classes.patent__fund__subtitle}>
                    {debut}
                </h4>
                <span className={classes.patent__fund__helpertext}>
                    {subtitle}
                </span>
            </td>

            <td>
                <h4 className={classes.patent__fund__subtitle}>
                    {sanitaryDay} 
                </h4>
            </td>
        </tr>
    )
}

export default PatentFundItem