import React from 'react'
import classes from './ServiceTopComponent.module.scss'
import PlayIcon from '../../assets/icons/Play.svg'
import { useDispatch } from 'react-redux'
import {toggleVideo} from '../../redux/action/video'

function ServiceTopComponent({ video, title, img, text }) {

    const dispatch = useDispatch();

    function handleClick() {
        window.open("https://id.egov.uz/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=150,left=300,width=600,height=500");
    }

    function handleOpenVideo() {
        dispatch(toggleVideo(true))
    }

    return (
        <div className={`${classes.service__component}`}>
                    <div className={classes.service__component__wrapper}>
                        <div className={classes.service__component__right}>
                            <div
                                className={classes.service__component__video}
                                onClick={handleOpenVideo}
                            >
                                <img src={PlayIcon} className={classes.service__component__icon} alt="" />

                                <h4 className={classes.service__component__video__title}>
                                    Видео инструкция
                                </h4>
                                <span>как подать заявку</span>
                            </div>

                            <button
                                className={classes.service__component__btn}
                                onClick={handleClick}
                            >подать заявку</button>
                        </div>
                    </div>
        </div>
    )
}

export default ServiceTopComponent