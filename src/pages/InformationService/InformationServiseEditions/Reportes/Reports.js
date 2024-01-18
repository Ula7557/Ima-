import React from 'react' 
import classes from './Reports.module.scss'
import FileCard from '../../../../components/FileCard'
import { useFetch } from '../../../../hooks/useFetch'
import { generate_date } from '../../../../services/getDate'
export default function Reports(){

    const [loading, data, error] = useFetch(`/content/all/docs?lang=ru`)
    if (loading) return null

    return(
    <div className={` ${classes.Reports} load-anim`}>
            {
                data.data && data.data.map((el,i)=>(
                    el.category_title[0].title ==='годовые' ? (
                        <div className={classes.item} >
                            <FileCard
                                key={i}
                                large={false}
                                file={JSON.parse(el.file)[0]}
                                title={generate_date(el.updated_on)}
                                variant={el.title}
                                memory='word (217.9 kb)'
                            />
                        </div>
                   ) : null
                   
                )) 
            }
        </div>
    )
}