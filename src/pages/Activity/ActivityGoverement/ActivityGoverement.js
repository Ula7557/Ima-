import React from 'react'
import classes from './ActivityGoverement.module.scss'
import BreadCrumb from '../../../components/BreadCrumb'

import MeetingImg from '../../../assets/images/meeting.png'

function ActivityGoverement() {
    return (
    <div className={` ${classes.activity__government} load-anim`}>

            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Деятельность", path: "/activity" },
                    { title: "Электронное правительство", path: "/activity-e-government" },
                  ]}
            />

            <div className={`container ${classes.activity__government__inner}`}>
                <h1 className={classes.activity__government__title}>
                    Электронное правительство
                </h1>

                <div className={classes.activity__government__wrapper}>
                    <img
                        src={MeetingImg}
                        alt="meeting img"
                        className={classes.activity__government__img}
                    />

                    <div className={classes.activity__government__right}>
                        <p
                            className={classes.activity__government__text}
                        >
                            В соответствии с постановлением Олий Мажлиса Республики Узбекистан от 12 мая 2001 года № 222-II «О Перечне видов деятельности, на осуществление которых требуются лицензии» виды деятельности по воспроизведению, реализации, прокату аудиовизуальных произведений, фонограмм и программ для ЭВМ, а также изготовлению фонограмм являются лицензируемыми видами деятельности
                        </p>

                        <p
                            className={classes.activity__government__text}
                        >
                            Правоотношения вышеуказанных лицензируемых видов деятельности регулируется в соответствии с «Положением о лицензировании видов деятельности по воспроизведению, реализации, прокату аудиовизуальных произведений, фонограмм и программ для ЭВМ, а также изготовлению фонограмм», утвержденное приложением №1 к постановлению Кабинета Министров Республики Узбекистан от 15.03.2012 года №72 (далее – Положение)
                        </p>

                        <p
                            className={classes.activity__government__text}
                        >
                            На право осуществления видов деятельности по воспроизведению, реализации, прокату аудиовизуальных произведений, фонограмм и программ для ЭВМ, а также изготовлению фонограмм выдаются типовые (простые) лицензии.
                        </p>

                        <p
                            className={classes.activity__government__text}
                        >
                            В соответствии с пунктом 5 Положения виды деятельности по воспроизведению, реализации, прокату аудиовизуальных произведений, фонограмм и программ для ЭВМ, а также изготовлению фонограмм осуществляются юридическими лицами.
                        </p>

                        <p
                            className={classes.activity__government__text}
                        >
                            Решения о выдаче лицензий, приостановлении или прекращении действия лицензии, а также ее аннулировании и переоформлении принимаются Агентством по интеллектуальной собственности Республики Узбекистан (лицензирующий орган).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityGoverement