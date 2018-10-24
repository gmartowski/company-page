import React, { Component } from "react";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import "./navbar.less";

@translate("common")
export class Navbar extends Component {

    public render() {

        const {t} = this.props;

        return (
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/">{t("navbar.home")}</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/career">{t("navbar.career")}</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/about">{t("navbar.about")}</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/contact">{t("navbar.contact")}</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
