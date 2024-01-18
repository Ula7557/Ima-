import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './PhotoDetail.module.scss'
import { imgLibrary } from '../../../../assets/db'
import SliderModal from '../../../../components/SliderModal'
import { useFetch } from '../../../../hooks/useFetch'


export default function PhotoDetail() {
    const [gallerys, setGallerys] = useState([])
    const params = useParams()
    const [loading, data, error] = useFetch(`/content/one/gallery?id=${params.id}&lang=ru`);

    useEffect(() => {
        if (data.data?.gallery) {
            const ar = [];
            for (let [key, value] of Object.entries(JSON.parse(data.data?.gallery))) {
                ar.push(value)
            }
            setGallerys(ar)
        }
    }, [loading])
    const [modal, setModal] = useState(false)
    function showHide() {
        setModal(!modal)
    }
    if (loading) return <></>

    return (
        <div className={classes.Photodetail}>
            <div className={`container ${classes.Photodetail_inner}`}>
                {/* <h1>{data.id}{data.data?.title}</h1> */}
                <div onClick={showHide} className={classes.Photodetail_inner_main}>
                    {gallerys.length > 0 ? (
                        gallerys.map((item, i) => (
                            <img className={classes.photo_item_img} src={item} alt='' key={i} />
                        ))
                    ) : (
                        <h1 className={classes.no_title_inner}>NO PHOTO</h1>
                    )}
                </div>
            </div>
            <div className={modal ? classes.show_modal : classes.close_modal}>
                <SliderModal
                gallerys={gallerys}
                 func={showHide} />

            </div>
        </div>
    )

}