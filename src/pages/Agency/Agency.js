/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Agency.module.scss";
import { useLang } from "../../context/LanguageProvider";
import Language from "../../lang";

// components
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

function Agency() {
  const [lang] = useLang();

  return (
    <div className={` ${classes.agency} load-anim`}>
       <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
        ]}/>
      <div className={`container ${classes.agency__inner}`}>
        <h2 className={classes.agency__title}>
          {Language[lang].headerLinks.agency}
        </h2>

        <div className={classes.agency__wrapper}>
          <div className={classes.agency__left}>
            <Link to="/about-agency" className={classes.agency__link}>
              {Language[lang].links.agency.aboutAgency}
            </Link>

            <Link to="/structura-agency" className={classes.agency__link}>
              {Language[lang].links.agency.structureAgency}
            </Link>

            <Link to="/guide-agency" className={classes.agency__link}>
              {Language[lang].links.agency.managent}
            </Link>

            <Link to="/collegue-agency" className={classes.agency__link}>
              {Language[lang].links.agency.collegue}
            </Link>

            <Link to="/departments-agency" className={classes.agency__link}>
              {Language[lang].links.agency.departments}
            </Link>

            <Link to="/organizations-agency" className={classes.agency__link}>
              {Language[lang].links.agency.organization}
            </Link>

            <Link to="/technical-agency" className={classes.agency__link}>
              {Language[lang].links.agency.technicalCouncil}
            </Link>

            <Link to="/question-answer" className={classes.agency__link}>
              {Language[lang].links.agency.questions}
            </Link>
          </div>

          <div className={classes.agency__right}>
            <Link to="/appeal-agency" className={classes.agency__link}>
              {Language[lang].links.agency.boardAppeal}
            </Link>

            <Link to="/public-council" className={classes.agency__link}>
              {Language[lang].links.agency.publicCounsil}
            </Link>

            <Link to="/patent-fund" className={classes.agency__link}>
              {Language[lang].links.agency.patentFund}
            </Link>

            <Link to="/awards-agency" className={classes.agency__link}>
              {Language[lang].links.agency.awards}
            </Link>

            <Link to="/requisite-agency" className={classes.agency__link}>
              {Language[lang].links.agency.requisites}
            </Link>

            <Link to="/vacany-agency" className={classes.agency__link}>
              {Language[lang].links.agency.vacancy}
            </Link>

            <Link to="/contact-agency" className={classes.agency__link}>
              {Language[lang].links.agency.contacts}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;
