import React, { Component } from 'react';
import i18next from 'i18next';
import { Navbar } from "../Navbar/Navbar";
import './header.less';

export class Header extends Component {
    onChangeLanguage = ({target}) => {
        i18next.changeLanguage(target.value);
    };
    render() {
        return (
            <header className="header">
                <div className="header__logo">Grzegorz Martowski</div>
                <div className="header__navbar">
                    <Navbar />
                </div>
                <div className="header__lang">
                    <button className="btn" onClick={this.onChangeLanguage} value="pl">PL</button>
                    <button className="btn" onClick={this.onChangeLanguage} value="en">EN</button>
                </div>
            </header>
        );
    }
}
