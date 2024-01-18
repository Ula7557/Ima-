import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LangProvider } from './context/LanguageProvider'
import "./assets/fontFamily/stylesheet.css"
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <Router>
                <Provider store={store}>
                    <LangProvider>
                        <App />
                    </LangProvider>
                </Provider>
            </Router>
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById("root")
);
