import React, { useState, useRef, useEffect } from "react";
import BreadCrumb from "../../../components/BreadCrumb";
import classes from "./MainNews.module.scss";
import NewsCard from "../../../components/NewsCard";
import Loader from "../../../containers/Loader";
import Pagination from "react-responsive-pagination";
import FilterImg from "../../../assets/icons/Filter.png";
import CloseBtn from "../../../assets/icons/close.png";
import "./helper.scss";
import { useFetch } from "../../../hooks/useFetch";
function MainNews() {
  const [loading, data, error] = useFetch(`/content/all/news?lang=ru`);
  const [newsa,setnewsa]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const type = useRef(null);
  const totalPages = 5;
  useEffect(()=>{
    if (data.data) {
      let news = data.data.filter(el => el.category_title[0].slug=== 'novosti')
      setnewsa(news)
    }
  },[data.data])
  if (loading) return <Loader />;
  return (
    <div className={` ${classes.main__news} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Новости", path: "/all-news" },
          { title: "Каталог новости", path: "/news" },
        ]}
      />
      <div className={`container ${classes.main__news__inner}`}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 className={classes.main__news__title}>Новости</h1>

          <button
            className={`${classes.filter__img} ${
              filter ? classes.filter_hide : ""
            }`}
            onClick={() => setFilter(!filter)}
          >
            <img src={FilterImg} alt="filter" className={classes.filter_btn} />

            <img src={CloseBtn} alt="filter" className={classes.close_btn} />
          </button>
        </div>

        <div className={classes.main__news__wrapper}>
          <div className={classes.main__news__holder}>
            <label className={classes.main__news__label} htmlFor="search">
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

          <div className={classes.main__news__holder}>
            <label className={classes.main__news__label} htmlFor="date">
              Поиск по дате
            </label>
            <div className={classes.input}>
              <input
                placeholder={"Выберите дату"}
                className={classes.input__text + " " + classes.input__date}
                id="date"
                type="text"
                ref={type}
                // onFocus={() => type.current.type = 'date'}
                autoComplete="off"
                // onChange={(e) => setState(e.target.value.split('-').join('/'))}
              />
            </div>
          </div>
        </div>

        <div
          className={`${classes.main__news__holder__max} ${
            filter ? classes.holder__max : ""
          }`}
        >
          <div className={classes.main__all__news}>
            {newsa && newsa.length > 0 ? (
              newsa?.map((elem, index) => (
                <NewsCard
                  key={index}
                  img={elem.image}
                  title={elem.title}
                  date={`${new Date(
                    elem.updated_on.replace(" ", "T")
                  ).getDate()}.${
                    Number(
                      new Date(elem.updated_on.replace(" ", "T")).getMonth() + 1
                    ) < 10
                      ? "0" +
                        Number(
                          new Date(
                            elem.updated_on.replace(" ", "T")
                          ).getMonth() + 1
                        )
                      : Number(
                          new Date(
                            elem.updated_on.replace(" ", "T")
                          ).getMonth() + 1
                        )
                  } ${Number(
                    new Date(elem.updated_on.replace(" ", "T")).getFullYear()
                  )}`}
                  link={`/all-news/${elem.id}`}
                />
              ))
            ) : (
              <h2>Poka u nas netu novosti</h2>
            )}
          </div>

          <div className={classes.main__news__holder__main}>
            <div className={classes.main__news__holder__min}>
              <label className={classes.main__news__label} htmlFor="search">
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

            <div className={classes.main__news__holder__min}>
              <label className={classes.main__news__label} htmlFor="date">
                Поиск по дате
              </label>
              <div className={`${classes.input} ${classes.input__date}`}>
                <input
                  placeholder={"Выберите дату"}
                  className={classes.input__text + " " + classes.input__date}
                  id="date"
                  type="text"
                  ref={type}
                  // onFocus={() => type.current.type = 'date'}
                  autoComplete="off"
                  // onChange={(e) => setState(e.target.value.split('-').join('/'))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ display: filter ? "none" : "block" }}>
        <Pagination
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
          maxWidth={300}
        />
      </div>
    </div>
  );
}

export default MainNews;
