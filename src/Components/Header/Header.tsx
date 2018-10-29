import React, { Component } from "react";
import { Provider, AppContext } from '../../App/Provider';
import i18next from "i18next";
import { translate } from "react-i18next";
import { Navbar } from "../Navbar/Navbar";
import { Button } from '../Button/Button';
import { Image } from '../Image/Image';
import { Link } from 'react-router-dom';
import "./header.less";

@translate("common")
export class Header extends Component {

    private onChangeLanguage = ({target: {firstChild: {nodeValue}}}) => i18next.changeLanguage(nodeValue.toLowerCase());

    public render() {
        const {t, theme} = this.props;
        return (
            <Provider>
                <AppContext.Consumer>
                    {
                        (context) => (
                            <header className={`header ${theme === 'home' ? 'header--home' : ''}`}>
                                {
                                    theme !== 'home' &&
                                    <div className="header__logo">
                                        <Link to="/">
                                            <Image src={context.logo}
                                                   alt="Logo Stabsoft"
                                                   title="Logo Stabsoft"
                                            />
                                        </Link>
                                    </div>
                                }
                                <div className="header__navbar">
                                    <Navbar theme={`${theme === 'home' ? 'home' : ''}`} />
                                </div>
                                <div className="header__locale">
                                    <Button type={`${theme === 'home' ? 'empty' : 'negative'}`}
                                            onClickHandler={this.onChangeLanguage}>{t("header.langPl")}</Button>
                                    <Button type={`${theme === 'home' ? 'empty' : 'negative'}`}
                                            onClickHandler={this.onChangeLanguage}>{t("header.langEn")}</Button>
                                </div>
                            </header>
                        )
                    }
                </AppContext.Consumer>
            </Provider>
        );
    }
}
