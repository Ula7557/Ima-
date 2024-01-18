import React, { useEffect ,useState} from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import ServiceTopComponent from "../../../components/ServiceTopComponent/ServiceTopComponent";
import FileCard from "../../../components/FileCard";
import LexuzCard from "../../../components/LexuzCard/LexuzCard";
import design from "../../../assets/icons/design.png";
import classes from "./IndustrialDesign.module.scss";
import { useFetch } from '../../../hooks/useFetch';
import Loader from '../../../containers/Loader';
import { NavLink, Outlet,useNavigate } from "react-router-dom";
const IndustrialDesign = () => {
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
    <div className={` ${classes.industrialDesign_wrapper} load-anim`}>

          <div className={classes.utility_model_blocks}>
              <BreadCrumb
                  list={[
                      { title: "Главная", path: "/" },
                      { title: "Услуги", path: "/services/public" },
                      {
                          title: "Промышленные образцы",
                          path: "/services-design",
                      },
                  ]}
              />
          </div>

      <div className={`container ${classes.utility__models}`}>
            <div className={classes.utility__models_inner}>
                <div className={classes.utility__models_inner_top}>
                    <div className={classes.image}>
                        <img src={design} />
                    </div>
                    <h1>Промышленные образцы</h1>    
                </div>
                <div className={classes.utility__models_inner_menu}>
                    <ul>
                        <li>
                            <NavLink to='/services-design/services-design-application' >Как подать заявку</NavLink>
                        </li>
                        <li>  
                            <NavLink to='/services-design/services-design-scheme' >Схема услуги</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services-design/services-design-rules' >Общие правила</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services-design/services-design-pass' >Знаки которые не проходит</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services-design/services-design-documents' >Документы</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={classes.utility__models_inner_center}>
                    <Outlet/>
                </div>
            </div>
            <div className={classes.utility__models_inner_right}>
                 <ServiceTopComponent/>
            </div>
        </div>
    </div>
  );
};

export default IndustrialDesign;
