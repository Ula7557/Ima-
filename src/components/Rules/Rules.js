import React, { useState, useEffect } from "react";
import classes from './Rules.module.scss'
import Lump from '../../assets/icons/lump.png'
import img1 from '../../assets/images/image 162.png'
import img2 from '../../assets/images/photo_2022-03-24_12-46-21.jpg'
import parse from 'html-react-parser'
import { useFetch } from "../../hooks/useFetch";
const Rules = ({ obj }) =>  {
    const [innerLoading, innarData, innerError] = useFetch(`/content/all/service?lang=ru&parent=${obj[0].id}`)
    const [gallerys, setGallery] = useState([])
    const [ar, setar] = useState([])
    console.log(innarData);
    useEffect(() => {
        if (innarData.data) {
            let ar = [];
            let array = []
            innarData.data?.map((elem) => {
                if (elem.galler) {
                    for (let [key, value] of Object.entries(JSON.parse(elem?.galler))) {
                        ar.push(value)
                        elem.gallery = ar
                    }
                }
                ar = []
            })
            console.log(ar);
            setGallery(innarData.data)
        }
    }, [innarData.data])
    return (
        <div className={classes.ServicesInventionsRules}>
            {
                obj.map((item, i) => (
                    <div key={i} className={classes.ServicesInventionsRules_top} >
                        <p>{parse(item.description)}
                        </p>
                    </div>
                ))

            }
            {
                gallerys?.map((elem, i) => (
                    <div key={i} className={classes.ServicesInventionsRules_bottom}>
                        <div className={classes.ServicesInventionsRules_bottom_left}>
                            <h2>{elem.title}</h2>
                        </div>
                        <div className={classes.ServicesInventionsRules_bottom_right}>
                            <span>
                                <p>{parse(elem.description)}</p>
                            </span>
                            <span>

                                {
                                    elem.galler && elem.galler.length > 1 ? (
                                        elem.gallery?.map((item, i) => (
                                            <img key={i} src={item} />
                                        ))
                                    ) : (
                                        null
                                    )

                                }
                            </span>
                        </div>
                    </div>
                ))
            }

        </div>


    )
}
export default Rules