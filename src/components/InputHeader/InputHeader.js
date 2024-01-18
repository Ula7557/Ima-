import React from 'react'
import classes from './InputHeader.module.scss'
import search from '../../assets/icons/search.png'
export default function InputHeader(){
    return(
        <div className={classes.InputHeader}>
            <div className={classes.InputHeader_input}>
                <input type='text'  placeholder='Поиск по сайту' />
                <img src={search}/>
            </div>
            <div className={classes.InputHeader_back}>
            </div>
        </div>
    )
}