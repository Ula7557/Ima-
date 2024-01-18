import React, {useState} from "react";
import classes from "./NavbarModal.module.scss";
import { Link } from "react-router-dom";
import SearchBar from "../../containers/SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { toggleHamburger } from "../../redux/action/modals";
import Language from '../../lang'
import { useLang } from "../../context/LanguageProvider";
import icon from '../../assets/icons/Vector (1).svg'
import { Facebook, Instagram, Telegram, Utube } from "../../assets/images";
import Language1 from '../../components/language1'
const NavbarModal = () => {
  const dispatch = useDispatch();

  const ModalState = useSelector(state => state)

  const [lang] = useLang()
  const [openmen,setOpenmen]=useState(null)
  function open(id) {
      if (openmen === id) {
        setOpenmen(null)
      }else{
          setOpenmen(id)
      }
      const outOfViewElement = document.querySelector(".top");
       outOfViewElement.scrollTo({
                behavior: "smooth", top:0
              });
      
  }

  return (
    // eslint-disable-next-line no-useless-concat
    <div
      className={ 
        ` top ${classes.navbar_menu}` +
        " " +
        `${
          ModalState.HamburgerState.state ? classes.hamburger__navbar__show : ""
        }`
      }
    >
      <SearchBar />
      <div className={`${classes.txt_part}`}>
                <div className={classes.txt_part_item}>
                    <p className={  openmen === 1 ? `${classes.word} ${classes.footer_title}` : classes.footer_title   } onClick={()=>open(1)}>{Language[lang].headerLinks.agency}   <img className={ openmen === 1 ? classes.icons_open : classes.icons} src={icon} alt="" /> </p>
                    <ul className={ openmen === 1 ?  classes.ule : classes.closes} > 
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link  to="/about-agency">{Language[lang].links.agency.aboutAgency}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/structura-agency">{Language[lang].links.agency.structureAgency}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/guide-agency">{Language[lang].links.agency.managent}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/departments-agency">{Language[lang].links.agency.departments}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/organizations-agency">{Language[lang].links.agency.organization}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/technical-agency">{Language[lang].links.agency.technicalCouncil}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/appeal-agency">{Language[lang].links.agency.boardAppeal}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/public-council">{Language[lang].links.agency.publicCounsil}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/patent-fund">{Language[lang].links.agency.patentFund}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/awards-agency">{Language[lang].links.agency.awards}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/requisite-agency">{Language[lang].links.agency.requisites}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/vacany-agency">{Language[lang].links.agency.vacancy}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/question-answer">{Language[lang].links.agency.questions}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/contact-agency">{Language[lang].links.agency.contacts}</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.txt_part_item}>
                    <p className={  openmen === 2 ? `${classes.word} ${classes.footer_title}`: classes.footer_title  } onClick={()=>open(2)}> {Language[lang].headerLinks.activity}  <img className={ openmen === 2 ? classes.icons_open : classes.icons} src={icon} alt="" /></p>
                    <ul className={ openmen === 2 ?  classes.ule : classes.closes} >
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-intellectual">{Language[lang].links.activity.intellectualProperty}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-patent">{Language[lang].links.activity.verifiedPatents}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-cooperation">{Language[lang].links.activity.internationalCooperation}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-corruption">{Language[lang].links.activity.againstCorruption}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-arbitrage">{Language[lang].links.activity.arbitrage}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-analytics">{Language[lang].links.activity.statistics}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-tenders">{Language[lang].links.activity.tenders}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-arbitration">{Language[lang].links.activity.awards}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-licensing">{Language[lang].links.activity.licence}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-e-government">{Language[lang].links.activity.governMent}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-appeal">{Language[lang].links.activity.brotherHood}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-open-data">{Language[lang].links.activity.openSourses}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/activity-universities">
                                {Language[lang].links.activity.univiersities}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.txt_part_item}>
                    <p className={ `${classes.old} ${classes.footer_title}`}> {Language[lang].headerLinks.services } </p>
                    <p className={  openmen === 3 ? `${classes.word} ${classes.footer_title}` : `${classes.newone} ${classes.footer_title}`   } onClick={()=>open(3)}>Услуги <img className={ openmen === 3 ? classes.icons_open : classes.icons} src={icon} alt="" /> </p>
                    <ul className={ openmen === 3 ?  classes.ule : classes.closes} >
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/inventions">{Language[lang].links.services.inventions}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/utility-models">{Language[lang].links.services.utility}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/services-appellations">{Language[lang].links.services.appelations}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/services-programs">{Language[lang].links.services.databases}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/services-design">{Language[lang].links.services.industrial}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/services-breeding">{Language[lang].links.services.achievments}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/service-marks">{Language[lang].links.services.serviceMarks}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/services-topologies">{Language[lang].links.services.topologies} </Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/patent-registeration">{Language[lang].links.services.register}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/attestation">
                                {Language[lang].links.services.attestetion}
                            </Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/patent-attestation">
                                {Language[lang].links.services.carrying}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.txt_part_item}>
                    <p className={  `${classes.old} ${classes.footer_title}`} onClick={()=>open(4)}>{Language[lang].titles.acts}   </p>
                    <p className={  openmen === 4 ? `${classes.word} ${classes.footer_title}`: ` ${classes.newone} ${classes.footer_title}`  } onClick={()=>open(4)}> Нормативно-правовые акты  <img className={ openmen === 4 ? classes.icons_open : classes.icons} src={icon} alt="" /> </p>
                    <ul className={ openmen === 4 ?  classes.ule : classes.closes} >
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/international-regulations">{Language[lang].links.acts.internationalActs}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/laws-Uzbekistan">{Language[lang].links.acts.lawsUzb}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/decrees-president">{Language[lang].links.acts.decrees}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/cabinet-ministers">{Language[lang].links.acts.ministres}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/industry-regulations">
                                {Language[lang].links.acts.industry}
                            </Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/documents-invalidated">{Language[lang].links.acts.docs}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/projects">{Language[lang].links.acts.projects}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/tariffs-duties ">{Language[lang].links.acts.category}</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.txt_part_item}>
                    <p className={  `${classes.old} ${classes.footer_title}`  } onClick={()=>open(5)}>{Language[lang].titles.infoService}  </p>
                    <p className={  openmen === 5 ? `${classes.word} ${classes.footer_title}` : ` ${classes.newone} ${classes.footer_title }` } onClick={()=>open(5)}> Информационная служба <img className={ openmen === 5 ? classes.icons_open : classes.icons} src={icon} alt="" /></p>
                    <ul className={ openmen === 5 ?  classes.ule : classes.closes} >
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/informationServise-protocols">
                               {Language[lang].links.infoService.performence}
                            </Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/informationServise-media">{Language[lang].links.infoService.media}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/informationServise-contests">{Language[lang].links.infoService.giwe}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/informationServise-releases">{Language[lang].links.infoService.mediaPlan}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/informationServise-library">{Language[lang].links.infoService.mediatec}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/informationServise-editions">{Language[lang].links.infoService.editions}</Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.txt_part_item}>
                    <p className={  openmen === 6 ? `${classes.word} ${classes.footer_title}`: classes.footer_title  } onClick={()=>open(6)}>{Language[lang].titles.news}  <img className={ openmen === 6 ? classes.icons_open : classes.icons} src={icon} alt="" /></p>
                    <ul className={ openmen === 6 ?  classes.ule : classes.closes} >
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/all-news">{Language[lang].titles.news}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/press-release">{Language[lang].titles.pressRelease}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/events">{Language[lang].titles.meets}</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/ad">{Language[lang].titles.ads}</Link>
                        </li>
                    </ul>
                  <div className={classes.txt_part_item}>
                    <p className={  openmen === 7 ? `${classes.word} ${classes.footer_title}` :  classes.footer_title  } onClick={()=>open(7)}>{Language[lang].titles.social}  <img className={ openmen === 7 ? classes.icons_open : classes.icons} src={icon} alt="" /></p>
                    <ul className={ openmen === 7 ?  classes.ule : classes.closes} >
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/Facebook">Facebook</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/Telegram">Telegram</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/YouTube">YouTube</Link>
                        </li>
                        <li onClick={()=> dispatch(toggleHamburger(!ModalState))} >
                            <Link to="/Instagram">Instagram</Link>
                        </li>
                    </ul>
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
                <div className={classes.langua}>
                    <Language1/>
                    <img  src={icon} alt="" />
                </div>
                </div>
          </div>
    </div>
  );
};

export default NavbarModal;
