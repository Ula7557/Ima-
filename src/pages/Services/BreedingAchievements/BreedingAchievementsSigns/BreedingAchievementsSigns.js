import React,{useEffect,useState} from "react";
import classes from './BreedingAchievementsSigns.module.scss'
import Signs from "../../../../components/Signs";
import { useOutletContext } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import Loader from "../../../../containers/Loader";
export default function BreedingAchievementsSigns() {
    const [ parant ] = useOutletContext();
    const [childLoading,childData,childError]=useFetch(`/content/all/service?lang=ru&parent=${parant}`)
    const [array,setArray]=useState([])
    useEffect(()=>{
        if(childData.data){
          let array =   childData.data.filter(el => el.slug === 'znaki-kotorie-ne-proxodit-1')
          setArray(array)
        }
    },[childData.data])
    console.log(childData);
    if(childLoading) return <Loader/>
    return(
        <Signs obj={array} />
    )
}

