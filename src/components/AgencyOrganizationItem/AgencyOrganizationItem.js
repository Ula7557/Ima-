import React from 'react';
import classes from './AgencyOrganizationItem.module.scss'

function AgencyOrganizationItem({ item }) {
    return (
        <tr className={classes.organization__item}>
            <td>
                <h4 className={classes.organization__name}>
                    {item?.position}
                </h4>
            </td>

            <td>
                <div className={classes.tel}>
                    <a href={`tel:${item.tel}`} className={classes.department__item__tel}>
                        {item?.cont_mobile}
                    </a>
                </div>
                <div className={classes.mobile}>
                    <a href={`tel:${item.mobile}`} className={classes.department__item__mobile}>
                        {item?.cont_phone}
                    </a>
                </div>
            </td>

            <td>
                <h4 className={classes.organization__address}>
                    {item?.cont_address}
                </h4>
            </td>

            <td>
                <h4 className={classes.organization__work}>
                    {item?.cont_bio}
                </h4>
                {/* <h4 className={classes.organization__info}>
                    {item.dinner}
                </h4>
                <h4 className={classes.organization__info}>
                    {item.weekend}
                </h4> */}
            </td>
        </tr>
    )
}

export default AgencyOrganizationItem;
