import React from 'react';
import classes from './About.module.scss';

import AboutImg from '../../../../assets/images/activity-about.png';
import AboutAgencyListItem from '../../../../components/AboutAgencyListItem/AboutAgencyListItem';

function About() {

  const fakeData = new Array(3).fill('s')

  return (
    <div className={` ${classes.about} load-anim`}>
        <img className={classes.about__img} src={AboutImg} alt="img" />

      <div className={classes.about__right}>

        <div className={classes.about__wrapper}>
          {
            fakeData && fakeData.length > 0 ? (
              fakeData.map((_, index) => (
                <p
                  className={classes.about__text}
                  key={index}
                >
                  Всемирная организация интеллектуальной собственности (ВОИС) — международная организация, занимающаяся администрированием ряда ключевых международных конвенций в области интеллектуальной собственности, в первую очередь Бернской Конвенции об охране литературных и художественных произведений и Парижской Конвенции об охране промышленной собственности. С 1974 года также выполняет функции специализированного учреждения Организации Объединенных Наций по вопросам творчества и интеллектуальной собственности.
                </p>
              ))
            ) : ''
          }
        </div>

        <div className={classes.about__wrapper}>
          {
            fakeData && fakeData.length > 0 ? (
              fakeData.map((_, index) => (
                <p
                  className={classes.about__text}
                  key={index}
                >
                  Всемирная организация интеллектуальной собственности (ВОИС) — международная организация, занимающаяся администрированием ряда ключевых международных конвенций в области интеллектуальной собственности, в первую очередь Бернской Конвенции об охране литературных и художественных произведений и Парижской Конвенции об охране промышленной собственности. С 1974 года также выполняет функции специализированного учреждения Организации Объединенных Наций по вопросам творчества и интеллектуальной собственности.
                </p>
              ))
            ) : ''
          }
        </div>

        <div className={classes.about__wrapper}>
          <h2 className={classes.about__subtitle}>
            Узбекистан является участником следующих договоров и соглашений ВОИС
          </h2>

          {
            fakeData && fakeData.length > 0 ? (
              fakeData.map((_, index) => (
                  <AboutAgencyListItem
                    key={index}
                    text='Конвенция, учреждающая ВОИС'
                  />
              ))
            ) : ''
          }

        </div>

        <div className={classes.about__wrapper}>
          {
            fakeData && fakeData.length > 0 ? (
              fakeData.map((_, index) => (
                <p
                  className={classes.about__text}
                  key={index}
                >
                  Всемирная организация интеллектуальной собственности (ВОИС) — международная организация, занимающаяся администрированием ряда ключевых международных конвенций в области интеллектуальной собственности, в первую очередь Бернской Конвенции об охране литературных и художественных произведений и Парижской Конвенции об охране промышленной собственности. С 1974 года также выполняет функции специализированного учреждения Организации Объединенных Наций по вопросам творчества и интеллектуальной собственности.
                </p>
              ))
            ) : ''
          }
        </div>

      </div>
    </div>
  );
}

export default About;
