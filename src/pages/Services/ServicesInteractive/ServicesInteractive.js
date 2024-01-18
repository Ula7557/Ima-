import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ServicesInteractive.module.scss'

function ServicesInteractive() {
  return (
    <div className={` ${classes.service__interactive} load-anim`}>

      <div className={classes.service__interactive__left}>
        <Link to='/patent-registeration' className={classes.service__interactive__link}>
          Регистрация патентных поверренных
        </Link>

        <Link to='/attestation' className={classes.service__interactive__link}>
          Проведение аттестации кандидата в патентные поверенные
        </Link>

        <Link to='/patent-attestation' className={classes.service__interactive__link}>
          Проведение аттестации патентных поверенных
        </Link>
      </div>
    </div>
  )
}

export default ServicesInteractive