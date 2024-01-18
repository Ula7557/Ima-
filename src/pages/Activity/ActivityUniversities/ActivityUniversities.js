import React from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import classes from './ActivityUniversities.module.scss'
import FileCard from '../../../components/FileCard'

function ActivityUniversities() {
    const fakeArray = Array(5).fill('s')
    return (
    <div className={` ${classes.activity__universities} load-anim`}>

            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Деятельность", path: "/activity" },
                    { title: "Политика интеллектуальной собственности в университетах", path: "/activity-universities" },
                  ]}
            />

            <div className={`container ${classes.activity__universities__inner}`}>
                <h1 className={classes.activity__universities__title}>
                    Политика интеллектуальной собственностив университетах
                </h1>

                {
                    fakeArray.map((item, index) => (
                        <div style={{marginBottom: '20px'}} key={index}>
                            <FileCard
                    large={true}
                    title='Типовое положение ВОИС о политике в области интеллектуальной собственности для академических и научно-исследовательских учреждений'
                    memory='3.24Mb'
                    variant='word'
                />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ActivityUniversities