import React, { Component } from "react";
import i18next from "i18next";
import { translate } from "react-i18next";
import { Navbar } from "../Navbar/Navbar";
import { Button } from '../Button/Button';
import "./header.less";

@translate("common")
export class Header extends Component {

    private onChangeLanguage = ({target: {firstChild: {nodeValue}}}) => i18next.changeLanguage(nodeValue.toLowerCase());

    public render() {
        const {t} = this.props;
        return (
            <header className="header">
                <div className="header__logo">{t("header.nameAndSurname")}</div>
                <div className="header__navbar">
                    <Navbar />
                </div>
                <div className="header__locale">
                    <Button type="positive" onClickHandler={this.onChangeLanguage}>{t("header.langPl")}</Button>
                    <Button type="positive" onClickHandler={this.onChangeLanguage}>{t("header.langEn")}</Button>
                </div>
            </header>
        );
    }
}
