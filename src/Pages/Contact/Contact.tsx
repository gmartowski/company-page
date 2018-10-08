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
                <div className="contact__details">
                    <div className="contact__company-name">Stabsoft</div>
                    <div className="contact__name-and-surname">Grzegorz Martowski</div>
                    <div className="contact__email"></div>
                    <div className="contact__skype"></div>
                </div>
                <div className="contact__form">
                    <div className="contact__form-input">
                        <input type="text" name="" value="" />
                    </div>
                    <div className="contact__form-input">
                        <input type="text" name="" value="" />
                    </div>
                    <div className="contact__form-textarea">
                        <textarea name=""></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
