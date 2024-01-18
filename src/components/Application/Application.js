import React from "react";
import classes from './Application.module.scss'
import parse from 'html-react-parser'
export default function Application({obj}){
    return(
        <>
        {
            obj.map((elem,index)=>(
            <div key={index} className={classes.ServicesInventionsApplication} >
                        <span >
                            {parse(elem.description)}
                            {/* <h2>{index+1} шаг</h2>
                            <p>{item.title}</p>
                            <ul>
                                {
                                    item.text.map((f,i)=>(
                                        <li key={i} >{f.inner}</li>
                                    ))
                                }
                            </ul> */}
                        </span>
                    ))
            </div>
            ))
        }
        </>
    )
}