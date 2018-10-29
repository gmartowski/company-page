import { AppContext, Provider } from "../../App/Provider";
import React, { Component } from "react";
import { translate } from "react-i18next";
import "./contact.less";
import { Image } from '../../Components/Image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Anchor } from '../../Components/Anchor/Anchor';

interface IContactState {
    email: string;
    name: string;
    message: string;
    profession: string;
}

interface IContactProps {
    t: void;
}

@translate("common")
export class Contact extends Component<IContactProps, IContactState> {

    public render() {
        return (
            <Provider>
                <AppContext.Consumer>
                    {
                        (context) => (
                            <div className="contact" id="contact">
                                <div className="contact__details">
                                    <div className="contact__logo">
                                        <Image src={context.logo} alt="Stabsoft" title="Stabsoft" />
                                    </div>
                                    <div className="contact__name-and-surname">
                                        <span>{context.name.first}</span>&nbsp;
                                        <span>{context.name.last}</span>
                                    </div>
                                    <div className="contact__nip">
                                        <span>NIP:&nbsp;</span>
                                        <span>894-285-98-21</span>
                                    </div>
                                    <div className="contact__regon">
                                        <span>REGON:&nbsp;</span>
                                        <span>022432082</span>
                                    </div>
                                </div>
                                <div className="contact__portfolio-links">
                                    <Anchor href={context.facebook} target={"_blank"}>
                                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                                    </Anchor>

                                    <Anchor href={context.linkedin} target={"_blank"}>
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                    </Anchor>

                                    <Anchor href={`mailto:${context.email}`} target={"_blank"}>
                                        <FontAwesomeIcon icon={['fa', 'envelope']} />
                                    </Anchor>

                                    <Anchor href={context.github} target={"_blank"}>
                                        <FontAwesomeIcon icon={['fab', 'github']} />
                                    </Anchor>
                                </div>
                            </div>
                        )
                    }
                </AppContext.Consumer>
            </Provider>
        );
    }
}
