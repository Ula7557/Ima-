import React, { useEffect, useState } from 'react'
import classes from './ActivityPatent.module.scss'
import PDF from '../../../assets/icons/ICON (4).png'
import Patents from '../../../components/Patents'
import BreadCrumb from '../../../components/BreadCrumb'
export default function ActivityPatent() {
    const obj = [
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
        {
            name:'Азимова Сайёра Акиловна',
            compName:'ООО "INTELLECTUAL TECHNOLOGIES”',
            registNum:'63',
            registDate:'18.09.2015',
            spacial:'СП 1/2',
            service:'Промышленные образцы /Товарные знаки и наименования мест происхождения товаров',
            lang:'Французский, Английский',
        },
    ]
     const [arr1,setArr1] = useState([])
     const [arr2,setArr2] = useState([])
    useEffect(()=>{
        let half = Math.ceil(obj.length / 2)
        setArr1(obj.slice(0,half))
        setArr2(obj.slice(half))
    },[])
    return(
        <div className={`${classes.ActivityPatent} load-anim`}>
             <BreadCrumb 
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Агентство", path: "/agency" },
                    { title: "Проверенные патенты", path: "/activity-patent" },
                ]} />
            <div className={classes.ActivityPatent_inner}>
                 <div className={classes.ActivityPatent_inner_title}>
                      <h1>Проверенные патенты</h1>
                      <img src={PDF} alt=''/>
                 </div>
                 <div className={classes.ActivityPatent_inner_main}>
                     <div className={classes.ActivityPatent_inner_main_item}>
                            <Patents object={arr1}/>
                     </div>
                     <div className={classes.ActivityPatent_inner_main_item}>
                           <Patents object={arr2}/>
                     </div>
                 </div>
            </div>
        </div>
    )
    
}