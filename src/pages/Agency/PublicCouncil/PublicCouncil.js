/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
import React from "react";
import AboutAgencyListItem from "../../../components/AboutAgencyListItem/AboutAgencyListItem";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import classes from "./PublicCouncil.module.scss";

function PublicCouncil() {
  return (
    <div className={` ${classes.public__council} load-anim`}>
      <BreadCrumb
        list={[
          { title: "Главная", path: "/" },
          { title: "Агентство", path: "/agency" },
          { title: "Общественный совет", path: "/public-council" },
        ]}
      />
      <div className={`container ${classes.public__council__inner}`}>
        <h2 className={classes.public__council__title}>Общественный совет</h2>

        <div className={classes.public__council__wrapper}>
          <div className={classes.public__council__links}>
            <div className={classes.public__council__holderr}>
              <a className={classes.public__council__link} href="#">
                Общее положение
              </a>

              <a className={classes.public__council__link} href="#about">
                Основные задачи
              </a>

              <a className={classes.public__council__link} href="#abosut">
                Функции совета
              </a>

              <a className={classes.public__council__link} href="#abouat">
                Права совета
              </a>

              <a className={classes.public__council__link} href="#abofut">
                Обязанности совета
              </a>

              <a className={classes.public__council__link} href="#abouxt">
                Порядок формирования состава и организация работы
              </a>

              <a className={classes.public__council__link} href="#aboaut">
                Заключительные положения
              </a>
            </div>
          </div>

          <div className={classes.public__council__right}>
            <div className={classes.public__council__holder}>
              <h3 className={classes.public__council__subtitle}>
                Общие положения
              </h3>
              <p className={classes.public__council__text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                blanditiis quidem officiis nostrum aliquid qui odio inventore
                laborum ad quas rem rerum eaque ab illum ipsa assumenda
                dignissimos impedit tempora sed culpa molestiae, saepe optio?
                Nulla, nemo hic possimus, nihil corporis molestias provident,
                veritatis fugiat sequi voluptas a dolorem adipisci et. Facilis
                quidem ducimus perferendis architecto recusandae aliquid cumque
                magni, dignissimos aliquam, quis vero ipsa? Tenetur animi magnam
                non exercitationem corporis quam natus sapiente reiciendis
                minima rerum soluta ducimus vel suscipit consequatur asperiores
                hic maxime fugiat ipsa, reprehenderit error cumque a eveniet
                nihil tempora. Perspiciatis consequatur nam aspernatur nulla,
                quas optio ducimus dolor? Quidem nam quas harum aliquam expedita
                molestias quod fugiat? Deserunt repellendus at vel, tempora
                itaque eos ullam dolorum placeat aliquam dicta eveniet facilis
                molestias consequuntur fuga sequi ipsum obcaecati voluptates
                facere cum voluptatum optio, labore beatae. Animi hic deleniti
                doloremque quos voluptatem est sint aliquid explicabo sunt
                minima perferendis consequatur at eius commodi, maiores fugit
                repudiandae architecto, ex esse. Aut quo, dignissimos saepe
                dolor architecto enim dicta et vitae facere maiores libero
                veniam voluptates asperiores ipsam rem soluta tempore minus in
                cumque doloribus voluptatum harum? Magnam ipsum recusandae magni
                voluptate accusantium temporibus mollitia veniam obcaecati
                dolorum quidem!
              </p>
            </div>

            <ul className={classes.public__council__holder}>
              <li>
                <h3 className={classes.public__council__subtitle}>
                  Основными задачами общественного совета являются
                </h3>
              </li>
              <AboutAgencyListItem text="nam aspernatur nulla, quas optio ducimus dolor? Quidem nam quas harum aliquam expedita molestias quod fugiat? Deserunt repellendus at vel, tempora itaque eos ullam dolorum placeat aliquam dicta eveniet facilis molestias consequuntur fuga sequi ipsum obcaecati voluptates facere cum voluptatum optio, labore beatae. Animi hic deleniti doloremque quos voluptatem est sint aliquid explicabo sunt minima perferendis consequatur at eius commodi, maiores fugit repudiandae architecto, ex esse. Aut quo, dignissimos saepe dolor architecto enim dicta et vitae facere maiores libero veniam voluptates asperiores ipsam rem soluta tempore minus in cumque doloribus voluptatum harum? Magnam ipsum recusandae magni voluptate accusantium temporibus mollitia veniam obcaecati dolorum quidem!" />

              <AboutAgencyListItem text="nam aspernatur nulla, quas optio ducimus dolor? Quidem nam quas harum aliquam expedita molestias quod fugiat? Deserunt repellendus at vel, tempora itaque eos ullam dolorum placeat aliquam dicta eveniet facilis molestias consequuntur fuga sequi ipsum obcaecati voluptates facere cum voluptatum optio, labore beatae. Animi hic deleniti doloremque quos voluptatem est sint aliquid explicabo sunt minima perferendis consequatur at eius commodi, maiores fugit repudiandae architecto, ex esse. Aut quo, dignissimos saepe dolor architecto enim dicta et vitae facere maiores libero veniam voluptates asperiores ipsam rem soluta tempore minus in cumque doloribus voluptatum harum? Magnam ipsum recusandae magni voluptate accusantium temporibus mollitia veniam obcaecati dolorum quidem!" />
            </ul>

            <div id="about" className={classes.public__council__holder}>
              <h3 className={classes.public__council__subtitle}>
                Заключительные положения
              </h3>

              <p className={classes.public__council__text}>
                Материально-техническое обеспечение деятельности общественного
                совета осуществляется государственным органом, а также за счет
                других источников, не запрещенных законодательством. Контроль за
                соответствием деятельности общественного совета его положению и
                законодательству Республики Узбекистан осуществляется
                руководителем государственного органа. Решения общественного
                совета и руководителя государственного органа, связанные с
                деятельностью общественного совета, могут быть обжалованы в
                установленном порядке.
              </p>

              <p className={classes.public__council__info}>
                (Национальная база данных законодательства, 05.07.2018 г., №
                07/18/3827/1454)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PublicCouncil;
