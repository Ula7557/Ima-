import React, { useState } from 'react'
import classes from './Awardes.module.scss'
import award from '../../assets/icons/image 46.png'
import parse from 'html-react-parser'
export default function Awardes({item}) {
    const [selectd, setSelected]=useState(null)
    function toggle(i) {
        if (selectd === i) {
            setSelected(null)
        }else{
            setSelected(i)
        }
    }
    return(
        <div>
        {
            item.map((elem,i)=>(
                <div className={classes.AwardedEmployees_main_item}>
                    <img src={elem.image} />
                    <span>
                        <h1>{elem.title} <img src={elem.icon} /></h1>
                        <h2>{elem.position}</h2>
                        <p className={selectd === i ? classes.open : ''} >{parse(elem.description)}</p>
                        <button onClick={()=>toggle(i)}>{selectd === i ? 'Скрыть ': 'Показать все'}</button>
                    </span>
                    <img className={classes.award} src={elem.icon}/>
                </div>
            ))
        }
        </div>


    )
    
}