import React from 'react'
import RequisitesTableData from '../RequisitesTableData'
import classes from "./requisitesTable.module.scss"



function RequisitesTable({ object }) {

    return (
        <div className={classes.requisites__inner} >
            <h3 className={classes.main__title} >{object.title}<span className={classes.currency__status} >{object.currency}</span></h3>
            <table className={classes.requisites__table} >
                <thead className={classes.requisites__thead}>
                    <tr className={classes.requisites__tablerow}>
                        {
                            object.tableHead.map((item, index) => (
                                <th key={index} className={`${object.id  >  3 ?  `${classes.requisites__big}` : ""} ${classes.requisites__header}`}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        object.tableBody.map((item, index) => (
                            <RequisitesTableData key={index} object={item} objectId={object.id} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RequisitesTable