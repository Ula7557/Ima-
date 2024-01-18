import React, { useRef, useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb'
import classes from './ActivityCooperation.module.scss'

function ActivityCooperation() {
  const ref = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/activity-cooperation/about')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    ref.current.classList = ref.current.classList[0]
  }

  const handleCustomClick = () => {
    // eslint-disable-next-line no-useless-concat
    ref.current.classList = ref.current.classList[0] + ' ' + 'active'
  }

  return (
    <div className={` ${classes.activity__cooperation} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Деятельность", path: "/agency" },
          { title: "Международное сотрудничество", path: "/departments-agency" },
        ]}
      />

      <div className={`container ${classes.activity__cooperation__inner}`}>
        <h1 className={classes.activity__cooperation__title}>
          Международное сотрудничество
        </h1>

        <div className={classes.activity__cooperation__nav__wrapper}>
          <div className={classes.activity__cooperation__navigation}>
            <NavLink
              ref={ref}
              to='/activity-cooperation/about'
              onClick={handleCustomClick}
              className={classes.activity__cooperation__nav}
            >
              О сотрудничестве
            </NavLink>

            <NavLink
              onClick={handleClick}
              to='/activity-cooperation/international-organizations'
              className={classes.activity__cooperation__nav}
            >
              Международные организации
            </NavLink>

            <NavLink
              to='/activity-cooperation/international-regulations'
              className={classes.activity__cooperation__nav}
            >
              Международные нормативные акты
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>

    </div>
  )
}

export default ActivityCooperation