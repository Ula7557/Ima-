import React from 'react'
import classes from './InformationService.module.scss'
import {Link} from 'react-router-dom'
import BreadCrumb from '../../components/BreadCrumb'
 export default function InformationService (){
    return(
    <div className={` ${classes.InformationService} load-anim`}>

            {/* <BreadCrumb  list={['Главная', 'Информационная служба']} /> */}
            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Информационная служба", path: "/information-servise" },
                ]}
            />
            <div className={`container ${classes.InformationService_inner}`}>
                <h1>Информационная служба</h1>
                <div className={classes.InformationService_inner_main}>
                    <div className={classes.InformationService_inner_left}>
                        <Link to='/informationServise-protocols' className={classes.InformationService_inner_item} >Выступление и протоколы руководство</Link>
                        <Link to='/informationServise-media' className={classes.InformationService_inner_item} >Аккредитация представителей СМИ</Link>
                        <Link to='/informationServise-contests' className={classes.InformationService_inner_item} >Конкурсы</Link>
                    </div>
                    <div className={classes.InformationService_inner_right}>
                        <Link to='/informationServise-releases' className={classes.InformationService_inner_item} >Медиа план и Пресс-релизы</Link>
                        <Link to='/informationServise-library' className={classes.InformationService_inner_item} >Медиатека</Link>
                        <Link to='/informationServise-editions' className={classes.InformationService_inner_item} >Издания</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}