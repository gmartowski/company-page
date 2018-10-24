import React, { Component } from "react";
import "./footer.less";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IFooterProps {
    name: string;
    ceo: string;
    street: string;
    flat: string;
    postal: string;
    city: string;
    phone: string;
    email: string;
}

export class Footer extends Component<IFooterProps, {}> {

    public render() {

        const {name, ceo, street, flat, postal, city, phone, email} = this.props;

        return (
            <footer className="footer">

                <div className="footer__wrapper">

                    <div className="footer__info">
                        <div className="footer__name">{name.first} {name.last}</div>
                        <div className="footer__ceo">{ceo}</div>
                        <div className="footer__street">{street} {flat}</div>
                        <div className="footer__postal-and-city">{postal} {city}</div>
                    </div>

                    <div className="footer__contact">
                        <div className="footer__phone">{phone}</div>
                        <div className="footer__email"><a href={`mailto:${email}`}>{email}</a></div>
                    </div>

                    <div className="footer__social" style={{fontSize: '40px'}}>
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </div>
                </div>
            </footer>
        );
    }
}
