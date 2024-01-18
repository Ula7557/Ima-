import React, { useState } from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Telegram, Utube } from "../../assets/images";
import Logo from "../../assets/images/gerb1.png";
import flag from "../../assets/images/Flag.png";
import uzbflag from "../../assets/images/uzbFlag.png";
import englishflag from "../../assets/images/englishFlag.png";
import latinflag from "../../assets/images/latinFlag.png";


import watcher from "../../assets/icons/eye.png";
import dropdown from "../../assets/icons/dropdown.png";
import icon from '../../assets/icons/Vector (1).svg'
import { useLang } from "../../context/LanguageProvider";
import Language from '../../lang'
const Footer = () => {
    const [open, setOpen] = useState(false);
    const [lang] = useLang();
    function show() {
        setOpen(!open)
    }
    const [openmen, setOpenmen] = useState(null)
    function opened(id) {
        if (openmen === id) {
            setOpenmen(null)
        } else {
            setOpenmen(id)
        }
    }
    return (
        <div className={classes.footer_wrap}>
            <div className={classes.txt_part}>
                <div className={classes.txt_part_item}>
                    <p className={openmen === 1 ? `${classes.word} ${classes.footer_title}` : classes.footer_title} onClick={() => opened(1)}>{Language[lang].headerLinks.agency}   <img className={openmen === 1 ? classes.icons_open : classes.icons} src={icon} /> </p>
                    <ul className={openmen === 1 ? classes.ule : classes.closes} >
                        <li>
                            <Link to="/about-agency">{Language[lang].links.agency.aboutAgency}</Link>
                        </li>
                        <li>
                            <Link to="/structura-agency">{Language[lang].links.agency.structureAgency}</Link>
                        </li>
                        <li>
                            <Link to="/guide-agency">{Language[lang].links.agency.managent}</Link>
                        </li>
                        <li>
                            <Link to="/departments-agency">{Language[lang].links.agency.departments}</Link>
                        </li>
                        <li>
                            <Link to="/organizations-agency">{Language[lang].links.agency.organization}</Link>
                        </li>
                        <li>
                            <Link to="/technical-agency">{Language[lang].links.agency.technicalCouncil}</Link>
                        </li>
                        <li>
                            <Link to="/appeal-agency">{Language[lang].links.agency.boardAppeal}</Link>
                        </li>
                        <li>
                            <Link to="/public-council">{Language[lang].links.agency.publicCounsil}</Link>
                        </li>
                        <li>
                            <Link to="/patent-fund">{Language[lang].links.agency.patentFund}</Link>
                        </li>
                        <li>
                            <Link to="/awards-agency">{Language[lang].links.agency.awards}</Link>
                        </li>
                        <li>
                            <Link to="/requisite-agency">{Language[lang].links.agency.requisites}</Link>
                        </li>
                        <li>
                            <Link to="/vacany-agency">{Language[lang].links.agency.vacancy}</Link>
                        </li>
                        <li>
                            <Link to="/question-answer">{Language[lang].links.agency.questions}</Link>
                        </li>
                        <li>
                            <Link to="/contact-agency">{Language[lang].links.agency.contacts}</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.txt_part_item}>
                    <p className={openmen === 2 ? `${classes.word} ${classes.footer_title}` : classes.footer_title} onClick={() => opened(2)}> {Language[lang].headerLinks.activity}  <img className={openmen === 2 ? classes.icons_open : classes.icons} src={icon} /></p>
                    <ul className={openmen === 2 ? classes.ule : classes.closes} >
                        <li>
                            <Link to="/activity-intellectual">{Language[lang].links.activity.intellectualProperty}</Link>
                        </li>
                        <li>
                            <Link to="/activity-patent">{Language[lang].links.activity.verifiedPatents}</Link>
                        </li>
                        <li>
                            <Link to="/activity-cooperation">{Language[lang].links.activity.internationalCooperation}</Link>
                        </li>
                        <li>
                            <Link to="/activity-corruption">{Language[lang].links.activity.againstCorruption}</Link>
                        </li>
                        <li>
                            <Link to="/activity-arbitrage">{Language[lang].links.activity.arbitrage}</Link>
                        </li>
                        <li>
                            <Link to="/activity-analytics">{Language[lang].links.activity.statistics}</Link>
                        </li>
                        <li>
                            <Link to="/activity-tenders">{Language[lang].links.activity.tenders}</Link>
                        </li>
                        <li>
                            <Link to="/activity-arbitration">{Language[lang].links.activity.awards}</Link>
                        </li>
                        <li>
                            <Link to="/activity-licensing">{Language[lang].links.activity.licence}</Link>
                        </li>
                        <li>
                            <Link to="/activity-e-government">{Language[lang].links.activity.governMent}</Link>
                        </li>
                        <li>
                            <Link to="/activity-appeal">{Language[lang].links.activity.brotherHood}</Link>
                        </li>
                        <li>
                            <Link to="/activity-open-data">{Language[lang].links.activity.openSourses}</Link>
                        </li>
                        <li>
                            <Link to="/activity-universities">
                                {Language[lang].links.activity.univiersities}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.txt_part_item}>
                    <p className={`${classes.old} ${classes.footer_title}`}> {Language[lang].headerLinks.services} </p>
                    <p className={openmen === 3 ? `${classes.word} ${classes.footer_title}` : `${classes.newone} ${classes.footer_title}`} onClick={() => opened(3)}>Услуги <img className={openmen === 3 ? classes.icons_open : classes.icons} src={icon} /> </p>
                    <ul className={openmen === 3 ? classes.ule : classes.closes} >
                        <li>
                            <Link to="/inventions">{Language[lang].links.services.inventions}</Link>
                        </li>
                        <li>
                            <Link to="/utility-models">{Language[lang].links.services.utility}</Link>
                        </li>
                        <li>
                            <Link to="/services-appellations">{Language[lang].links.services.appelations}</Link>
                        </li>
                        <li>
                            <Link to="/services-programs">{Language[lang].links.services.databases}</Link>
                        </li>
                        <li>
                            <Link to="/services-design">{Language[lang].links.services.industrial}</Link>
                        </li>
                        <li>
                            <Link to="/services-breeding">{Language[lang].links.services.achievments}</Link>
                        </li>
                        <li>
                            <Link to="/service-marks">{Language[lang].links.services.serviceMarks}</Link>
                        </li>
                        <li>
                            <Link to="/services-topologies">{Language[lang].links.services.topologies} </Link>
                        </li>
                        <li>
                            <Link to="/patent-registeration">{Language[lang].links.services.register}</Link>
                        </li>
                        <li>
                            <Link to="/attestation">
                                {Language[lang].links.services.attestetion}
                            </Link>
                        </li>
                        <li>
                            <Link to="/patent-attestation">
                                {Language[lang].links.services.carrying}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.txt_part_item}>
                    <p className={`${classes.old} ${classes.footer_title}`} onClick={() => open(4)}>{Language[lang].titles.acts}   </p>
                    <p className={openmen === 4 ? `${classes.word} ${classes.footer_title}` : ` ${classes.newone} ${classes.footer_title}`} onClick={() => opened(4)}> Нормативно-правовые акты  <img className={openmen === 4 ? classes.icons_open : classes.icons} src={icon} /> </p>
                    <ul className={openmen === 4 ? classes.ule : classes.closes} >
                        <li>
                            <Link to="/international-regulations">{Language[lang].links.acts.internationalActs}</Link>
                        </li>
                        <li>
                            <Link to="/laws-Uzbekistan">{Language[lang].links.acts.lawsUzb}</Link>
                        </li>
                        <li>
                            <Link to="/decrees-president">{Language[lang].links.acts.decrees}</Link>
                        </li>
                        <li>
                            <Link to="/cabinet-ministers">{Language[lang].links.acts.ministres}</Link>
                        </li>
                        <li>
                            <Link to="/industry-regulations">
                                {Language[lang].links.acts.industry}
                            </Link>
                        </li>
                        <li>
                            <Link to="/documents-invalidated">{Language[lang].links.acts.docs}</Link>
                        </li>
                        <li>
                            <Link to="/projects">{Language[lang].links.acts.projects}</Link>
                        </li>
                        <li>
                            <Link to="/tariffs-duties ">{Language[lang].links.acts.category}</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.txt_part_item}>
                    <p className={`${classes.old} ${classes.footer_title}`} onClick={() => open(5)}>{Language[lang].titles.infoService}  </p>
                    <p className={openmen === 5 ? `${classes.word} ${classes.footer_title}` : ` ${classes.newone} ${classes.footer_title}`} onClick={() => opened(5)}> Информационная служба <img className={openmen === 5 ? classes.icons_open : classes.icons} src={icon} /></p>
                    <ul className={openmen === 5 ? classes.ule : classes.closes} >
                        <li>
                            <Link to="/informationServise-protocols">
                                {Language[lang].links.infoService.performence}
                            </Link>
                        </li>
                        <li>
                            <Link to="/informationServise-media">{Language[lang].links.infoService.media}</Link>
                        </li>
                        <li>
                            <Link to="/informationServise-contests">{Language[lang].links.infoService.giwe}</Link>
                        </li>
                        <li>
                            <Link to="/informationServise-releases">{Language[lang].links.infoService.mediaPlan}</Link>
                        </li>
                        <li>
                            <Link to="/informationServise-library">{Language[lang].links.infoService.mediatec}</Link>
                        </li>
                        <li>
                            <Link to="/informationServise-editions">{Language[lang].links.infoService.editions}</Link>
                        </li>
                    </ul>
                    <div className={classes.txt_part_item}>
                        <p className={openmen === 6 ? `${classes.word} ${classes.footer_title}` : classes.footer_title} onClick={() => opened(6)}>{Language[lang].titles.news}  <img className={openmen === 6 ? classes.icons_open : classes.icons} src={icon} /></p>
                        <ul className={openmen === 6 ? classes.ule : classes.closes} >
                            <li>
                                <Link to="/all-news">{Language[lang].titles.news}</Link>
                            </li>
                            <li>
                                <Link to="/press-release">{Language[lang].titles.pressRelease}</Link>
                            </li>
                            <li>
                                <Link to="/events">{Language[lang].titles.meets}</Link>
                            </li>
                            <li>
                                <Link to="/ad">{Language[lang].titles.ads}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ textDecoration: 'none' }} className={classes.ending_part}>
                <div className={classes.footer_inner_wrap}>
                    <div className={classes.img_wrapper}>
                        <img src={Logo} alt="" />
                        <div className={classes.inner_txt_wrapper}>
                            <p className={classes.margin_text}>
                                {Language[lang].title}
                            </p>
                            <p className={classes.margin_text2}>© ВСЕ ПРАВА ЗАЩИЩЕНЫ 2021</p>
                        </div>
                    </div>
                    <div className={classes.btn_wrapper}>
                        <a href="https://www.youtube.com/">
                            <Utube />
                        </a>
                        <a href="@gulhay0">
                            <Telegram />
                        </a>
                        <a href="https://www.facebook.com/">
                            <Facebook />
                        </a>
                        <a href="https://www.instagram.com/">
                            <Instagram />
                        </a>
                    </div>
                </div>
                <div className={classes.last_part}>
                    <p className={classes.txt_flex}><img src={watcher} alt="" className={classes.eyeIcon} />{Language[lang].titles.onlineNow} 194 {Language[lang].titles.users} </p>
                    <div>
                        <div className={classes.modal_wrapper_below}>
                            <button onClick={show} className={classes.btn_flex}>Русский <img src={dropdown} alt="" /></button>
                            <div className={open === true ? classes.lang_modals : classes.lang_modal_below}>
                                <div className={classes.flag_div}>
                                    <img src={englishflag} alt="" />
                                    <button onClick={show} className={classes.btn_flex}>Английский </button>
                                </div>
                                <div className={classes.flag_div}>
                                     <img src={uzbflag} alt="" />
                                    <button onClick={show} className={classes.btn_flex}>Узбекский </button>
                                </div>
                                <div className={classes.flag_div}>
                                     <img src={latinflag} alt="" />
                                    <button onClick={show} className={classes.btn_flex}>Латинский </button>
                                </div>
                                <div className={classes.flag_div}>
                                     <img src={flag} alt="" />
                                    <button onClick={show} className={classes.btn_flex}>Русский </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* language btn modal */}
                </div>

            </div>
        </div>
    );
};
export default Footer;
