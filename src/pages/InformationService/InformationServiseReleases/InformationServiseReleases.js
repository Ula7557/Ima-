import React from 'react'
import classes from './InformationServiseReleases.module.scss'
import FileCard from '../../../components/FileCard'
import BreadCrumb from '../../../components/BreadCrumb'
import { useFetch } from '../../../hooks/useFetch'
export default function InformationServiseReleases(){

    const [loading, data, error] = useFetch(`/content/all/docs?lang=ru`)
    if (loading) return null
    return(
    <div className={` ${classes.InformationServiseReleases} load-anim`}>


            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Информационная служба", path: "/information-servise" },
                    {
                        title: "Медиа план и Пресс-релизы",
                        path: "/informationServise-releases",
                    },
                ]}
            />
            <div className={`container ${classes.InformationServiseReleases_inner}`}>
                <h1>Медиа план и Пресс-релизы</h1>
                <div className={classes.InformationServiseReleases_inner_main}>
                    {
                        data.data && data.data.map((item,index)=>(
                           item.category_title[0].title === 'press' ? (
                                <FileCard
                                    key={index}
                                    large={true}
                                    title={item.title}
                                    file={JSON.parse(item.file)[0]}
                                    variant={item.category_title[0].title}
                                    memory='217.9 kb'
                                />
                           ) : null
                        ))
                    }
                </div>
            </div>
        </div>
    )
}