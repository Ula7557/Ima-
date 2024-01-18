import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import classes from './ActivityStatistics.module.scss'

import LineChart from '../../../components/LineChart/LineChart'
import MiniColumn from '../../../components/MiniColumn'
import BigColumn from '../../../components/BigColumn/BigColumn'

function ActivityStatistics() {

  const [windowWidth, setWindowWidth] = useState(350)

  useEffect(() => {
    if(window.innerWidth === 350) {
      setWindowWidth(250)
    }
  },[])

  return (
    <div className={` ${classes.activity__statistics} load-anim`}>
        <BreadCrumb
          list={[
            { title: "Главная", path: "/" },
            { title: "Деятельность", path: "/activity" },
            { title: "Cтатистика", path: "/activity-analytics" },
          ]}
        />

        <div className={`container ${classes.activity__statistics__inner}`}>
            <h1 className={classes.activity__statistics__title}>
                Cтатистика
            </h1>

            <LineChart height={windowWidth}/>
            <BigColumn/>
            <MiniColumn/>
        </div>
    </div>
  )
}

export default ActivityStatistics