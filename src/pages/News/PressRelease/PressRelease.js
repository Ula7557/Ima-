import React, { useState ,useEffect} from 'react'
import BreadCrumb from '../../../components/BreadCrumb'
import FileCard from '../../../components/FileCard'
import classes from './PressRelease.module.scss'
import Pagination from 'react-responsive-pagination';
import FilterImg from '../../../assets/icons/Filter.png'
import CloseBtn from '../../../assets/icons/close.png'
import { useFetch } from '../../../hooks/useFetch';

function PressRelease() {
    const [loading,data,error]=useFetch(`/content/all/news?lang=ru`)
    const [prescate,setPresCate]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState(false)
    const totalPages = 17;
    const fakeArr = Array(8).fill('s')
    useEffect(()=>{
        if (data.data) {
            let news = data.data.filter(el =>  el.category_title[0].slug === 'novosti')
            setPresCate(news)
        }
    },[data.data])
    return (
      <div className={` ${classes.press__release} load-anim`}>
        <BreadCrumb
          list={[
            { title: "Главная", path: "/" },
            { title: "Новости", path: "/all-news" },
            { title: "Пресс-релиз", path: "/press-release" },
          ]}
        />
        <div className={`container ${classes.press__release__inner}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "28px",
            }}
          >
            <h1 className={classes.press__release__title}>Пресс-релиз</h1>

            <button
              className={`${classes.filter__img} ${
                filter ? classes.filter_hide : ""
              }`}
              onClick={() => setFilter(!filter)}
            >
              <img
                src={FilterImg}
                alt="filter"
                className={classes.filter_btn}
              />

              <img src={CloseBtn} alt="filter" className={classes.close_btn} />
            </button>
          </div>

          <div className={classes.press__release__wrapper}>
            <div className={classes.press__release__holder}>
              <label className={classes.press__release__label} htmlFor="search">
                Поиск по слову
              </label>
              <div className={classes.input}>
                <input
                  placeholder="Напишите ключевое слово"
                  className={classes.input__text}
                  id="search"
                  type="text"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className={classes.press__release__holder}>
              <label className={classes.press__release__label} htmlFor="date">
                Поиск по дате
              </label>
              <div className={classes.input}>
                <input
                  placeholder={"Выберите дату"}
                  className={classes.input__text + " " + classes.input__date}
                  id="date"
                  type="text"
                  // onFocus={() => type.current.type = 'date'}
                  autoComplete="off"
                  // onChange={(e) => setState(e.target.value.split('-').join('/'))}
                />
              </div>
            </div>
          </div>

                <div className={`${classes.main__news__holder__max} ${filter ? classes.holder__max : ''}`}>
                    <div className={classes.main__all__news}>
                        {
                            fakeArr && fakeArr.length > 0 ? (
                                fakeArr.map((_, index) => (
                                    <div className={classes.press__release__cards} key={index}>
                                        <FileCard
                                            date='12.01,10'
                                            large={true}
                                            title='Выдано свидетельство программе по экспресс-оценки степени активности фиброза печени'
                                            memory='3.24Mb'
                                            variant='word'
                                        />
                                    </div>
                                ))
                            ) : ''
                        }
                    </div>
                    <div className={classes.main__news__holder__main}>
                        <div className={classes.main__news__holder__min}>
                            <label className={classes.main__news__label} htmlFor="search">
                                Поиск по слову
                            </label>
                            <div className={classes.input}>
                                <input
                                    placeholder='Напишите ключевое слово'
                                    className={classes.input__text}
                                    id='search'
                                    type="text"
                                    autoComplete='off'
                                />
                            </div>
                        </div>

                        <div className={classes.main__news__holder__min}>
                            <label className={classes.main__news__label} htmlFor="date">
                                Поиск по дате
                            </label>
                            <div className={`${classes.input} ${classes.input__date}`}>
                                <input
                                    placeholder={'Выберите дату'}
                                    className={classes.input__text + ' ' + classes.input__date}
                                    id='date'
                                    type="text"
                                    // ref={type}
                                    // onFocus={() => type.current.type = 'date'}
                                    autoComplete='off'
                                // onChange={(e) => setState(e.target.value.split('-').join('/'))}
                                />
                            </div>
                        </div>
                        <button className={classes.submit__btn}>Поиск</button>
                    </div>
                </div>

            </div>

        <div
          className={`container`}
          style={{ display: filter ? "none" : "block" }}
        >
          <Pagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
            maxWidth={400}
          />
        </div>
      </div>
    );
}

export default PressRelease