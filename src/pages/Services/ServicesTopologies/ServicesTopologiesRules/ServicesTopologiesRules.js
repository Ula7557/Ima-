import React, {useState,useEffect} from "react";
import classes from './ServicesTopologiesRules.module.scss'
import Rules from "../../../../components/Rules";
import { useOutletContext } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import Loader from "../../../../containers/Loader";
export default function ServicesTopologiesRules() {
    const [ parant ] = useOutletContext();
    const [childLoading,childData,childError]=useFetch(`/content/all/service?lang=ru&parent=${parant}`)
    const [array,setArray]=useState([])
    useEffect(()=>{
        if(childData.data){
          let array =   childData.data.filter(el => el.slug === 'obschie-pravila-1')
          setArray(array)
        }

    },[childData.data])
    if (childLoading) return <Loader/>
    return(
        <Rules obj={array} />
    )
}