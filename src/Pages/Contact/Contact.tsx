import React, { Component } from 'react';
import { translate } from 'react-i18next';

class Contact extends Component {

    onChangeLanguage = ({target}) => {
        const {i18n} = this.props;
        i18n.changeLanguage(target.value);
    };

    render() {
        const {t} = this.props;
        return (
            <div className="contact">
                <h1>Contact</h1>
                <h3>{t('welcome.title')}</h3>
                <div>{t('welcome.intro')}</div>
                <button onClick={this.onChangeLanguage} value="pl">PL</button>
                <button onClick={this.onChangeLanguage} value="en">EN</button>
            </div>
        );
    }
}

export default translate('common')(Contact);
