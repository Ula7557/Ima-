import React from 'react'
import classes from "./requisitesTableData.module.scss"
function RequisitesTableData({ object, objectId}) {
  return (
    <tr className={classes.requisites__tableDataRow}>
      {
        object.content.map((item, index) => <td key={index} className={`${objectId > 3 ?  `${classes.requisites__big}` : ""} ${classes.requisites__tabledata}`} >{item}</td>)
      }
    </tr>
  )
}

export default RequisitesTableData