import React from "react";
import classes from "./Banner.module.scss";
import { Link } from "react-router-dom";
const Banner = ({ pages ,amount}) => {
  return (
    <div className={classes.slider_wrap} >
      {
        pages ? 
        pages.map((el,i)=>(
        <div key={i} className={classes.banner_item}>
            {/* left img wrap*/}
          {
            el.page_item_big ? 
            el.page_item_big.map((li,i)=>(
              <Link key={i} to="google.com">
                  <div
                    className={classes.big_img}
                    style={{ minHeight: amount ?    "450px" : "661px" }}
                  >
                      <div className={classes.big_img_txt}>
                        <p className={classes.small_txt}>{li.date_big}</p>
                        <p className={classes.big_img_big_txt}>{li.text_1_big}</p>
                      </div>
                  </div>
                </Link>
            ))
            :''
            }

  
          {/*  right img wrap  */}

          <div className={classes.right_imgs_wrap}>
          {
            el.page_item_small ?
            el.page_item_small.map((ul,i)=>(
                <Link key={i} to="google.com">
                  <div
                    className={`${classes.right_first_img} ${classes.margin_bottom}`}
                  >
                    <div className={classes.insider_txt}>
                      <p className={classes.small_txt}>{ul.date}</p>
                      <p className={classes.normal_txt}>{ul.text_1}</p>
                    </div>
                  </div>
                </Link>
            ))
         :''

        }
          </div>
        </div>
         ))
          : ''
      }  
    </div>
  );
};

export default Banner;
