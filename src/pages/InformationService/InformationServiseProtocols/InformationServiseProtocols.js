import React from 'react'
import classes from './InformationServiseProtocols.module.scss'
import img from '../../../assets/images/Mask Group (8).png'
import BreadCrumb from '../../../components/BreadCrumb'
import FileCard from '../../../components/FileCard';
import { useFetch } from '../../../hooks/useFetch';
import { generate_date } from '../../../services/getDate';
import parse from 'html-react-parser';
import { useEffect,useState } from 'react';
export default function InformationServiseProtocols() {
    const [loading, data, error] = useFetch(`/content/all/speech?lang=ru`)
    if (loading) return null
    return (
      <div className={classes.InformationServiseProtocols}>

        <BreadCrumb
          list={[
            { title: "Главная", path: "/" },
            { title: "Информационная служба", path: "/information-servise" },
            {
              title: "Выступление и протоколы руководства",
              path: "/informationServise-protocols",
            },
          ]}
        />
        <div
          className={`container ${classes.InformationServiseProtocols_inner}`}
        >
          <h1>Выступление и протоколы руководства</h1>
          <div className={classes.InformationServiseProtocols_inner_main}>
            <div
              className={classes.InformationServiseProtocols_inner_main_left}
            >
              <img src={img} alt="" />
            </div>
            <div
              className={classes.InformationServiseProtocols_inner_main_right}
            >
              {data.data && data.data
                ? data &&
                  data.data.map((item, index) => (
                    <>
                      <h2>{item.title}</h2>
                      <h3>{generate_date(item.updated_on)}</h3>

                      <p>{parse(item.description)}</p>
                      <FileCard
                        large={true}
                        title={item.meta && JSON.parse(item.meta).meta_title}
                        // variant={item.meta && JSON.parse(item.meta).focus_keywords}
                        // memory={item.meta && JSON.parse(item.meta).focus_keywords}
                        file={item.file && JSON.parse(item.file)[0]}
                      />
                    </>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    );

}