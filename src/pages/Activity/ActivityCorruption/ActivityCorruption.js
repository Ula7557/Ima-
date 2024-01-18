import React, { useRef, useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb';
import classes from './ActivityCorruption.module.scss';

function ActivityCorruption() {
    const ref = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/activity-corruption/message')
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
    <div className={` ${classes.activity__corruption} load-anim`}>
            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Деятельность", path: "/activity" },
                    { title: "Борьба с коррупцией", path: "/activity-corruption/message" },
                  ]}
            />

            <div className={`container ${classes.activity__corruption__inner}`}>
                <h1 className={classes.activity__corruption__title}>
                    Борьба с коррупцией
                </h1>

                <div className={classes.activity__corruption__nav__wrapper}>
                    <div className={classes.activity__corruption__navigation}>
                        <NavLink
                            ref={ref}
                            to='/activity-corruption/message'
                            onClick={handleCustomClick}
                            className={classes.activity__corruption__nav}
                        >
                            Обращение директора
                        </NavLink>

                        <NavLink
                            onClick={handleClick}
                            to='/activity-corruption/regulations'
                            className={classes.activity__corruption__nav}
                        >
                            Нормативно-правовые акты
                        </NavLink>

                        <NavLink
                            to='/activity-corruption/provide'
                            className={classes.activity__corruption__nav}
                        >
                            принятие меры по противодействию коррупции
                        </NavLink>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default ActivityCorruption