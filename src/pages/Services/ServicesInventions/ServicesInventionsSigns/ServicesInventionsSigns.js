import React, { useEffect, useState } from "react";
import classes from './ServicesInventionsSigns.module.scss'
import Signs from "../../../../components/Signs";
import { useFetch } from "../../../../hooks/useFetch";
import Loader from "../../../../containers/Loader";
import { useOutletContext } from "react-router-dom";
export default function ServicesInventionsSigns() {
    const [parant] = useOutletContext();
    const [childLoading, childData, childError] = useFetch(`/content/all/service?lang=ru&id=${parant}`)
    const [array, setArray] = useState([])
    // useEffect(()=>{
    //     if(childData.data){
    //       let array =   childData.data.filter(el => el.slug === 'znaki-kotorie-ne-proxodit-1')
    //       setArray(array)
    //     }
    // },[childData.data])
    if (childLoading) return <Loader />
    return (
        <>
            {
                childData.data && childData.data ? (
                    <Signs obj={childData.data} />
                ) : (
                    ''
                )
            }
        </>

    )
}