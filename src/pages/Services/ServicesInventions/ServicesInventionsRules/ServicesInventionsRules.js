import React, { useEffect, useState } from "react";
import classes from './ServicesInventionsRules.module.scss'
import Rules from "../../../../components/Rules";
import { useOutletContext } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import Loader from "../../../../containers/Loader";
export default function ServicesInventionsRules() {
    const [parant] = useOutletContext();
    const [childLoading, childData, childError] = useFetch(`/content/all/service?lang=ru&id=${parant}`)
    const [array, setArray] = useState([])
    if (childLoading) return <Loader />
    return (
        <>
            {
                childData.data && childData.data ? (
                    <Rules obj={childData.data} />
                ) : (
                    ''
                )
            }
        </>
    )
}