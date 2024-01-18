import React,{useState,useEffect} from "react";
import classes from './ServiseMarksApplication.module.scss'
import Application from "../../../../components/Application/Application";
import { applicaton } from "../../../../assets/db";
import { useFetch } from "../../../../hooks/useFetch";
import {useOutletContext} from 'react-router-dom'
import Loader from "../../../../containers/Loader";
export default function ServiseMarksApplication() {
    const [ parant ] = useOutletContext();
    const [childLoading,childData,childError]=useFetch(`/content/all/service?lang=ru&parent=${parant}`)
    const [array,setArray]=useState([])
    useEffect(()=>{
        if(childData.data){
          let array =   childData.data.filter(el => el.slug === 'kak-podat-zayavku')
          setArray(array)
        }

    },[childData.data])
    if(childLoading) return <Loader/>   
    return(
        <Application obj={array} />
    )
}