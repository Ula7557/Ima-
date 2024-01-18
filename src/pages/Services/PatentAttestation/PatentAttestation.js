import React, { useEffect ,useState} from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ServiceTopComponent from "../../../components/ServiceTopComponent/ServiceTopComponent";
import plant from "../../../assets/icons/plant.png";
import classes from "./PatentAttestation.module.scss";
import BreadCrumb from "../../../components/BreadCrumb";
import { useFetch } from '../../../hooks/useFetch';
import Loader from '../../../containers/Loader';
const PatentAttestation = () => {
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
    <div className={`container ${classes.utility__models} load-anim`}>

      <div className={classes.utility_model_blocks}>
        <BreadCrumb
          list={[
            { title: "Главная", path: "/" },
            { title: "Услуги", path: "/services/interactive" },
            {
              title: "Проведение аттестации патентных поверенных",
              path: "/patent-attestation",
            },
          ]}
        />
      </div>


      <div className={classes.utility__models_inner}>
        <div className={classes.utility__models_inner_top}>
          <div className={classes.image}>
            <img src={plant} />
          </div>
          <h1>Полезные модели</h1>
        </div>
        <div className={classes.utility__models_inner_menu}>
          <ul>
            <li>
              <NavLink to="/patent-attestation/patent-attestation-application">
                Как подать заявку
              </NavLink>
            </li>
            <li>
              <NavLink to="/patent-attestation/patent-attestation-scheme">
                Схема услуги
              </NavLink>
            </li>
            <li>
              <NavLink to="/patent-attestation/patent-attestation-rules">
                Общие правила
              </NavLink>
            </li>
            <li>
              <NavLink to="/patent-attestation/patent-attestation-pass">
                Знаки которые не проходит
              </NavLink>
            </li>
            <li>
              <NavLink to="/patent-attestation/patent-attestation-documents">
                Документы
              </NavLink>
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
  );
};

export default PatentAttestation;
