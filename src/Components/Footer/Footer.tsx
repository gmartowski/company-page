import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor } from '../Anchor/Anchor';
import "./footer.less";

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

export const Footer = (props: IFooterProps) => {

    const {name, ceo, street, flat, postal, city, phone, email} = props;

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
                    <div className="footer__email">
                        <Anchor href={`mailto:${email}`} target={'_blank'}>
                            {email}
                        </Anchor>
                    </div>
                </div>

                <div className="footer__social" style={{fontSize: '40px'}}>
                    <Anchor href="https://www.facebook.com/stabsoft/" target="_self">
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </Anchor>
                    <Anchor href="https://www.linkedin.com/in/grzegorz-martowski-b961187a/" target="_self">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </Anchor>
                </div>
            </div>
        </footer>
    );
};
