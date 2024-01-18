import React from "react";
import classes from './Document.module.scss'
import FileCard from "../FileCard";

export default function Document() {
    return(
        <div className={classes.ServicesInventionsDocumet}>
        <FileCard
            large={true}
            title='Заявление на регистрацию товарного знака на имя заявителя  ”'
            variant='word'
            memory='217.9 kb'
        />
        <FileCard
            large={true}
            title='Заявление на регистрацию товарного знака на имя заявителя  ”'
            variant='word'
            memory='217.9 kb'
        />
        <FileCard
            large={true}
            title='Заявление на регистрацию товарного знака на имя заявителя  ”'
            variant='word'
            memory='217.9 kb'
        />
        <FileCard
            large={true}
            title='Заявление на регистрацию товарного знака на имя заявителя  ”'
            variant='word'
            memory='217.9 kb'
        />
        <FileCard
            large={true}
            title='Заявление на регистрацию товарного знака на имя заявителя  ”'
            variant='word'
            memory='217.9 kb'
        />
        <a
            className={classes.laws__link}
            href="https://lex.uz/docs/111181"
            target='_blank'
            rel="noreferrer"
        >
            <h4>Правиласоставления, подачи и рассмотрения заявки на регистрацию товарного знака и знака обслуживания</h4>
        </a>
         <a
            className={classes.laws__link}
            href="https://lex.uz/docs/111181"
            target='_blank'
            rel="noreferrer"
        >
            <h4>Закон Республики Узбекистан о государственной пошлине</h4>
        </a>
        <a
            className={classes.laws__link}
            href="https://lex.uz/docs/111181"
            target='_blank'
            rel="noreferrer"
        >
            <h4>Определение классов МКТУ</h4>
        </a>
    </div>

    )   
}