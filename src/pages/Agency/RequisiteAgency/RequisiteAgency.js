import React from "react";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./RequisiteAgency.module.scss";
import RequisitesTable from "./RequisitesTable";

function RequisiteAgency() {
  const requisitesList = [
    {
      id: 1,
      title: "Для уплаты патентных пошлин",
      currency: " (в национальной валюте)",
      tableHead: [
        "Получатель",
        "Казначейство Министерства Финансов Республики Узбекистан",
      ],
      tableBody: [
        {
          id: 1,
          content: ["ИНН", "201122919"],
        },
        {
          id: 2,
          content: ["Расчетный счет", "23402000300100001010"],
        },
        {
          id: 3,
          content: ["Банк получателя", "РКЦ ГУ ЦБ г. по Ташкент"],
        },
        {
          id: 4,
          content: ["МФО банка получателя", "00014"],
        },
        {
          id: 5,
          content: [
            "МФО банка получателя",
            "Патентная пошлина (гос.пошлина), Агентство по интеллектуальной собственности  Республики Узбекистан (АИС РУз) ИНН 302070846, л/с 4014108604262773422108009",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Валютные счета",
      currency: "",
      tableHead: [
        "Получатель",
        "Казначейство Министерства Финансов Республики Узбекистан",
      ],
      tableBody: [
        {
          id: 1,
          content: ["ИНН", "302070846"],
        },
        {
          id: 2,
          content: ["МФО банка получателя", "00014"],
        },
        {
          id: 3,
          content: [
            "Блок счет пошлина долл. США",
            "23402840900100001011 (Обязательно указать в деталях платежа: 400110840262777038100009001)",
          ],
        },
        {
          id: 4,
          content: [
            "Блок счет пошлина Рубль",
            "23402643300100001014 (Обязательно указать в деталях платежа: 400110643262777038100009001) BIC Code: MFRUUZ22",
          ],
        },
        {
          id: 5,
          content: [
            "Блок счет пошлина Швец. франк",
            "23402756300100001001 (Обязательно указать в деталях платежа: 400110756262777038100009001)",
          ],
        },
        {
          id: 6,
          content: [
            "Блок счет пошлина Евро",
            "23402978900100001001 (Обязательно указать в деталях платежа: 400110978262777038100009001)",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Счет корреспонденции для оплаты патентный пошлина",
      currency: "(в иностранном валюте)",
      tableHead: ["Получатель", "Название аккаунта", "Номер аккаунта", "Адрес"],
      tableBody: [
        {
          id: 1,
          content: [
            "Beneficiary (Field 57)",
            "Центральный банк Республики Узбекистан",
            "SWIFT: CBUZUZ22",
            "улица Истиклол 29, Ташкент, 100017Узбекистан",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "USD",
      currency: "",
      tableHead: ["Название банка", "SWIFT Сode", "Корреспондентский счет"],
      tableBody: [
        {
          id: 1,
          content: [
            "FEDERAL RESERVE BANK OF NEW YORK",
            "FRNYUS 33",
            "SWIFT: CBUZUZ22",
          ],
        },
        {
          id: 2,
          content: ["JPMORGAN CHASE BANK, NY", "CHASUS 33	", "0011388345"],
        },
        {
          id: 3,
          content: ["CITIBANK, N.A", "CITIUS 33", "36115651"],
        },
        {
          id: 4,
          content: [
            "DEUTSCHE BANK TRUST COMPANY AMERICAS",
            "BKTRUS 33",
            "04418690",
          ],
        },
        {
          id: 5,
          content: ["DEUTSCHE BANK AG", "DEUTDEFF", "100949775100"],
        },
        {
          id: 6,
          content: [
            "ASIA-INVEST BANK MOSCOW, RUSSIA",
            "ASIJRUMM",
            "30111840600000002719",
          ],
        },
        {
          id: 7,
          content: [
            "NATIONAL BANK FOR FOREGIN ECONOMIC ACTIVITY OF THE REPUBLIK OF UZBEKISTAN, TASHKENT, UZBEKISTAN",
            "NBFA UZ 2X",
            "21002840000000450089",
          ],
        },
        {
          id: 8,
          content: [
            "JSIC BANK IPAK YO'LI, TASHKENT, UZBEKISTAN",
            "INIPUZ2",
            "21002840900000401001",
          ],
        },
        {
          id: 9,
          content: [
            "JSC INDUSTRIAL CONSTRUCTION BANK OF UZBEKISTAN, TASHKENT, UZBEKISTAN",
            "UJSIUZ22",
            "21002840000000401110",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "EURO",
      currency: "",
      tableHead: ["Название банка", "SWIFT Сode", "Корреспондентский счет"],
      tableBody: [
        {
          id: 1,
          content: [
            "COMMERZBANK AG FRANKFURT AM MAIN, GERMANY",
            "COBADEFF",
            "400886834100",
          ],
        },
        {
          id: 2,
          content: [
            "ASIA-INVEST BANK MOSCOW, RUSSIA",
            "ASIJRUMM",
            "30111978200000002719",
          ],
        },
        {
          id: 3,
          content: [
            "NATIONAL BANK FOR FOREGIN ECONOMIC ACTIVITY OF THE REPUBLIK OF UZBEKISTAN, TASHKENT, UZBEKISTAN",
            "NBFA UZ 2X",
            "21002978900000450013",
          ],
        },
        {
          id: 4,
          content: [
            "JSIC BANK IPAK YO'LI, TASHKENT, UZBEKISTAN",
            "INIPUZ22",
            "21002978000000401001",
          ],
        },
        {
          id: 5,
          content: ["DEUTSCHE BUNDESBANK", "MARKDEFF", "5040040049"],
        },
        {
          id: 6,
          content: ["DEUTSCHE BANK AG", "DEUTDEFF", "100949775110"],
        },
      ],
    },
    {
      id: 6,
      title: "RUB",
      currency: "",
      tableHead: ["Название банка", "SWIFT Сode", "Корреспондентский счет"],
      tableBody: [
        {
          id: 1,
          content: [
            "NATIONAL BANK OF THE REPUBLIC OF UZBEKISTAN FOR FOREIGN ECONOMIC ACTIVITY",
            "NBFAUZ2X",
            "20802643200000450001",
          ],
        },
      ],
    },
  ];

  return (
    <div className={` ${classes.agency__requisite} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Реквизиты", path: "/requisite-agency" },
        ]}
      />
      <div className={`container ${classes.agency__requisite__inner}`}>
        <h2 className={classes.requisites__title}>Реквизиты</h2>
        {requisitesList.map((item, index) => (
          <RequisitesTable key={index} object={item} />
        ))}
      </div>
    </div>
  );
}

export default RequisiteAgency;
