import React, { Component } from 'react';
import './footer.less';

interface FooterProps {
    name: string;
    ceo: string;
    street: string;
    flat: string;
    postal: string;
    city: string;
    phone: string;
    email: string;
}

export class Footer extends Component<FooterProps, {}> {

    render() {
        const {name, ceo, street, flat, postal, city, phone, email} = this.props;
        return (
            <footer className="footer">

                <div className="footer__info">
                    <div className="footer__name">{name}</div>
                    <div className="footer__ceo">{ceo}</div>
                    <div className="footer__street">{street} {flat}</div>
                    <div className="footer__postal-and-city">{postal} {city}</div>
                </div>

                <div className="footer__contact">
                    <div className="footer__phone">{phone}</div>
                    <div className="footer__email"><a href={`mailto:${email}`}>{email}</a></div>
                </div>

                <div className="footer__social">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
            </footer>
        );
    }
}
