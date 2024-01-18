import React, { useRef, useEffect } from 'react'
import classes from './VideoHolder.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { toggleVideo } from '../../redux/action/video'

function VideoHolder() {
    const dispatch = useDispatch();
    const modal = useRef(null)
    const state = useSelector(state => state?.videoState?.state)

    function handleClose(e) {
        if (e.target === modal.current) {
            dispatch(toggleVideo(false))
            const iframe = document.querySelector('iframe')
            iframe.setAttribute('src', 'https://www.youtube.com/embed/eMZVrmxxkG8')
        }

    }

    // function ss() {
    //     const iframe = document.querySelector('iframe')
    //     return iframe.setAttribute('src', '')
    // }

    useEffect(() => {
        let iframe
        if (state) {
            iframe = document.querySelector('iframe')
            iframe.setAttribute('src', 'https://www.youtube.com/embed/eMZVrmxxkG8')
        }

        return () => iframe.setAttribute('src', 'https://www.youtube.com/embed/eMZVrmxxkG8')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div
            ref={modal}
            className={`${state ? classes.video__holder__visible : classes.video__holder}`}
            onClick={handleClose}
        >
            <div className={classes.video__holder__inner}>
                <iframe
                    width="970"
                    height="550"
                    src="https://www.youtube.com/embed/eMZVrmxxkG8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className='iframe'
                ></iframe>
            </div>
        </div>


    )
}

export default VideoHolder