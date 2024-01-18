import React from 'react'
import { Link } from 'react-router-dom'
import classes from './ServicesPublic.module.scss'

function ServicesPublic() {
  return (
    <div className={` ${classes.service__public} load-anim`}>

      <div className={classes.service__public__left}>
        <Link to='/inventions' className={classes.service__public__link}>
          Изобретения
        </Link>

        <Link to='/utility-models' className={classes.service__public__link}>
          Полезные модели
        </Link>

        <Link to='/services-appellations' className={classes.service__public__link}>
          Наименования мест происхождения товаров
        </Link>

        <Link to='/services-programs' className={classes.service__public__link}>
          Программы для ЭВМ и базы данных
        </Link>

        <Link to='/services-design' className={classes.service__public__link}>
          Промышленные образцы
        </Link> 
      </div>

      <div className={classes.service__public__right}>
        <Link to='/services-breeding' className={classes.service__public__link}>
          Селекционные достижения
        </Link>

        <Link to='/service-marks' className={classes.service__public__link}>
          Товарные знаки, знаки обслуживания
        </Link>

        <Link to='/services-topologies' className={classes.service__public__link}>
          Топологии интегральных микросхем
        </Link>
      </div>
    </div>
  )
}

export default ServicesPublic