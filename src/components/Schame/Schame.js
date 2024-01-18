import React,{useState,useEffect} from "react";
import classes from './Schame.module.scss'
import parse from 'html-react-parser'
import { useFetch } from "../../hooks/useFetch";
import Rules from "../Rules";
import Loader from "../../containers/Loader";
export default function Schame({obj}){
    // const [innerLoading, innarData, innerError] = useFetch(`/content/all/service?lang=ru&parent=${obj[0].id}`)
    return(
        <div className={classes.ServicesInventionsScheme}>
            {
                obj && obj ? (
                    obj?.map((elem,i)=>(
                        <div key={i} className={classes.ServicesInventionsScheme_item}>
                            <div className={classes.ServicesInventionsScheme_item_header}>
                                <p>{i+1} {elem.title}</p>
                            </div>
                            <div className={classes.ServicesInventionsScheme_item_inner}>
                                {parse(elem.description)}
                            </div>
                        </div>
        
                        ))
                ):(
                    ''
                )
            }
        </div>
    )
}