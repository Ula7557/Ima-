import React from 'react';
import classes from "./Card.module.scss"
import {Link} from 'react-router-dom'
const Card = ({text,title,img, link = '/'}) => {
       return (
            <Link to={link} className={classes.card_wrap}>
                  <div className={classes.card__wrapper}>
                        <img src={img} alt="" className={classes.card_icon}/>
                  </div>
                  <p className={classes.card_bold_txt}>{title}</p>
                  <p className={classes.card_light_txt}>{text}</p>
             </Link>
       )  
};
export default Card;
