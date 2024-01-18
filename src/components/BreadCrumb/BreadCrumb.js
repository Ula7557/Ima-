import React from "react";
import { Link } from "react-router-dom";
import classes from "./BreadCrumb.module.scss";

function BreadCrumb({ list }) {
  return (
    <ul className={`container ${classes.breadcrumb}`}>
      {list && list.length > 0
        ? list.map((item, index) => (
            <li className={classes.breadcrumb__item} key={index}>
              <Link to={item.path ?? ""}>{item?.title ?? ""}</Link>
            </li>
          ))
        : ""}
    </ul>
  );
}

export default BreadCrumb;
