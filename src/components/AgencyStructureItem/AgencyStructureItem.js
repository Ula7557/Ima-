import React from 'react'
import classes from './AgencyStructureItem.module.scss';

function AgencyStructureItem({object,keys}) {
    return (
        <tr className={classes.council__tableDataRow}>
            <td className={classes.council__tabledata}><span className={classes.council__tableid}>{keys}</span>{object.title}</td>
            <td className={classes.council__tabledata}>{object.position}</td>
        </tr>
    )
}

export default AgencyStructureItem