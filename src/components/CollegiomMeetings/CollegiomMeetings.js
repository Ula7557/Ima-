import React from 'react';
import classes from './CollegiomMeetings.module.scss'
import icons from '../../assets/icons/ICON.png'
const CollegiomMeetings = ({className,text,title}) => {
  return (
      <div className={className}>
          <img src={icons} />
          <span>
              <h3>{text}</h3>
              <h4>{title}</h4>
              <h5>pdf (3.24 Mb)</h5>
          </span>
      </div>
      
  )
};

export default CollegiomMeetings;
