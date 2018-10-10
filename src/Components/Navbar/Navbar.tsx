import * as React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import './navbar.less';

@translate('common')
class Navbar extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">{t('navbar.home')}</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">{t('navbar.portfolio')}</Link>
                    </li>
                    <li>
                        <Link to="/about">{t('navbar.about')}</Link>
                    </li>
                    <li>
                        <Link to="/contact">{t('navbar.contact')}</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
