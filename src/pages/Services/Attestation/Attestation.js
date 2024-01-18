import React, { useEffect } from "react"
import { NavLink,Outlet,useNavigate } from "react-router-dom";
import classes from "./Attestation.module.scss"
import BreadCrumb from "../../../components/BreadCrumb"
import LexuzCard from '../../../components/LexuzCard/LexuzCard';
import FileCard from '../../../components/FileCard';
import icon from '../../../assets/images/ИКОНКА (1).png'
import AboutAgencyListItem from '../../../components/AboutAgencyListItem';
import ServiceTopComponent from '../../../components/ServiceTopComponent/ServiceTopComponent';
import { useFetch } from '../../../hooks/useFetch';
import Loader from '../../../containers/Loader';
export default function ServisePrograms(){
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
    return(
        <div className={classes.ServiseMarks}>
            <BreadCrumb
                list={['Главная', 'Услуги', 'Товарные знаки']}
            />
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
                    <Outlet context={[parent[0]?.id]}/>
                </div>
            </div>
            <div className={classes.utility__models_inner_right}>
                 <ServiceTopComponent/>
            </div>
        </div>
        </div>
    )
}