import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArbitrajCard from '../../../components/ArbitrajCard/ArbitrajCard'
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb'
import classes from "./Arbitraj.module.scss"
import FileCard from "../../../components/FileCard/FileCard";



const Arbitraj = () => {
  const data = [
    {
      year: 2017,
      id: 1,
      text: "   Решение Апелляционного совета от 27 июля 2017 года, принятое по результатам рассмотрения апелляции № AMG 2017 004, поданной С.М Ахмеджановым на решение Агентства об отказе в регистрации товарного знака «VICKS» по заявке № MGU 2015 1432 в отношении товаров 21 класса МКТУ",

    },
    {
      year: 2018,
      id: 2,
      text: " Решение Апелляционного совета от 27 июля 2017 года, принятое по результатам рассмотрения апелляции № AMG 2017 004, поданной С.М. Ахмеджановым на решение Агентства об отказе в регистрации товарного знака «VICKS» по заявке № MGU 2015 1432 в отношении товаров 21 класса МКТУ",

    },
    {
      year: 2017,
      id: 3,
      text: "  Решение Апелляционного совета от 27 июля 2017 года, принятое по результатам рассмотрения апелляции № AMG 2016 017, поданной ООО «ROSE DIAMOND» о признании недействительным патента № SAP 01257 на промышленный образец «Упаковка» (5 вариантов)",

    },
    {
      year: 2017,
      id: 4,
      text: "  Решение Апелляционного совета от 27 июля 2017 года, принятое по результатам рассмотрения апелляции № AMG2017 009, поданной СП ООО «Namangan Sharbati» о признании недействительным на территории РУз свидетельства № MGU 15169 на товарный знак «SILK»)",

    },
    {
      year: 2019,
      id: 5,
      text: "   Решение Апелляционного совета от 27 июля 2017 года, принятое по результатам рассмотрения апелляции №ASA 2017 006, поданной АО СП «УЗБАТ А.О.» о признании недействительным патента № SAP 01261 на промышленный образец Толкатель для торгового и рекламного оборудования",

    },
  ]
  const years = [2017, 2018, 2019]
  const [open, setOpen] = useState(2017)
  const sortHandler = (elem) => {
    setEnterData(data.filter(el => el.year === elem))
    if (open === elem) {
      setOpen(null)
    } else {
      setOpen(elem)
    }
  }
  const [enterData, setEnterData] = useState(data.filter(item => item.year === 2017))
  return (
    <div className={` ${classes.arbitraj_wrapper} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Деятельность", path: "/activity" },
          { title: "Арбитражные решения", path: "/activity-arbitration" },
        ]}
      />
      <div className={classes.arbitraj_inner_wrapper}>
        <h2 className={classes.arbitraj_title}>Арбитражные решения</h2>
        <div>
          <div className={classes.btn_wrapper}>
            {
              years.map((elem) => (
                <button className={open === elem ? classes.black_btn : ''} onClick={() => sortHandler(elem)}>{elem}</button>
              ))
            }
          </div>
          <div className={classes.arbitraj_card}>
            {enterData.map((item) => (
              //  <ArbitrajCard item={item}/>
              <FileCard
                large={true}
                title={item.text}
                variant='pdf'
                memory='217.9 kb'
              />,
              <FileCard
                large={true}
                title={item.text}
                variant='pdf'
                memory='217.9 kb'
              />,

              <FileCard
                large={true}
                title={item.text}
                variant='pdf'
                memory='217.9 kb'
              />

            ))}




          </div>
        </div>
      </div>

    </div>
  )
}

export default Arbitraj