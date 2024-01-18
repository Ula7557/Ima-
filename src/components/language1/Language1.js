import React , {useState} from 'react'
import "../../containers/Header/helper.scss";
import { useLang } from "../../context/LanguageProvider";
// import classes from "./Language1.module.scss"
import './language.scss'
export default function Language(){

    const currentLang = window.localStorage.getItem("lang")
    const [languageState, setLanguageState] = useState(false)
	// const [open, setOpen] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [lang, setLang] = useLang();
    const [language, setLanguage] = useState(currentLang === "ru" ? "Русский" : "O'zbekcha")

	// const ref = useRef(null)
    // function show(item) {
	// 	setOpen(!open)
	// 	ref.current.innerHTML = item.target.textContent

	// 	if (item.target.textContent === 'Uzbek') {
	// 		setLang("uz")
	// 		ref.current.parentNode.classList.value = 'header-btns style_lang_btn__R9n9f uzb'
	// 	} else {
	// 		setLang("ru")
	// 		ref.current.parentNode.classList.value = 'header-btns style_lang_btn__R9n9f'
	// 	}
	// }

    const handleClick = (lang) => {
        setLang(lang)
        setLanguageState(false)
        setLanguage(lang === "ru" ? "Русский" : "O'zbekcha")
    }

    return(
    //     <div className={classes.general_lang_modalWrap}>
    
    //     <button
    //         className={`header-btns ${classes.lang_btn} ${window.localStorage.getItem("lang") === "uz"
    //                 ? "uzb"
    //                 : window.localStorage.getItem("lang") === "ru"
    //                     ? "ru"
    //                     : window.localStorage.getItem("lang") === "en"
    //                         ? "usa"
    //                         : ""
    //             }`}
    //     >
    //         {window.localStorage.getItem("lang") === "ru" ? (
    //             <p ref={ref} onClick={show} className={classes.lang_txt}>
    //                 Русский
    //             </p>
    //         ) : window.localStorage.getItem("lang") === "uz" ? (
    //             <p
    //                 ref={ref}
    //                 onClick={show}
    //                 className={`${classes.lang_txt}`}
    //             >
    //                 Uzbek
    //             </p>
    //         ) : (
    //             ""
    //         )}
    //     </button>
    //     <div
    //         className={
    //             open === true
    //                 ? `${classes.showed} ${classes.lang_modal}`
    //                 : classes.lang_modal
    //         }
    //     >
    //         <button className={classes.lang_btn2}>
    //             <p onClick={show} className={classes.lang_txt}>
    //                 Русский
    //             </p>
    //         </button>
    //         <button className={classes.lang_btn2}>
    //             <p onClick={show} className={classes.lang_txt}>
    //                 Uzbek
    //             </p>
    //         </button>
    //     </div>

    // </div

    <div className="language-wrapper">
        <button
            className={`language-wrapper__main-btn ${language !== "Русский" ? 'uz-flag' : ''}`}
            onClick={() => setLanguageState(!languageState)}
        >
            {language}

            <div className={`langauges-holder ${languageState ? 'languages-show' : ''}`}>
                <button
                    onClick={handleClick.bind(null, "ru")}
                    className={`language-wrapperr ${language === "Русский" ? 'choosen' : ''}`}
                >
                    Русский
                </button>

                <button
                    onClick={handleClick.bind(null, "uz")}
                    className={`language-wrapperr uzb ${language === "O'zbekcha" ? 'choosen' : ''}`}
                >
                    O'zbekcha
                </button>

                <button
                    onClick={handleClick.bind(null, "uz")}
                    className={`language-wrapperr uzb ${language === "O'zbekcha" ? 'choosen' : ''}`}
                >
                    O'zbekcha
                </button>

                <button
                    onClick={handleClick.bind(null, "uz")}
                    className={`language-wrapperr uzb ${language === "O'zbekcha" ? 'choosen' : ''}`}
                >
                    O'zbekcha
                </button>
            </div>

        </button>
    </div>
    )
}