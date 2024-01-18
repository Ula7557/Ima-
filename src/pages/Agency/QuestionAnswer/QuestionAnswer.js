import React, { useEffect, useState } from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./QuestionAnswer.module.scss";
import Vacency from "../../../components/Vacency";
import { useFetch } from "../../../hooks/useFetch";
import Loader from "../../../containers/Loader";
const QuestionAnswer = () => {
  const [loading, data, error] = useFetch(
    "/segment/all/question_category?lang=ru"
  );
  const [allLoading, allData, allError] = useFetch(
    "/content/all/question?lang=en"
  );

  const [arr, setArr] = useState([]);
  const [ids, setIds] = useState(1);
  function filt(params) {
    let newarr = allData.data.filter(
      (el) => el.category_title[0].slug === params
    );
    setArr(newarr);
    setIds(params);
  }
  useEffect(() => {
    if(!allLoading) {
      setArr([allData.data[0]])
    }
  }, [allLoading])
  if (loading) return <Loader />;
  return (
    <div className={` ${classes.question_answer_wrapper} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Вопросы и ответы", path: "/question-answer" },
        ]}
      />
      <div className={classes.question_answer_wrapper_inner}>
        <h2 className={classes.question_answer_title}>Вопросы и ответы</h2>
        <div className={classes.question_content}>
          <div className={classes.left_content}>
            {data.data.map((item) => (
              <p
                onClick={() => filt(item.slug)}
                className={
                  item.slug === ids
                    ? classes.outer_title
                    : classes.question_title
                }
                key={item.id}
              >
                {item.title}
              </p>
            ))}
          </div>
          <div className={classes.right_content}>
            <p className={classes.question_title2}>
              {arr.length > 0 && arr[0]?.category_title[0]?.title}
            </p>
            <Vacency change={true} obj={arr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
