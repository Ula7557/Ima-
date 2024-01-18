import React from 'react';
import classes from './FileCard.module.scss'

import fileCardImg from '../../assets/icons/pdf-file.svg'
import wordFileCard from '../../assets/images/word.png'
import downLoadImage from '../../assets/icons/download.svg'
import excelImg from '../../assets/icons/ex.png'
import File from '../../assets/files/resume.pdf'

function FileCard({ title = 'Названия файла', memory, large, variant, date, file }) {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={file} target='_blank' className={`${classes.file__card} ${large ? classes.file__card__large : ''}`} rel="noreferrer">
            <img
                src={variant === 'word' ? wordFileCard : variant === 'ex' ? excelImg : fileCardImg}
                alt="file-img"
                className={classes.file__img}
            />

            <div>
                <span className={classes.date}>{date}</span>
                <h4 className={classes.file__title}>
                    {title}
                </h4>
                <span className={classes.file__memory}>{variant === 'word' ? 'word ' : variant === 'ex' ? 'excel ' : 'pdf '}({memory})</span>
            </div>
            <a href={file} download>

                <img
                    src={downLoadImage}
                    alt="download-img"
                    className={classes.file__download}
                />
            </a>
        </a>
    )
}

/// file download qilish uchun href file berib dowload={true} attributini qoshb qotish kerak

export default FileCard;
