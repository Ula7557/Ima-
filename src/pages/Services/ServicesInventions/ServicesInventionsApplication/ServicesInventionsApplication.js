import React,{useState} from "react";
import classes from './ServicesInventionsApplication.module.scss'
import { applicaton} from '../../../../assets/db'
import Application from "../../../../components/Application/Application";
import { useFetch } from "../../../../hooks/useFetch";
import { useOutletContext } from "react-router-dom";
import Loader from "../../../../containers/Loader";
export default function ServicesInventionsApplication() {
    const [parant] = useOutletContext();
    const [childLoading, childData, childError] = useFetch(`/content/all/service?lang=ru&id=${parant}`)
    const [array, setArray] = useState([])
    if (childLoading) return <Loader />
    return (
        <>
            {
                childData.data && childData.data ? (
                    <Application obj={childData.data} />
                ) : (
                    ''
                )
            }
        </>

    )
}