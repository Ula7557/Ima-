import React, { useEffect ,useState} from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import ServiceTopComponent from "../../../components/ServiceTopComponent/ServiceTopComponent";
import FileCard from "../../../components/FileCard";
import LexuzCard from "../../../components/LexuzCard/LexuzCard";
import plant from "../../../assets/icons/plant.png";
import { useFetch } from '../../../hooks/useFetch';
import Loader from '../../../containers/Loader';
import classes from "./BreedingAchievements.module.scss";
import { NavLink,Outlet,useNavigate } from "react-router-dom";
const BreedingAchievements = () => {
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
    <div className={` ${classes.breedingAchievements_wrapper} load-anim`}>

          <div className={classes.utility_model_blocks}>
              <BreadCrumb
                  list={[
                      { title: "Главная", path: "/" },
                      { title: "Услуги", path: "/services/public" },
                      {
                          title: "Селекционные достижения",
                          path: "/services-breeding",
                      },
                  ]}
              />
          </div>
    

      <div className={`container ${classes.utility__models}`}>
            <div className={classes.utility__models_inner}>
                <div className={classes.utility__models_inner_top}>
                    <div className={classes.image}>
                        <img src={plant} />
                    </div>
                    <h1>Селекционные достижения</h1>    
                </div>
                <div className={classes.utility__models_inner_menu}>
                    <ul>
                        <li>
                            <NavLink to='/services-breeding/services-breeding-application' >Как подать заявку</NavLink>
                        </li>
                        <li>  
                            <NavLink to='/services-breeding/services-breeding-scheme' >Схема услуги</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services-breeding/services-breeding-rules' >Общие правила</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services-breeding/services-breeding-pass' >Знаки которые не проходит</NavLink>
                        </li>
                        <li>
                            <NavLink to='/services-breeding/services-breeding-documents' >Документы</NavLink>
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
  );
};

export default BreedingAchievements;
