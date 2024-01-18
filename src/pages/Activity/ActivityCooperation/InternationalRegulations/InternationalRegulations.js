import React from 'react';
import classes from './InternationalRegulations.module.scss';
import InternationalList from '../../../../components/ImrenationalList'

function InternationalRegulations() {

  return (
    <div className={` ${classes.international__regulations} load-anim`}>
        <InternationalList/>
    </div>
  );
}

export default InternationalRegulations;
