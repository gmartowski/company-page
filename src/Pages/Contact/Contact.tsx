import React, { Component } from 'react';
import { translate } from 'react-i18next';

@translate('common')
class Contact extends Component {

    render() {
        const {t} = this.props;
        return (
            <div className="contact">
                <h1>Contact</h1>
                <h3>{t('welcome.title')}</h3>
                <div>{t('welcome.intro')}</div>
            </div>
        );
    }
}

export default Contact;
