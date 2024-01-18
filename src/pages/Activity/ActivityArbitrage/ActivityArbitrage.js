import React, { useState } from 'react'
import classes from './ActivityArbitrage.module.scss'
import ActivityArbitrageTable from '../../../components/ActivityArbitrageTable'
import CollegiumMeetings from '../../../components/CollegiomMeetings'
import BreadCrumb from '../../../components/BreadCrumb'
import {newobj} from '../../../assets/db'
import {newobjmedia} from '../../../assets/db'
export default function ActivityArbitrage() {
    let years = [2017,2018,2019,2020,2021]
    const [newarr,setNewarr]=useState(newobj.filter(el => el.part === 2017))
    const [newarred,setNewarred]=useState(newobjmedia.filter(el => el.part === 2017))
    const [opens,setOpens]=useState(2017)
    function call(elem) { 
        let called = newobj.filter(item => item.part === elem )
        setNewarr(called)
        if (opens === elem) {
            setOpens(null)
        }
        setOpens(elem)
        let called1 = newobjmedia.filter(item => item.part === elem )
        setNewarred(called1)
        if (opens === elem) {
            setOpens(null)
        }
        setOpens(elem)
    }
    return(
    <div className={` ${classes.ActivityArbitrage} load-anim`}>
            <BreadCrumb
                list={[
                    { title: "Главная", path: "/" },
                    { title: "Деятельность", path: "/activity" },
                    { title: "Судебная практика", path: "/activity-arbitrage" },
                ]}
            />
            <div className={`container ${classes.ActivityArbitrage_item}`}>
                <div className={classes.ActivityArbitrage_title}>
                    <h1>Судебная практика</h1>
                </div>
                <div className={classes.ActivityArbitrage_menu}>
                    <ul>
                        {
                            years.map((elem,i)=>(
                                <li className={opens === elem ? classes.black_btn:''} key={i}  onClick={()=>call(elem)} >{elem}</li>
                            ))
                        }
                    </ul>
                </div>
                {
                  newarr.map((er,i)=>(
                    <h2 key={i} >{er.title}</h2>
                  ))
                }
                <ActivityArbitrageTable object={newarr} left={false} object1={newarred }  />
            </div>
            <div className={`container  ${classes.ActivityArbitrage_itemss}`}>
            {
                newarr.map((item)=>(
                    item.items ? 
                    item.items.map((el,i)=>(
                        <CollegiumMeetings className={classes.itemss} key={i} id={el.id} text={''} title={'№10-1711/2307 (733)'} />
                    ))
                    : ''
                ))
            }
            </div>
        </div>
    )
    
}