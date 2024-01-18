import React from "react";
import { Link } from "react-router-dom";
import classes from "./PhotoPart.module.scss";
import { imgLibrary } from "../../../../assets/db";
import { useFetch } from "../../../../hooks/useFetch";
import { generate_date } from "../../../../services/getDate";
export default function PhotoPart() {
    const [loading, data, error] = useFetch(`/content/all/gallery?lang=ru`);
    if (loading) return <></>
    return (
        <div>
            {data.data &&
                data.data.map((elem, i) =>
                    elem.category_title[0].title === 'photo' ? (

                        <Link key={i} to={`/detail/${elem.id}`} className={classes.PhotoPart}>
                            <img className={classes.photo_images} src={JSON.parse(elem.file)[0]} />
                            <div className={classes.PhotoPart_inner}>
                                <p> {generate_date(elem.updated_on)}</p>
                                <h2>{elem.title}</h2>
                            </div>
                        </Link>
                    ) : (
                        null
                    )
                )}
        </div>
    );
}
