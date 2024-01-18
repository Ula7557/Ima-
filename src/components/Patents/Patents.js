import React, { useState } from 'react'
import classes from './Patents.module.scss'
import open from '../../assets/icons/ICON (2).png'
import img from '../../assets/icons/Mask Group (7).png'
import faks from '../../assets/icons/Vector (37).png'
import tel from '../../assets/icons/Vector (36).png'
import mobil from '../../assets/icons/Vector (41).png'
import email from '../../assets/icons/Vector (42).png'
import adress from '../../assets/icons/Vector (43).png'

export default function Patents({object}) {
    const [close, setClose]=useState(null)

    function toggle(i) {
       if (close === i) {
           setClose(null)
       }else{
           setClose(i)
       }
    }
    return(
        <>
        {
            object.map((elem,i)=>(
            <div className={classes.Patents}>
                <div className={classes.Patents_top}>
                    <h1>{elem.name}</h1>
                    <button className={ close === i ?  classes.btn_alls : classes.btn_all} onClick={()=>toggle(i)}></button>
                </div>
                <div className={ close === i ? classes.Patents_details : classes.open}>
                    <div className={classes.Patents_details_info}>
                        <h1><img alt='' src={img}/>{elem.compName}</h1>
                        <p>Регистрационный номер: <span>{elem.registNum}</span> </p>
                        <p>Дата регистрации: <span>{elem.registDate}</span> </p>
                        <p>Специализация: <span>{elem.spacial}</span> </p>
                        <p>Услуга: <span>{elem.service}</span>  </p>
                        <p>Язык: <span>{elem.lang}</span> </p>
                    </div>
                    <div className={classes.Patents_details_contact}>
                        <div className={classes.Patents_details_contact_title}>
                            <h1>Менеджер по интеллектуальной собственности: </h1>
                        </div>
                        <div className={classes.Patents_details_contact_item}>
                            <div className={classes.Patents_details_contact_item_inner}>
                                <img alt='#' src={tel} />
                                <a href='+998 (71) 232 01 36' >Телефон <span>+998 (71) 232 01 36</span> </a>
                            </div>
                            <div className={classes.Patents_details_contact_item_inner}>
                                <img alt='#' src={mobil} />
                                <a href='+998 (90) 900 09 01' > Мобильный <span> +998 (90) 900 09 01</span></a>
                            </div>
                           <div className={classes.Patents_details_contact_item_inner}>
                                <img alt='#' src={faks} />
                                <a href='+998 (71) 236 04 69' > Факс <span>+998 (71) 236 04 69</span></a>
                            </div>
                            <div className={classes.Patents_details_contact_item_inner}>
                                <img alt='#' src={email} />
                                <a href='info@itec.uz' > E-mail <span>info@itec.uz</span> </a>
                            </div>
                            <div className={classes.Patents_details_contact_item_inner}>
                                <img alt='#' src={adress} />
                                <a href='100174, г. Ташкент, Алмазарский р-н, ул. Университетская, дом 7' > Адрес <span>100174, г. Ташкент, Алмазарский р-н, ул. Университетская, дом 7</span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))
        }

        </>
    
    )
    
}