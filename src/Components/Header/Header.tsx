import React, { Component } from "react";
import i18next from "i18next";
import { translate } from "react-i18next";
import { Navbar } from "../Navbar/Navbar";
import "./header.less";

@translate("common")
export class Header extends Component {

    private onChangeLanguage = ({target: {value}}) => i18next.changeLanguage(value);

    public render() {
        const {t} = this.props;
        return (
            <header className="header">
                <div className="header__logo">{t("header.nameAndSurname")}</div>
                <div className="header__navbar">
                    <Navbar />
                </div>
                <div className="header__locale">
                    <button className="btn" onClick={this.onChangeLanguage} value="pl">{t("header.langPl")}</button>
                    <button className="btn" onClick={this.onChangeLanguage} value="en">{t("header.langEn")}</button>
                </div>
            </header>
        );
    }
}
