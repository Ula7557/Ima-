import React from 'react'
import classes from './ActivityCorruptionMessage.module.scss'
import FileCard from '../../../../components/FileCard'

function ActivityCorruptionMessage() {
  return (
    <div className={` ${classes.activity__corruption__message} load-anim`}>

        <FileCard
          large={true}
          title='Обращение иректора Агентства по интеллектуальной собственности при Министерстве юстиции Республики Узбекистан'
          memory='3.24 Mb'
        />
    </div>
  )
}

export default ActivityCorruptionMessage