import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../../components/BreadCrumb';
import ServiceTopComponent from '../../../components/ServiceTopComponent/ServiceTopComponent';
import classes from './ServicesInventions.module.scss';
import coba from '../../../assets/images/coba.png'
import LexuzCard from '../../../components/LexuzCard/LexuzCard';
import FileCard from '../../../components/FileCard';
import AboutAgencyListItem from '../../../components/AboutAgencyListItem';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch';
import Loader from '../../../containers/Loader';
function ServicesInventions() {
    const params = useParams()
    const [parentLoading, parentData, parentError] = useFetch(`/content/all/service?lang=ru&id=${params.id}`)
    const [childLoading, childData, childError] = useFetch(`/content/all/service?lang=ru&parent=${params.id}`)
    const navigate = useNavigate()
    const [parent, setParent] = useState([])
    const [child, setChild] = useState({ id: '' })
    useEffect(() => {
        if(childData.data){
            setChild({id:childData.data[0].id})
        }
        navigate(`/service/${params.id}/inventions-application`)
    }, [params.id])
    if (parentLoading) return <Loader />
    if (childLoading) return null
    return (
        <div className={` ${classes.services__inventations} load-anim`}>
            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Услуги", path: "/services/public" },
                    {
                        title: "Изобретения",
                        path: "/inventions/inventions-application",
                    },
                ]}
            />

            <div className={`container ${classes.utility__models}`}>
                <div className={classes.utility__models_inner}>
                    <div className={classes.utility__models_inner_top}>
                        <div className={classes.image}>
                            <img src={coba} />
                        </div>
                        <h1>{parentData.data[0]?.title}</h1>
                    </div>
                    <div className={classes.utility__models_inner_menu}>
                        <ul>
                            <li onClick={()=>setChild({id:childData.data[0].id})}>
                                <NavLink to={`/service/${params.id}/inventions-application`} >{childData.data[0]?.title}</NavLink>
                            </li>
                            <li onClick={()=>setChild({id:childData.data[1].id})}>
                                <NavLink to={`/service/${params.id}/inventions-scheme`} >{childData.data[1]?.title}</NavLink>
                            </li>
                            <li onClick={()=>setChild({id:childData.data[2].id})}>
                                <NavLink to={`/service/${params.id}/inventions-rules`} >{childData.data[2]?.title}</NavLink>
                            </li>
                            <li onClick={()=>setChild({id:childData.data[3].id})}>
                                <NavLink to={`/service/${params.id}/inventions-pass`} >{childData.data[3]?.title}</NavLink>
                            </li>      
                            <li onClick={()=>setChild({id:childData.data[4].id})}>
                                <NavLink to={`/service/${params.id}/inventions-documents`} >{childData.data[4]?.title}</NavLink>
                            </li>
                            <li onClick={()=>setChild({id:childData.data[5].id})}>
                                <NavLink to={`/service/${params.id}/inventions-interApp`} >{childData.data[5]?.title}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.utility__models_inner_center}>
                        <Outlet context={[child?.id]} />
                    </div>
                </div>
                <div className={classes.utility__models_inner_right}>
                    <ServiceTopComponent />
                </div>
            </div>
        </div>
    )
}

export default ServicesInventions