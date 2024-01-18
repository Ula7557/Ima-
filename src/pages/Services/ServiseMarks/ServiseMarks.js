import React, { useEffect,useState } from "react"
import {NavLink, Outlet,useNavigate} from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch';
import Loader from '../../../containers/Loader';
import classes from "./ServiseMarks.module.scss"
import BreadCrumb from "../../../components/BreadCrumb"
import LexuzCard from '../../../components/LexuzCard/LexuzCard';
import FileCard from '../../../components/FileCard';
import icon from '../../../assets/images/ИКОНКА (1).png'
import AboutAgencyListItem from '../../../components/AboutAgencyListItem';
import ServiceTopComponent from '../../../components/ServiceTopComponent/ServiceTopComponent';
export default function ServisePrograms(){
    const [parentLoading,parentData,parentError]=useFetch(`/content/all/service?lang=ru`)
    const fakeData = Array(1).fill('К товарным знакам и знакам обслуживания (далее - товарный знак) относятся зарегистрированные в установленном порядке обозначения, способные отличать товары и услуги одних юридических лиц от однородных товаров и услуг других юридических или физических лиц, осуществляющих предпринимательскую деятельность. Правовая охрана товарным знакам предоставляется на основании их регистрации, а также в силу международных договоров. Международная регистрация может испрашиваться гражданином одного из договаривающихся государств либо физическим или юридическим лицом, имеющим местожительство (или местонахождение) или действительное и не фиктивное промышленное или торговое предприятие на территории одного из договаривающихся государств')
    const navigate = useNavigate()
    const [parent,setParent]=useState([])
    const [child,setChild]=useState([])
    useEffect(()=>{
        if (parentData.data) {
            let array =  parentData.data?.filter(el => el.slug === 'tovarnie-znaki') 
            setParent(array)
            parentData.data?.map((elem,i)=>{
                if (array[0].id === elem.parent_id) {
                    child.push(elem)
                }
            })
        }
        navigate('/service-marks/servicemarks-application')
    },[parentData.data])
    return(
    <div className={` ${classes.ServiseMarks} load-anim`}>

            <div className={classes.utility_model_blocks}>
                <BreadCrumb
                    list={[
                        { title: "Главная", path: "/" },
                        { title: "Услуги", path: "/services/public" },
                        {
                            title: "Товарные знаки, знаки обслуживания",
                            path: "/service-marks",
                        },
                    ]}
                />
            </div>
        <div className={`container ${classes.utility__models}`}>
            <div className={classes.utility__models_inner}>
                <div className={classes.utility__models_inner_top}>
                    <div className={classes.image}>
                        <img src={icon} />
                    </div>
                    <h1>Товарные знаки</h1>    
                </div>
                <div className={classes.utility__models_inner_menu}>
                    <ul>
                        <li>
                            <NavLink to='/service-marks/servicemarks-application' >Как подать заявку</NavLink>
                        </li>
                        <li>  
                            <NavLink to='/service-marks/servicemarks-scheme' >Схема услуги</NavLink>
                        </li>
                        <li>
                            <NavLink to='/service-marks/servicemarks-rules' >Общие правила</NavLink>
                        </li>
                        <li>
                            <NavLink to='/service-marks/servicemarks-pass' >Знаки которые не проходит</NavLink>
                        </li>
                        <li>
                            <NavLink to='/service-marks/servicemarks-documents' >Документы</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={classes.utility__models_inner_center}>
                    <Outlet context={[parent[0]?.id]} />
                </div>
            </div>
            <div className={classes.utility__models_inner_right}>
                 <ServiceTopComponent/>
            </div>
        </div>
        </div>
    )
}