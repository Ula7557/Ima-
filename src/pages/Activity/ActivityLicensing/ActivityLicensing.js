import React from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import classes from './ActivityLicensing.module.scss'
import License from '../../../assets/images/license.png'
import LexUz from '../../../assets/images/lexuz.png'

function ActivityLicensing() {
    return (
    <div className={` ${classes.activity__licensing} load-anim`}>
            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Деятельность", path: "/activity" },
                    { title: "Лицензирование", path: "/activity-licensing" },
                  ]}
            />

            <div className={`container ${classes.activity__licensing__inner}`}>
                <h1 className={classes.activity__licensing__title}>
                    Лицензирование
                </h1>

                <div className={classes.activity__licensing__wrapper}>
                    <img
                        src={License}
                        alt="License img"
                        className={classes.activity__licensing__img}
                    />

                    <div className={classes.activity__licensing__right}>
                        <div
                            className={classes.activity__licensing__holder}
                        >
                            <p className={classes.activity__licensing__text}>
                                В соответствии с постановлением Олий Мажлиса Республики Узбекистан от 12 мая 2001 года № 222-II «О Перечне видов деятельности, на осуществление которых требуются лицензии» виды деятельности по воспроизведению, реализации, прокату аудиовизуальных произведений, фонограмм и программ для ЭВМ, а также изготовлению фонограмм являются лицензируемыми видами деятельности
                            </p>

                            <p className={classes.activity__licensing__text}>
                                Правоотношения вышеуказанных лицензируемых видов деятельности регулируется в соответствии с «Положением о лицензировании видов деятельности по воспроизведению, реализации, прокату аудиовизуальных произведений, фонограмм и программ для ЭВМ, а также изготовлению фонограмм», утвержденное приложением №1 к постановлению Кабинета Министров Республики Узбекистан от 15.03.2012 года №72 (далее – Положение)
                            </p>

                            <p className={classes.activity__licensing__text}>
                                На право осуществления видов деятельности по воспроизведению, реализации, прокату аудиовизуальных произведений, фонограмм и программ для ЭВМ, а также изготовлению фонограмм выдаются типовые (простые) лицензии.
                            </p>

                            <p className={classes.activity__licensing__text}>
                                В соответствии с пунктом 5 Положения виды деятельности по воспроизведению, реализации, прокату аудиовизуальных произведений, фонограмм и программ для ЭВМ, а также изготовлению фонограмм осуществляются юридическими лицами.
                            </p>

                            <p className={classes.activity__licensing__text}>
                                Решения о выдаче лицензий, приостановлении или прекращении действия лицензии, а также ее аннулировании и переоформлении принимаются Агентством по интеллектуальной собственности Республики Узбекистан (лицензирующий орган).
                            </p>

                            <p className={classes.activity__licensing__text}>
                                Постановлению Кабинета Министров Республики Узбекистан от 15.03.2012 года №72
                            </p>
                        </div>

                        <div className={classes.activity__licensing__bottom}>
                            <img
                                src={LexUz}
                                className={classes.activity__licensing__icon}
                                alt="lex uz"
                            />
                            <a
                                href="https://www.lex.uz/acts/52278"
                                target='_blank'
                                className={classes.activity__licensing__link} rel="noreferrer"
                            >
                                Постановление кабинета министров Республики Узбекистан
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityLicensing