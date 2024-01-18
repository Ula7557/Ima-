import React from "react";
import classes from "./ArbitrajCard.module.scss";
import pdf from "../../assets/icons/pdf.png";
import download from "../../assets/icons/download.png";
import { Link } from "react-router-dom";

const ArbitrajCard = ({item}) => {
  return (
    <div className={classes.arbitraj_card_wrap}>
      <img src={pdf} alt="" />
      <div className={classes.txt_wrapper}>
        <Link className={classes.arbitraj_txt} to={`/activity-arbitration/${item.id}` }>{item.text}</Link>
        <div className={classes.donwload_wrapper}>
          <p>pdf (217.9 kb)</p>
          <button>
            <img src={download} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArbitrajCard;
