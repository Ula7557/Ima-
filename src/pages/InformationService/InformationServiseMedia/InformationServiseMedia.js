import React from 'react'
import classes from  './InformationServiseMedia.module.scss'
import CMICard from '../../../components/CMICard'
import MainTable from '../../../components/MainTable'
import BreadCrumb from '../../../components/BreadCrumb'
import {infoCMI,infoCMImob} from '../../../assets/db'
import ActivityArbitrageTable from '../../../components/ActivityArbitrageTable'
export default function InformationServiseMedia(){
    const newobj = [
        {
            title:'В заявке редакции должны быть указаны:',
            text:[
                {subText:'Название и вид средства массовой информации'},
                {subText:'Специализация'},
                {subText:'Территория распространения'},
                {subText:'Адрес электронной почты'},
                {subText:'Номера телефонов и факсов редакции'},
                {subText:'Фамилия, имя и отчество представленного на аккредитацию корреспондента'},
                {subText:'Аппаратура, которую необходимо иметь при себе данному корреспонденту для выполнения профессиональных обязанностей'},
                {subText:'Четыре фотографии установленной формы'},
            ]
        }
    ]
    return (
      <div className={` ${classes.InformationServiseMedia} load-anim`}>
        <BreadCrumb
          list={[
            { title: "Главная", path: "/" },
            { title: "Информационная служба", path: "/information-servise" },
            { title: "Каталог новости", path: "/informationServise-media" },
          ]}
        />
        <div className={`container ${classes.InformationServiseMedia_inner}`}>
          <h1>Аккредитация представителей СМИ</h1>
          <div className={classes.InformationServiseMedia_inner_main}>
            <p>
              Аккредитация представителей СМИ при Агентстве по интеллектуальной
              собственности Республики Узбекистан (Агентство) осуществляется
              согласно требованиям постановления Кабинета Министров Республики
              Узбекистан от 23.11.2006 г. №-243 «О совершенствовании порядка
              аккредитации представителей средств массовой информации Республики
              Узбекистан при органах государственной власти». Для аккредитации
              представителей СМИ при Агентстве редакция представляет заявку на
              своем официальном бланке за подписью главного редактора,
              заверенную печатью.
            </p>
            {newobj.map((elem, i) => (
              <CMICard key={i} title={elem.title} text={elem.text} />
            ))}
          </div>
          <div className={classes.InformationServiseMedia_inner_bottom}>
            {infoCMI.map((elem, i) => (
              <h2 key={i}>{elem.title}</h2>
            ))}
            <ActivityArbitrageTable
              left={true}
              object={infoCMI}
              object1={infoCMImob}
            />
          </div>
        </div>
      </div>
    );
}