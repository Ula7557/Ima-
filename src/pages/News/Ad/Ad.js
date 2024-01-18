import React, { useEffect, useState } from "react";
import AdItem from "../../../components/AdItem/AdItem";
import BreadCrumb from "../../../components/BreadCrumb";
import classes from "./Ad.module.scss";
import Pagination from "react-responsive-pagination";
import FilterImg from "../../../assets/icons/Filter.png";
import CloseBtn from "../../../assets/icons/close.png";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
import { generate_date } from "../../../services/getDate";
import { useDebounce } from "../../../hooks/useDebounce";

function Ad() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [searchText, setSearchText] = useState("");
  const totalPages = 17;
  const [loading, data, error] = useFetch("/content/all/news?lang=en");
  const [mutatedData, setMutatedData] = useState([]);
    const [prescate, setPresCate] = useState([])
    useEffect(() => {
        if (data.data) {
            let news = data.data.filter(el => el.category_title[0].slug === 'novosti')
            setPresCate(news)
        }
    }, [data.data])
  const debouncedSearchText = useDebounce(searchText, 1000);

  useEffect(() => {
    if (!loading) {
      setMutatedData(data.data);
    }
    if (debouncedSearchText) {
      setMutatedData(() =>
        mutatedData.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    } else {
      setMutatedData(data.data);
    }
  }, [debouncedSearchText, loading]);

  if (loading) return <Loader />;
  return (
    <div className={` ${classes.ad} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Новости", path: "/all-news" },
          { title: "Объявления", path: "/ad" },
        ]}
      />
      <div className={`container ${classes.ad__inner}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className={classes.ad__title}>Объявления</h1>

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

        <div className={classes.ad__wrapper}>
          <div className={classes.ad__holder}>
            <label className={classes.ad__label} htmlFor="search">
              Поиск по слову
            </label>
            <div className={classes.input}>
              <input
                placeholder="Напишите ключевое слово"
                className={classes.input__text}
                id="search"
                type="text"
                onChange={(event) => setSearchText(event.target.value)}
                autoComplete="off"
              />
            </div>
          </div>

          <div className={classes.ad__holder}>
            <label className={classes.ad__label} htmlFor="date">
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

        <div
          className={`${classes.main__news__holder__max} ${
            filter ? classes.holder__max : ""
          }`}
        >
          <div className={classes.main__all__news}>
            {mutatedData?.length > 0
              ? mutatedData.map(
                  (_) =>
                    _.category_title[0].slug === "obyavlenie" && (
                      <AdItem
                        date={generate_date(_.created_on)}
                        text={_.title}
                        view="321"
                        key={_.id}
                        link={"/ad/1"}
                      />
                    )
                )
              : ""}
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
                  // ref={type}
                  // onFocus={() => type.current.type = 'date'}
                  autoComplete="off"
                  // onChange={(e) => setState(e.target.value.split('-').join('/'))}
                />
              </div>
            </div>
            <button className={classes.submit__btn}>Поиск</button>
          </div>
        </div>
      </div>

      <div className="container" style={{ display: filter ? "none" : "block" }}>
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

export default Ad;
