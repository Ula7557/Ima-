import React from 'react'
import classes from './ActivityCorruptionProivide.module.scss'
import FileCard from '../../../../components/FileCard'

function ActivityCorruptionProivide() {
  let fakeArr = Array(12).fill('s')
  return (
    <div className={` ${classes.activity__corruption__provide} load-anim`}>

      {
        fakeArr.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <FileCard
              large={true}
              title='Правила этики поведения сотрудников Агентство интеллектуальной собственности при министерстве юстиции Республики Узбекистан и подведомственных организаций'
              memory='413.7 Kb'
            />
          </div>
        ))
      }
    </div>
  )
}

export default ActivityCorruptionProivide