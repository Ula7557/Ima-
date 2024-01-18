import React, { useEffect,useState } from "react"
import classes from "./ServicesPrograms.module.scss"
import BreadCrumb from "../../../components/BreadCrumb"
import LexuzCard from '../../../components/LexuzCard/LexuzCard';
import FileCard from '../../../components/FileCard';
import icon from '../../../assets/images/ИКОНКА.png'
// import AboutAgencyListItem from '../../../components/AboutAgencyListItem';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useFetch } from '../../../hooks/useFetch';
import Loader from '../../../containers/Loader';
import ServiceTopComponent from '../../../components/ServiceTopComponent/ServiceTopComponent';
export default function ServisePrograms() {
    const [parentLoading, parentData, parentError] = useFetch(`/content/all/service?lang=ru`)
    const navigate = useNavigate()
    const [parent, setParent] = useState([])
    const [child, setChild] = useState([])
    useEffect(() => {
        if (parentData.data) {
            let array = parentData.data?.filter(el => el.slug === 'izobreteniya')
            setParent(array)
            parentData.data?.map((elem, i) => {
                if (array[0].id === elem.parent_id) {
                    child.push(elem)
                }
            })
        }
        navigate('/inventions/inventions-application')
    }, [parentData.data])
    if (parentLoading) return <Loader />
    return (
        <div className={` ${classes.ServisePrograms} load-anim`}>
            <div className={classes.utility_model_blocks}>
                <BreadCrumb
                    list={[
                        { title: "Главная", path: "/" },
                        { title: "Услуги", path: "/services/public" },
                        {
                            title: "Программы для ЭВМ и базы данных",
                            path: "/services-programs",
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
                        <h1>Программы для ЭВМ</h1>
                    </div>
                    <div className={classes.utility__models_inner_menu}>
                        <ul>
                            <li>
                                <NavLink to='/services-programs/services-programs-application' >Как подать заявку</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services-programs/services-programs-scheme' >Схема услуги</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services-programs/services-programs-rules' >Общие правила</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services-programs/services-programs-pass' >Знаки которые не проходит</NavLink>
                            </li>
                            <li>
                                <NavLink to='/services-programs/services-programs-documents' >Документы</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.utility__models_inner_center}>
                        <Outlet context={[parent[0]?.id]} />
                    </div>
                </div>
                <div className={classes.utility__models_inner_right}>
                    <ServiceTopComponent />
                </div>
            </div>
        </div>
    )
}