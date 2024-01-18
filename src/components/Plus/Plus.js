import React from 'react'
import classes from "./Plus.module.scss"
const Plus = (props) => {
  return (
    <div>
        <button className={classes.plus_btn}>
                    <span className={classes.plus_btn1}></span>
                    <span className={classes.plus_btn1}></span>
                  </button>
    </div>
  )
}

export default Plus