import React from 'react';
import classes from "./Subscribtion.module.scss"
import subscribtion from "../../assets/images/subscribtion.png"
import { useLang } from '../../context/LanguageProvider';
import Language from '../../lang'

const Subscribtion = () => {

  const [lang] = useLang()

  return <div className={classes.subscribtion}>
    <div className={`container ${classes.inner}`}>
      <div className={classes.subscribe_flex}>
        <div className={classes.img_wrap}>
          <img src={subscribtion} alt="" />
        </div>
        <span className={classes.subscription_inner_txt}>
        {Language[lang].titles.subscribes}
        </span>
      </div>
      <div className={classes.input_wrapper}>
        <input placeholder={Language[lang].titles.email} className={classes.subscribe_input} />
        <button>{Language[lang].titles.follow}</button>
      </div>
    </div>
  </div>;
};

export default Subscribtion;
