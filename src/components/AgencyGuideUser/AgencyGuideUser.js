import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './AgencyGuideUser.module.scss'
import parse from 'html-react-parser'
function AgencyGuideUser({ object }) {
    const type = ['Биография', 'Обязаности']
    const [typed, settype] = useState(type[0])
    const [types, settypes] = useState()
    useEffect(() => {
        if (object) {
            settypes(object.cont_bio)
        }
    }, [object])
        function ShowHide(elem) {
            let arr = ''
            if (elem === 'Обязаности') {
                arr = object.description
            } else {
                arr = object.cont_bio
            }
            settypes(arr)
            if (typed === elem) {
                settype(elem)
            } else {
                settype(elem)
            }
        }
    return (
        <>
            {
                    <div className={classes.user}>
                        <div className={classes.user__left}>
                            <img alt='' src={object?.image} />
                            <div className={classes.user__inner}>
                                <h2 className={classes.user__name} >{object?.title}</h2>
                                {/* <p className={classes.user__status}>{object.job}</p> */}
                                <a className={classes.user__number} href={object?.number}> {object?.cont_mobile}</a>
                                <a className={`${classes.user__number} ${classes.user__office}`} href={object?.cont_phone}> {object?.cont_phone}</a>
                                <a className={classes.user__mail} href={object?.mail}> {object?.cont_email}</a>
                            </div>
                        </div>
                        <div className={classes.user__right}>
                            <div className={classes.user__links}>
                                {
                                    type.map((elem, i) => (
                                        <Link to="#" key={i} onClick={() => ShowHide(elem)} className={typed === elem ? `${classes.user__link} ${classes.active}` : classes.user__link}>{elem}</Link>
                                    ))
                                }
                            </div>
                            <div className={classes.user__info}>
                                {
                                    types ?
                                        <p className={classes.user__information}>
                                            {parse(types)}
                                        </p>
                                        :
                                        ''
                                }

                            </div>
                        </div>
                    </div>
            }


        </>
    )
}

export default AgencyGuideUser