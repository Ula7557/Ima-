import React from 'react'
import classes from './Regulations.module.scss'
import {Link} from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'

function Regulations() {
  return (
    <div className={` ${classes.regulations} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Нормативно правовые акты", path: "/regulations" },
        ]}
      />
      <div className={ `container ${classes.regulations_container} ` }>
        <h1>Нормативно-правовые акты</h1>
        <div className={classes.regulations_item}>
          <div className={classes.service__regulations__left}>
            <Link to='/international-regulations' className={classes.service__regulations__link}>
            Международные нормативные акты
            </Link>

            <Link to='/laws-Uzbekistan' className={classes.service__regulations__link}>
            Законы Республики Узбекистан
            </Link>

            <Link to='/decrees-president' className={classes.service__regulations__link}>
            Указы и постановления Президента
            </Link>

            <Link to='/cabinet-ministers' className={classes.service__regulations__link}>
            Постановления кабинета Министров
            </Link>

            <Link to='/industry-regulations' className={classes.service__regulations__link}>
            Отраслевые нормативно-правовые акты
            </Link> 
          </div>
          <div className={classes.service__regulations__right}>
            <Link to='/documents-invalidated ' className={classes.service__regulations__link}>
            Документы утратившие силу
            </Link>

            <Link to='/tariffs-duties ' className={classes.service__regulations__link}>
            Тарифы и пошлины
            </Link>

            <Link to='/projects' className={classes.service__regulations__link}>
            Проекты
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regulations