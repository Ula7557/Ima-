import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './SubHeader.module.scss'
import { useLang } from '../../context/LanguageProvider'
import Language from '../../lang'
import { useFetch } from '../../hooks/useFetch'
import Loader from '../../containers/Loader'

function SubHeader() {
    const [lang] = useLang();
    const [loading, data, error] = useFetch("/menu/all?lang=ru&sort=sort");
    const [serviseLoading, serviceData, serviceError] = useFetch(`/content/all/service?lang=ru`)
    const [servise, setServise] = useState([])
    useEffect(() => {
        if (serviceData.data) {
            let array = serviceData.data?.filter(el => el.parent_id === '0')
            setServise(array)
        }
    }, [serviceData.data])
    if (loading) return <Loader />
    if (serviseLoading) return null
    return (
        <ul className={classes.subheader}>

            <li>
                <Link className={classes.subheader__link} to='/agency'>
                    {Language[lang].headerLinks.agency}
                </Link>

                <div className={classes.subheader__wrapper}>
                    <div className={classes.subheader__left}>
                        <Link to='/about-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.aboutAgency}
                        </Link>

                        <Link to='/structura-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.structureAgency}
                        </Link>

                        <Link to='/guide-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.managent}
                        </Link>
                        <Link to='/departments-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.departments}
                        </Link>

                        <Link to='/organizations-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.organization}
                        </Link>

                        <Link to='/technical-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.technicalCouncil}
                        </Link>
                        <Link to='/question-answer' className={classes.subheader__subLink}>
                            Вопросы и ответы
                        </Link>
                    </div>

                    <div className={classes.subheader__right}>
                        <Link to='/appeal-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.boardAppeal}
                        </Link>

                        <Link to='/public-council' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.publicCounsil}
                        </Link>

                        <Link to='/patent-fund' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.patentFund}
                        </Link>

                        <Link to='/awards-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.awards}
                        </Link>

                        <Link to='/requisite-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.requisites}
                        </Link>
                        <Link to='/vacany-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.vacancy}
                        </Link>
                        <Link to='/contact-agency' className={classes.subheader__subLink}>
                            {Language[lang].links.agency.contacts}
                        </Link>

                    </div>

                </div>
            </li>

            <li>
                <Link className={classes.subheader__link} to='/activity'>
                    {Language[lang].headerLinks.activity}
                </Link>

                <div className={classes.subheader__wrapper}>
                    <div className={classes.subheader__left}>
                        <Link to='/activity-intellectual' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.intellectualProperty}
                        </Link>

                        <Link to='/activity-patent' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.verifiedPatents}
                        </Link>

                        <Link to='/activity-cooperation/about' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.internationalCooperation}
                        </Link>

                        <Link to='/activity-corruption/message' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.againstCorruption}
                        </Link>

                        <Link to='/activity-arbitrage' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.arbitrage}
                        </Link>

                        <Link to='/activity-analytics' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.statistics}
                        </Link>

                        <Link to='/activity-tenders' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.tenders}
                        </Link>
                    </div>

                    <div className={classes.subheader__right}>
                        <Link to='/activity-arbitration' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.awards}
                        </Link>

                        <Link to='/activity-licensing' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.licence}
                        </Link>

                        <Link to='/activity-e-government' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.governMent}
                        </Link>

                        <Link to='/activity-appeal' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.brotherHood}
                        </Link>

                        <Link to='/activity-universities' className={classes.subheader__subLink}>
                            {Language[lang].links.activity.univiersities}
                        </Link>
                    </div>

                </div>
            </li>

            <li>
                <Link className={classes.subheader__link} to='/news'>
                    {Language[lang].headerLinks.news}
                </Link>

                <div className={classes.subheader__wrapper}>
                    <div className={classes.subheader__left}>
                        <Link to='/all-news' className={classes.subheader__subLink}>
                            {Language[lang].links.news.news}
                        </Link>

                        <Link to='/press-release' className={classes.subheader__subLink}>
                            {Language[lang].links.news.pressRelease}
                        </Link>

                        <Link to='/events' className={classes.subheader__subLink}>
                            {Language[lang].links.news.meets}
                        </Link>
                    </div>

                    <div className={classes.subheader__right}>
                        <Link to='/ad' className={classes.subheader__subLink}>
                            {Language[lang].links.news.ads}
                        </Link>
                    </div>

                </div>
            </li>

            <li>
                <Link className={classes.subheader__link} to='/services'>
                    {Language[lang].headerLinks.services}
                </Link>

                <div className={classes.subheader__wrapper}>
                    <div className={classes.subheader__left}>
                        {
                            servise?.map((elem, i) => (
                                <Link key={i} to={`/service/${elem.id}`} className={classes.subheader__subLink}>
                                    {elem.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </li>

            <li>
                <Link className={classes.subheader__link} to='/regulations'>
                    {Language[lang].headerLinks.regulations}
                </Link>

                <div className={classes.subheader__wrapper}>
                    <div className={classes.subheader__left}>
                        <Link to='/international-regulations/international-conventions' className={classes.subheader__subLink}>
                            {Language[lang].links.acts.internationalActs}
                        </Link>

                        <Link to='/laws-Uzbekistan' className={classes.subheader__subLink}>
                            {Language[lang].links.acts.lawsUzb}
                        </Link>

                        <Link to='/decrees-president' className={classes.subheader__subLink}>
                            {Language[lang].links.acts.decrees}
                        </Link>

                        <Link to='/cabinet-ministers' className={classes.subheader__subLink}>
                            {Language[lang].links.acts.ministres}
                        </Link>

                        <Link to='/industry-regulations' className={classes.subheader__subLink}>
                            {Language[lang].links.acts.industry}
                        </Link>
                    </div>

                    <div className={classes.subheader__right}>
                        <Link to='/documents-invalidated' className={classes.subheader__subLink}>
                            {Language[lang].links.acts.docs}
                        </Link>

                        <Link to='/tariffs-duties' className={classes.subheader__subLink}>
                            {Language[lang].links.acts.category}
                        </Link>

                        <Link to='/projects' className={classes.subheader__subLink}>
                            {Language[lang].links.acts.projects}
                        </Link>
                    </div>

                </div>
            </li>

            <li>
                <Link className={classes.subheader__link} to='/information-servise'>
                    {Language[lang].headerLinks.informationService}
                </Link>

                <div className={classes.subheader__wrapper}>
                    <div className={classes.subheader__left}>
                        <Link to='/informationServise-protocols' className={classes.subheader__subLink}>
                            {Language[lang].links.infoService.performence}
                        </Link>

                        <Link to='/informationServise-media' className={classes.subheader__subLink}>
                            {Language[lang].links.infoService.media}
                        </Link>

                        <Link to='/informationServise-contests' className={classes.subheader__subLink}>
                            {Language[lang].links.infoService.giwe}
                        </Link>
                    </div>

                    <div className={classes.subheader__right}>
                        <Link to='/informationServise-releases' className={classes.subheader__subLink}>
                            {Language[lang].links.infoService.mediaPlan}
                        </Link>

                        <Link to='/informationServise-library/photo' className={classes.subheader__subLink}>
                            {Language[lang].links.infoService.mediatec}
                        </Link>

                        <Link to='/informationServise-editions/reports' className={classes.subheader__subLink}>
                            {Language[lang].links.infoService.editions}
                        </Link>
                    </div>

                </div>
            </li>

        </ul>
    )
}

export default SubHeader