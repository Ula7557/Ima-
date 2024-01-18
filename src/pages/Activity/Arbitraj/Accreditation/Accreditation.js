import React from 'react'
import BreadCrumb from '../../../../components/BreadCrumb/BreadCrumb'
import classes from "./Accreditation.module.scss"
import pdf from "../../../../assets/icons/pdf.png";
import download from "../../../../assets/icons/download.png";


const Accreditation = () => {
  return (
    <div className={` ${classes.arbitraj_wrapper} load-anim`}>

       <BreadCrumb
        list={["Главная", "Деятельность", "Интеллектуальная собственность"]}
      /> 
      <div className={classes.inner_accreditation_wrapper}>
        <h2 className={classes.accreditation_title}>Аккредитация представителей СМИ</h2>
        <div className={classes.top_content_wrapper}>
             <div className={classes.arbitraj_card_wrap}>
      <img src={pdf} alt="" />
      <div className={classes.txt_wrapper}>
        <p>
         Решение Апелляционного совета от 27 июля 2017 года, принятое по результатам рассмотрения апелляции № AMG 2016 017, поданной ООО «ROSE DIAMOND» о признании недействительным патента № SAP 01257 на промышленный образец «Упаковка» (5 вариантов) 
pdf (217.9 kb)
        </p>
        <div className={classes.donwload_wrapper}>
          <p>pdf (217.9 kb)</p>
          <button>
            <img src={download} alt="" />
          </button>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Accreditation