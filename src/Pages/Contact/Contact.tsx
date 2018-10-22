import { AppContext, Provider } from "../../App/Provider";
import React, { Component } from "react";
import { translate } from "react-i18next";
import "./contact.less";

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
                            <div className="contact">
                                <div className="contact__details">
                                    <div className="contact__company-name">{context.cName}</div>
                                    <div className="contact__name-and-surname">{context.name.first}</div>
                                    <div className="contact__name-and-surname">{context.name.last}</div>
                                    <div className="contact__skype">{context.skype}</div>
                                </div>
                                <div className="contact__portfolio-links">
                                    <div className="contact__email">{context.email}</div>
                                    <div className="contact__github">{context.github}</div>
                                    <div className="contact__facebook">{context.facebook}</div>
                                </div>
                            </div>
                        )
                    }
                </AppContext.Consumer>
            </Provider>
        );
    }
}
