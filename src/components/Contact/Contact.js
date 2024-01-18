import React from "react";
import classes from "./Contact.module.scss";
import contactIcon1 from "../../assets/icons/contactIcon1.png";
import contactIcon2 from "../../assets/icons/contactIcon2.png";
import contactIcon3 from "../../assets/icons/contactIcon3.png";
import contactIcon4 from "../../assets/icons/contactIcon4.png";
import contactIcon5 from "../../assets/icons/contactIcon5.png";
import { useLang } from "../../context/LanguageProvider";
import Language from "../../lang";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../containers/Loader";

const Contact = () => {
  const [lang] = useLang();
  const [loading, phone, error] = useFetch(
    "/system/settings/one?key=phone_number"
  );
  const [floading, fax] = useFetch("/system/settings/one?key=fax_number");
  const [aloading, address] = useFetch(
    "/system/settings/one?key=company_address"
  );
  const [eloading, email] = useFetch(
    "/system/settings/one?key=administrator_email"
  );
  if (loading && floading && eloading && aloading) return <Loader />;
  return (
    <div>
      <div className={classes.contact_wrapper}>
        <div className={classes.margin_div}>
          {/* leftside */}

          <p className={classes.contact_title}>
            {Language[lang].titles.contacts}
          </p>
          <div className={classes.contact_items}>
            <div className={classes.left_side}>
              <div className={classes.item}>
                <p className={classes.flex}>
                  {" "}
                  <img src={contactIcon1} alt="" />
                  Телефон
                </p>
                <a href="tel:+998990913021" className={classes.contact_link}>
                  {phone.data.settings_value}
                </a>
              </div>

              <div className={classes.item}>
                <p className={classes.flex}>
                  {" "}
                  <img src={contactIcon1} alt="" />
                  Телефон доверие
                </p>
                <a href="tel:+998990913021" className={classes.contact_link}>
                  +998 (71) 232 50 50
                </a>
              </div>

              <div>
                <p className={classes.flex}>
                  {" "}
                  <img src={contactIcon2} alt="" />
                  Адрес
                </p>
                <a
                  href="https://goo.gl/maps/7WqJ5b8q75Nywsx78"
                  className={classes.contact_link2}
                >
                  {address?.data?.settings_value}
                </a>
              </div>
            </div>

            {/* rightside */}

            <div className={classes.right_side}>
              <div className={classes.item}>
                <p className={classes.flex}>
                  {" "}
                  <img src={contactIcon3} alt="" />
                  Факс
                </p>
                <a href="tel:+998990913021" className={classes.contact_link}>
                  {fax?.data?.settings_value}
                </a>
              </div>

              <div className={classes.item}>
                <p className={classes.flex}>
                  {" "}
                  <img src={contactIcon4} alt="" />
                  E-mail
                </p>
                <a href="mailto:info@imao.uz" className={classes.contact_link}>
                  {email?.data?.settings_value}
                </a>
              </div>

              <div className={classes.item}>
                <p className={classes.flex}>
                  {" "}
                  <img src={contactIcon5} alt="" />
                  Режим работы
                </p>
                <div className={classes.bordered_div}>
                  <p>Пн – Пт </p>
                  <p>09:00 — 18:00</p>
                </div>
                <p className={classes.contact_link2}>Обед 12:00 — 13:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.map_wrap}>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1-ryy86yQwJRmSg0sAq8ku57zrpMG8Or0&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
