import * as React from 'react';
import {Navbar} from "../Navbar/Navbar";
import './header.less';

export class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">Grzegorz Martowski</div>
                <div className="header__navbar">
                    <Navbar />
                </div>
            </header>
        );
    }
}
