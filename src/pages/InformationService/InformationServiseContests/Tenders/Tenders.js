import classes from "./Tenders.module.scss";
import FileCard from "../../../../components/FileCard";
import { concurse } from "../../../../assets/db";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../../components/BreadCrumb";
import CMICard from "../../../../components/CMICard";
import ActivityArbitrageTable from "../../../../components/ActivityArbitrageTable";
import { infodetail, infodetailmob } from "../../../../assets/db";
import { useFetch } from "../../../../hooks/useFetch";
import Loader from "../../../../containers/Loader";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

export default function Tenders(props) {
  const params = useParams();
  const obj = [
    {
      title: "Участники конкурса должны представить:",
      text: [
        {
          subText:
            "Заявку на участие в конкурсе по форме согласно приложению № 1 к Положению",
        },
        { subText: "Копию охранного документа(ов)" },
        {
          subText:
            "Акт об использовании объекта или другую документацию, подтверждающую готовность объекта к использованию (акт опытной или промышленной апробации, лицензионный договор, акт внедрения",
        },
      ],
    },
  ];
  const cols = [
    {
      name: "Адрес зявки",
    },
    {
      name: "Срок заявки",
    },
    {
      name: "Телефон ",
    },
    {
      name: "Электронный адрес",
    },
  ];

  const [loading, data, error] = useFetch(
    `/content/one/competition?id=${params.id}&lang=ru`
  );
  const [breadcrumb, setBreadcrumb] = useState([
    { title: "Главная", path: "/" },
    { title: "Новости", path: "/all-news" },
    { title: "Каталог новости", path: "/news" },
  ]);
  useEffect(() => {
    if (!loading) {
      setBreadcrumb((prev) => [
        ...prev,
        { title: data.data?.title, path: "/all-news/" + data.data?.id },
      ]);
    }
  }, [loading]);
  if (loading) return <Loader />;
  const {
    title,
    description,
    image,
    cont_address,
    created_on,
    cont_phone,
    cont_email,
    extra_desc,
  } = data.data;
  return (
    <div className={` ${classes.Tenders} load-anim`}>
      <BreadCrumb list={breadcrumb.slice(0, 4)} />

      <div className={`container ${classes.Tenders_inner}`}>
        <h1>{title}</h1>
        <div className={classes.Tenderss_innner_item}>
          <img
            style={{ width: "100%", height: 500, objectFit: "cover" }}
            src={image}
            alt={title}
          />
          <p className={classes.p}>{parse(description)}</p>

          <div className={classes.CMICard}>{parse(extra_desc)}</div>

          {/* {obj.map((el, i) => (
            <CMICard key={i} title={el.title} text={el.text} />
          ))} */}
        </div>
        <ActivityArbitrageTable
          object1={infodetailmob}
          columns={cols}
          data={[cont_address, created_on, cont_phone, cont_email]}
        />
        <div className={classes.Tenders_bottom}>
          <FileCard
            large={true}
            title="Для участников конкурса”"
            variant="word"
            memory="word (217.9 kb)"
          />
          <FileCard
            large={true}
            title="Заявка для участника”"
            variant="word"
            memory="word (217.9 kb)"
          />
        </div>
      </div>
    </div>
  );
}