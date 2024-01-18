import React from 'react';
import classes from './Table.module.scss'
const CollegiomTable = ({elem,name,position}) => {
  return (
     <div className={classes.Collegiom_top_table_child}>
        <p>{elem}</p>
        <h2>{name}</h2>
        <h3>{position} </h3>
     </div>
  );
};
export default CollegiomTable;


