import React, { useState } from 'react'
import classes from './Vacency.module.scss'
import parse from 'html-react-parser'
export default function Vacency({ obj, change }) {
    const [open, seOpen] = useState(null)
    function toggle(i) {
        if (open === i) {
            seOpen(null)
        } else {
            seOpen(i)
        }
    }
    return (
        <div className={change == true ? classes.Vacency_main_middle_left_new : classes.Vacency_main_middle_lefts} >
            {
                obj.map((item, index) => (
                    <div key={index} className={classes.Vacency_main_middle_left}>
                        <div className={classes.Vacency_main_middle_left_header}>
                            <h1>{item.title}</h1>
                            <button className={open === index ? classes.change : classes.bts} onClick={() => toggle(index)}></button>
                        </div>
                        <div     className={open === index ? classes.Vacency_main_middle_left_inner : classes.open}>
                            {item.description &&  parse(item.description)}
                            {/* <h2>{el.title}</h2>
                                    {
                                    el.text ?
                                       <p>{el.text}</p>
                                        : ''
                                    }
                                    {
                                        el.requir ?
                                        el.requir.map((elem,index)=>(
                                            <ul key={index}>
                                                <li><p>{elem.text}</p></li>
                                            </ul>
                                        ))
                                        : ''
                                    } */}
                        </div>
                    </div>
                ))
            }
        </div>
    )

}