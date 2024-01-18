import React from 'react'
import classes from './ActivityTenders.module.scss'
import BreadCrumb from '../../../components/BreadCrumb'
import AgencyAboutItem from '../../../components/AboutAgencyListItem'

function ActivityTenders() {
    return (
    <div className={` ${classes.activity__tenders} load-anim`}>
            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Деятельность", path: "/activity" },
                    { title: "Объявления и тендеры", path: "/activity-tenders" },
                  ]}
            />

            <div className={`container ${classes.activity__tenders__inner}`}>
                <h1 className={classes.activity__tenders__title}>
                    Объявления и тендеры
                </h1>

                <div className={classes.activity__tenders__wrapper}>
                    <div className={classes.activity__tenders__left}>
                        <h3 className={classes.activity__tenders__subtitle}>
                            Реконструкция здания филиала главного коммутационного центра под административное здание на массиве «Хадра», 33 Шайхонтохурского района г. Ташкента
                        </h3>

                        <p className={classes.activity__tenders__text}>
                            В соответствии с Постановлением Президента Республики Узбекистан от 20 октября 2016 года № ПП-2637 «О мерах по совершенствованию деятельности Агентства Республики Узбекистан по интеллектуальной собственности» Положение об Агентстве Республики Узбекистан по интеллектуальной собственности Узбекистана утвержден Постановлением Кабинета Министров № 394 от 24 ноября 2016 года.
                        </p>

                        <p className={classes.activity__tenders__text}>
                            Основной целью данного решения является дальнейшее совершенствование системы правовой охраны интеллектуальной собственности в соответствии с международными нормами и стандартами, устранение неконкретных и устаревших задач, а также модернизация Агентства по интеллектуальной собственности Республики Узбекистан. Основными задачами и направлениями деятельности Агентства по интеллектуальной собственности Республики Узбекистан являются.
                        </p>
                    </div>

                    <div className={classes.activity__tenders__right}>
                        <h4 className={classes.activity__tenders__submition}>
                            В заявке редакции должны быть указаны:
                        </h4>

                        <div className={classes.activity__tenders__bottom}>
                            <AgencyAboutItem
                                text='Название и вид средства массовой информации'
                            />

                            <AgencyAboutItem
                                text='Специализация'
                            />

                            <AgencyAboutItem
                                text='Территория распространения'
                            />

                            <AgencyAboutItem
                                text='Адрес электронной почты'
                            />

                            <AgencyAboutItem
                                text='Номера телефонов и факсов редакции'
                            />

                            <AgencyAboutItem
                                text='Фамилия, имя и отчество представленного на аккредитацию корреспондента'
                            />

                            <AgencyAboutItem
                                text='Аппаратура, которую необходимо иметь при себе данному корреспонденту для выполнения профессиональных обязанностей'
                            />

                            <AgencyAboutItem
                                text='Четыре фотографии установленной формы'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityTenders