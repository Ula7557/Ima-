/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useEffect} from 'react'
import classes from './RegulationsInternational.module.scss'
import BreadCrumb from '../../../components/BreadCrumb'
// import FileCard from '../../../components/FileCard'
import {NavLink,Outlet,useNavigate} from 'react-router-dom'
export default function RegulationsInternational() {
    const navigate = useNavigate()
    useEffect(() => {
      navigate('/international-regulations/international-conventions')
    }, [])
    return(
    <div className={` ${classes.RegulationsInternational} load-anim`}>
            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Нормативно правовые акты", path: "/regulations" },
                    {
                        title: "Нормативно правовые акты",
                        path: "/international-regulations",
                    },
                ]}
            />
            <div className={`container ${classes.RegulationsInternational_container}`}>
                <div className={classes.RegulationsInternational_container_title}>
                    <h1>Международные нормативные акты</h1>
                </div>
                <div className={classes.RegulationsInternational__wrapper}>
                <div className={classes.RegulationsInternational_container_button}>
                    <NavLink className={classes.text} to='/international-regulations/international-conventions' >Международные конвенции</NavLink>
                    <NavLink className={classes.text} to='/international-regulations/intergovernmental-agreements' >межправителсьтвенные соглашение</NavLink>
                </div>
                </div>
                <Outlet/>
            </div>
        </div>
    )
    
}