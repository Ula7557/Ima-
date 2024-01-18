import React from "react";
import classes from './ServiseTop.module.scss'
import eye from '../../assets/icons/eye.png'
import Language1 from '../../components/language1'
import bell from '../../assets/icons/Vector8.png'
import mass from '../../assets/icons/Vector.png'
import man from '../../assets/icons/Mask Group.png'

export default function ServiseTop() {
    return(
        <div className={classes.ServiseTop}>
            <div className={classes.ServiseTop_left}>
                <input placeholder="Поиск по сайту" type='text' />
                <img src={eye} />
            </div>
            <div className={classes.ServiseTop_right}>
                <div className={classes.Language}>
                    <Language1/>
                </div>
                <div className={classes.image_item}>
                    <img src={mass} />
                </div>
                <div className={classes.image_item}>
                     <img src={bell} />
                </div>
                <img src={man} />
            </div>
        </div>
    )
}