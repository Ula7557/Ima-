import React from "react";
import classes from './ServiseLeft.module.scss'
import topIcon from '../../assets/icons/Mask group1.png'
import topIcon1 from '../../assets/icons/Vector7.png'
import topIcon2 from '../../assets/icons/Vector6.png'
import topIcon3 from '../../assets/icons/Vector5.png'
import topIcon4 from '../../assets/icons/Vector4.png'
import topIcon5 from '../../assets/icons/Vector3.png'
import topIcon6 from '../../assets/icons/Vector2.png'
import topIcon7 from '../../assets/icons/Vector1.png'
export default function ServiseLeft() {
    return(
        <div className={classes.ServiseLeft} >
            <div className={classes.ServiseLeft_top} >
                <img src={topIcon} />     
                <h1>ОХРАНА ПРОМЫШЛЕННОЙ СОБТВЕННОСТИ</h1>
            </div>
            <div className={classes.ServiseLeft_middle} >
                <ul>
                    <li><a href> <img src={topIcon1} /> Главная</a></li>
                    <li><a href> <img src={topIcon2} /> Наши Услуги</a></li>
                    <li><a href> <img src={topIcon3} /> Оплата за услугу</a></li>
                    <li><a href> <img src={topIcon4} /> Н-правовые акты</a></li>
                    <li><a href> <img src={topIcon5} /> Аналитика</a></li>
                    <li><a href> <img src={topIcon6} /> Вопросы и ответы</a></li>
                    <li><a href> <img src={topIcon7} /> Контакты</a></li>
                </ul>
            </div>
        </div>
    )
}