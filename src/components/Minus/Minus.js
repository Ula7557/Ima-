import React from 'react'
import classes from "./Minus.module.scss"
const Minus = (props) => {
  return (
    <div>
        <button className={classes.minus_btn}>
                    <span className={classes.minus_btn1}></span>
                    <span className={classes.minus_btn1}></span>
                  </button>
    </div>
  )
}

export default Minus