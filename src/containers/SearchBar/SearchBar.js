import React, { useEffect } from 'react'
import classes from "./SearchBar.module.scss"
import { request } from '../../services/api';
import search from '../../assets/icons/search.png'

const SearchBar = () => {
	
	useEffect(() => {
        request.get('/content/all/news?lang=en&search=ASDASDF')
            .then(res => console.log(res.data))
    }, []) 

  return (
    
    <div className={` ${classes.search_input_wrapper}`}>
        <input type="search" placeholder="Поиск по сайту" className={classes.search_input} />
        <img src={search} alt="image" className={classes.input_icon}/>
    </div>
    
  )
}

export default SearchBar