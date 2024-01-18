import React, {useEffect,useRef,useState} from 'react'
import classes from './TopSlider.module.scss'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import img from '../../assets/images/img1.png'
import img2 from '../../assets/images/Mask Group (20).png'
import img3 from '../../assets/images/Mask Group (21).png'
import img4 from '../../assets/images/Mask Group (17).png'
import imgsmall from '../../assets/images/Mask Group.png'
import parse from 'html-react-parser' 
import { Link } from 'react-router-dom';
export default function TopSlider({data}) {
  const [big, setbig ]=useState([])
  const [images,setimages] = useState([
    {
      id:1,
      original: img2,
      title:'10 Декабрь',
      text:'Общественный контроль в центре внимание Агентства',
    },
    {
      id:2,
      original: img3,
      title:'24 Январь',
      text:'Пресс-конференция по итогам месяца ',
    },
    {
      id:3,
      original: img2,
      title:'10 Декабрь',
      text:'Общественный контроль в центре внимание Агентства',
    },
    {
      id:4,
      original: img2,
      title:'10 Декабрь',
      text:'Общественный контроль в центре внимание Агентства',
    },
    {
      id:5,
      original: img2,
      title:'10 Декабрь',
      text:'Общественный контроль в центре внимание Агентства',
    },
  ])
const [index,setIndex] = useState(0)  
useEffect(() => {
  setTimeout(() => {
      setbig(data[index]);
    if(index === data.length -1 ) {
  setIndex(0)
    } else {
  setIndex(index + 1)
    }
  }, 3000);
},[big,index,data])
    return(
        <div  className={classes.TopSlider}>
            <Link to={`/all-news/${big.id}`} className={classes.TopSlider_main_item_big} >
              <img src={big.image} />
              <div className={classes.content} >
                <h2>{}</h2>
                <p>{big.title}</p>
              </div>
            </Link>
          <div className={classes.TopSlider_main} >
            {
              data?.map((elem,i)=>(
                <div onClick={()=>setbig(elem)} key={i} className={classes.TopSlider_main_item} >
                   <img src={elem.image} />
                   <div className={classes.content_two} >
                      <h2>{elem.title}</h2>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    )
}