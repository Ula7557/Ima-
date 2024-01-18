import React, {useEffect} from 'react'
import {NavLink,Outlet,useNavigate} from 'react-router-dom'
import classes from './InformationServiseLibrary.module.scss'
import BreadCrumb from '../../../components/BreadCrumb'
import { useFetch } from '../../../hooks/useFetch'
export default function InformationServiseLibrary(){

    const [loading, data, error] = useFetch(`/content/all/gallery?lang=ru`)


    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/informationServise-library/photo')
    },[])

    return(
    <div className={` ${classes.InformationServiseLibrary} load-anim`}>
            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Информационная служба", path: "/information-servise" },
                    {
                        title: "Медиатека",
                        path: "/informationServise-library",
                    },
                ]}
            />
            <div className={`container ${classes.InformationServiseLibrary_inner}`}>
                <h1>Медиатека</h1>
                <div className={classes.InformationServiseLibrary_inner_btn}>
                    <NavLink to='/informationServise-library/video' className={classes.inner_btn} >видеогалерея </NavLink>
                    <NavLink to='/informationServise-library/photo' className={classes.inner_btn} >Фотогалерея</NavLink>
                </div>
                <Outlet/>


            </div>
        </div>
    )
}