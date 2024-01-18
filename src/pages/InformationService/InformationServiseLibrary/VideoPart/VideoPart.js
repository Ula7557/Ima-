import React from 'react' 
import classes from './VideoPart.module.scss'
import {concurse} from '../../../../assets/db'
import youtube from '../../../../assets/icons/Vector (44).png'
import { generate_date } from '../../../../services/getDate'
import { useFetch } from '../../../../hooks/useFetch'
export default function VideoPart() {

    const [loading, data, error] = useFetch(`/content/all/gallery?lang=ru`);
    if (loading) return <></>

    return(
    <div className={` ${classes.VideoPart} load-anim`}>

            {
                data.data.map((item, index)=>(
                    item.category_title[0].title === 'video' ? (
                        <div className={classes.VideoPart_item}>
                            {/* <img className={classes.main_img} src={item.img}/>
                        <h2>{item.date}</h2>
                        <p>{item.title}</p>
                        <img className={classes.youtube} src={youtube} /> */}
                        
                            <video className={classes.videoPart_inner} key={index} id={item.id} controls src={JSON.parse(item.file)[0]}></video>
                            <p> {generate_date(item.updated_on)}</p>
                            <h6>{item.title}</h6>
                        </div>
                    ) : (
                        null
                    )
                    
                    


                ))
            }
        </div>
        // href = 'https://www.youtube.com/watch?v=TlbnGSMJQbQ&ab_channel=Illumination'
    )
    
}