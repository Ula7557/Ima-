import React, { useEffect, useState } from "react";
import classes from './UtilityModelsApplication.module.scss'
import { applicaton} from '../../../../assets/db'
import {useOutletContext} from 'react-router-dom'
import Application from "../../../../components/Application/Application";
import { useFetch } from "../../../../hooks/useFetch";
import Loader from "../../../../containers/Loader";
export default function UtilityModelsApplication() {
    const [ parant ] = useOutletContext();
    const [childLoading,childData,childError]=useFetch(`/content/all/service?lang=ru&parent=${parant}`)
    const [array,setArray]=useState([])
    useEffect(()=>{
        if(childData.data){
          let array =   childData.data.filter(el => el.slug === 'kak-podat-zayavku-1')
          setArray(array)
        }

    },[childData.data])
    if(childLoading) return <Loader/>   
    return(
        <Application obj={array} />
    )
}


