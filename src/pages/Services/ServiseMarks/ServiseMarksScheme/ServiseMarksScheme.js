import React, { useState, useEffect } from "react";
import classes from './ServiseMarksScheme.module.scss'
import Schame from "../../../../components/Schame";
import { tabserv } from "../../../../assets/db";
import { useOutletContext } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import Loader from "../../../../containers/Loader";
export default function ServiseMarksScheme() {
    const [parant] = useOutletContext();
    const [childLoading, childData, childError] = useFetch(`/content/all/service?lang=ru&parent=${parant}`)
    const [array, setArray] = useState([])
    useEffect(() => {
        if (childData.data) {
            let array = childData.data.filter(el => el.slug === 'sxema-uslugi')
            setArray(array)
        }

    }, [childData.data])
    if (childLoading) return <Loader/>
    return (
        <>
            {
                array && array ? (
                    <Schame obj={array} />
                ) : (
                    ''
                )
            }
        </>


    )
}