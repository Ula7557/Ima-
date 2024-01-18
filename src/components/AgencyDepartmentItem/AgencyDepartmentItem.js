import React from 'react';
import classes from './AgencyDepartmentItem.module.scss'
import parse from 'html-react-parser'
function AgencyDepartmentItem({ item }) {
    return (
        <tr className={classes.department__item}>
            <td>
                <h4 className={classes.department__item__title}>
                    {item.title}
                </h4>
            </td>

            <td>
                <h4 className={classes.department__item__name}>
                    {parse(item.description)}
                </h4>
                <span className={classes.department__item__job}>
                    {item.position}
                </span>
            </td>

            <td>
                <div className={classes.mobile}>
                    <a href={`tel:${item.mobile}`} className={classes.department__item__mobile}>
                        {item.cont_mobile}
                    </a>
                </div>
                <div className={classes.tel}>
                <a href={`tel:${item.cont_phone}`} className={classes.department__item__tel}>
                    {item.cont_phone}
                </a>
                </div>
                <a href={`mailto:${item.cont_email}`} className={classes.department__item__mail}>
                    {item.cont_email}
                </a>
            </td>
            <td>
                <img
                    src={item.image}
                    alt="img"
                    className={classes.department__item__img}
                />
            </td>
        </tr>
    )
}

export default AgencyDepartmentItem;
