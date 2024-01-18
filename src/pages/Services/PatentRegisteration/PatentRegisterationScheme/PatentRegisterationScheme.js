import React ,{useState,useEffect}from "react";
import {tabserv} from '../../../../assets/db'
import Schame from "../../../../components/Schame";
import { useOutletContext } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import Loader from "../../../../containers/Loader";
export default function PatentRegisterationScheme() {
    const [ parant ] = useOutletContext();
    const [childLoading,childData,childError]=useFetch(`/content/all/service?lang=ru&parent=${parant}`)
    const [array,setArray]=useState([])
    useEffect(()=>{
        if(childData.data){
          let array =   childData.data.filter(el => el.slug === 'cxema-uslugi-2')
          setArray(array)
        }

    },[childData.data])
    if(childLoading) return <Loader/>
    return(
        <Schame obj={array}/>
    )   
}

