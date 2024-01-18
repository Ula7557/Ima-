import React from 'react'
import classes from './SliderModal.module.scss'
import Slider from "react-slick";
import img1 from '../../assets/images/Mask Group (9).png'
import img2 from '../../assets/images/Mask Group (10).png'
import img3 from '../../assets/images/Mask Group (11).png'
import img4 from '../../assets/images/Mask Group (12).png'
import img5 from '../../assets/images/Mask Group (16).png'
import img6 from '../../assets/images/Mask Group (17).png'
import close from '../../assets/icons/Vector (48).png'

export default function SliderModal({ func, gallerys }){
        function SampleNextArrow(props) {
            const {   onClick } = props;
            return (
              <div
              className={classes.modal_btn2}
                onClick={onClick}
              ></div>
            );
          }
          
          function SamplePrevArrow(props) {
            const {  onClick } = props;
            return (
              <div
               className={classes.modal_btn}
                onClick={onClick}
              ></div>
            );
          }
          const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
              {
                breakpoint: 1650,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 1035,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            ]
          }
    return(
        <div className={classes.SliderModal}>
            <div className={classes.SliderModal_back} > <img onClick={func} src={close} /> </div>
            <Slider className={classes.modal} {...settings}>
            {
            gallerys.map((item,index) => (
            <div className={classes.slider_images_block} key={index}>
                <img className={classes.slider_images_inner} src={item} />
            </div>
            ))
            }
            
            </Slider>
        </div>
    )
}