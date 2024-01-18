import React from "react";
import classes from './ServicesInventionsInterApp.module.scss'
import BreadCrumb from '../../../../components/BreadCrumb';
import ServiceTopComponent from '../../../../components/ServiceTopComponent/ServiceTopComponent';
import coba from '../../../../assets/images/coba.png'
import LexuzCard from '../../../../components/LexuzCard/LexuzCard';
import FileCard from '../../../../components/FileCard';
import AboutAgencyListItem from '../../../../components/AboutAgencyListItem';
import { useFetch } from "../../../../hooks/useFetch";
import { useOutletContext } from "react-router-dom";
import parse from 'html-react-parser'
import Loader from "../../../../containers/Loader";
function ServicesInventionsInterApp() {
    const [parent] = useOutletContext();
    const [childLoading, childData, childError] = useFetch(`/content/all/service?lang=ru&id=${parent}`)
    const [innerLoading, innarData, innerError] = useFetch(`/content/all/service?lang=ru&parent=${parent}`)
    console.log(innarData);
    if (innerLoading) return <Loader />
    if (childLoading) return null
    return (
        <div className={` ${classes.services__inventations} load-anim`}>

            <div className={`container ${classes.services__inventations__inner}`}>
                <div className={classes.services__inventations__application}>
                    <h3 className={classes.services__inventations__subtitle__app}>
                        {childData.data[0]?.title}
                    </h3>

                    <a
                        href="https://www.wipo.int/pct-safe/ru/"
                        target='_blank'
                        className={classes.services__inventations__link}
                        rel="noreferrer"
                    >
                        Подача международной заявки в электронном виде с использованием системы ePCT
                    </a>

                    <div className={classes.services__inventations__holder__inner}>
                        <h3 className={classes.services__inventations__title}>
                            {innarData.data[0]?.title}
                        </h3>

                        <div className={classes.services__inventations__flex}>
                            <div className={classes.services__inventations__left}>
                                {
                                    innarData.data && innarData.data ? (
                                        innarData.data.map((elem, i) => (
                                            <AboutAgencyListItem
                                                text={parse(elem.description)}
                                                link={JSON.parse(elem.meta).focus_keywords}
                                            />
                                        ))

                                    ) : (
                                        null
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={classes.services__inventations__files}>
                        <div className={classes.item}>
                            <FileCard
                                large={true}
                                title='Заявление о выдаче патента на изобретение'
                                variant='word'
                                memory='12Kb'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesInventionsInterApp