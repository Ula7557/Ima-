import React from 'react' 
import classes from './Indexes.module.scss'
import FileCard from '../../../../components/FileCard'
import { useFetch } from '../../../../hooks/useFetch'
import { generate_date } from '../../../../services/getDate'
export default function Indexes(){
    const [loading, data, error] = useFetch(`/content/all/docs?lang=ru`)
    if (loading) return null
    return(
    <div className={` ${classes.Indexes} load-anim`}>

            {
                data.data && data.data.map((il,i)=>(
                    il.category_title[0].title === "Сборник" ? (
                        <div className={classes.item} >
                            <FileCard
                                key={i}
                                large={false}
                                file={JSON.parse(il.file)[0]}
                                title={generate_date(il.updated_on)}
                                variant={il.title}
                                memory='word (217.9 kb)'
                            />
                        </div>
                    ) : null
                )) 
            }
        </div>
    )
}