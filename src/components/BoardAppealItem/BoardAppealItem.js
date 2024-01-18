import React, { useState } from 'react'
import classes from './BoardAppealItem.module.scss'
import icons from '../../assets/icons/ICON.png'
import { useEffect } from 'react'
// import Collapsible from 'react-collapsible';
export default function BoardAppealItem({obj}) {
    const [select,setSelect]=useState(null)
    function toggle(i) {
        if( select === i ){
            setSelect(null)
        }else{
            setSelect(i)
        }
    }
    return(
        // <div className={classes.BoardAppeal_bottom_main}>
        // {
        //     obj.map((elem,index)=>{
        //         return(
        //             <div className={classes.BoardAppeal_bottom_main_item}>
        //                 <div className={classes.BoardAppeal_bottom_main_item_header}>
        //                     <span>
        //                         <h2>{elem.title}</h2>
        //                         <p>5 прикрепленных документов</p>
        //                     </span>
        //                     <button className={select === index ? classes.btn_click : classes.btn} onClick={()=>toggle(index)} ></button>
        //                 </div>
        //                 <div className={classes.BoardAppeal_bottom_main_item_elem}>
        //                     {
        //                     elem.text.map((item)=>{
        //                         return(
        //                                 <div className={ select === index ?   classes.BoardAppeal_bottom_main_item_elem_child : classes.block}>
        //                                     <img alt='' src={icons} />
        //                                     <span>
        //                                         <h4>{item.text_title}</h4>
        //                                         <h5>{item.text_detail}</h5>
        //                                     </span>
        //                                 </div>
        //                          )
        //                     })
        //                 } 
        //                 </div>
        //             </div>
        //         )
        //     })
        // }
        // </div>
        <></>
     
    )
}