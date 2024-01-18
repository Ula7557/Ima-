import React , {useEffect} from 'react'
import { NavLink,Outlet,useNavigate } from 'react-router-dom'
import classes from './InformationServiseEditions.module.scss'
import BreadCrumb from '../../../components/BreadCrumb'

export default function InformationServiseEditions(){
   const  navigate = useNavigate()
   useEffect(()=>{
       navigate('/informationServise-editions/reports')
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
    return(
    <div className={` ${classes.InformationServiseEditions} load-anim`}>


            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Информационная служба", path: "/information-servise" },
                    {
                        title: "Издание",
                        path: "/informationServise-editions/reports",
                    },
                    
                ]}
            />
            <div className={`container ${classes.InformationServiseEditions_inner}`}>
                <h1>Издание</h1>
                <div className={classes.InformationServiseEditions_inner_btn}>
                    <ul className={classes.InformationServiseEditions_inner_ul} >
                        <NavLink to='/informationServise-editions/reports' className={classes.innerbtn_all} >годовые отчеты</NavLink>
                        <NavLink to='/informationServise-editions/indexes' className={classes.innerbtn_all} >Сборник годовых указателей</NavLink>
                    </ul>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}