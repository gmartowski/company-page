import { AppContext, Provider } from "../../App/Provider";
import { Input } from "../../Components/Input/Input";
import React, { Component } from "react";
import { Select } from "../../Components/Input/Select";
import { Textarea } from "../../Components/Input/Textarea";
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

    private state = {
        email: "",
        message: "",
        name: "",
        profession: "",
    };

    private onChangeHandler = ({target: {name, value}}) => this.setState({[name]: value});

    public render() {
        const {t} = this.props;
        const {name, email} = this.state;
        const options = [{id: 1, name: "engineer"}, {id: 2, name: "professor"}, {id: 3, name: "project manager"}];
        return (
            <Provider>
                <AppContext.Consumer>
                    {
                        (context) => (
                            <div className="contact">
                                <div className="contact__details">
                                    <div className="contact__company-name">{context.name}</div>
                                    <div className="contact__name-and-surname">{context.ceo}</div>
                                    <div className="contact__email">{context.email}</div>
                                    <div className="contact__skype">{context.skype}</div>
                                </div>
                                <div className="contact__form">
                                    <div className="contact__form-input">
                                        <Input labelText="E-mail"
                                               onChangeHandler={this.onChangeHandler}
                                               name="email"
                                               value={email}
                                        />
                                    </div>
                                    <div className="contact__form-input">
                                        <Input labelText="Imię i nazwisko"
                                               onChangeHandler={this.onChangeHandler}
                                               name="name"
                                               value={name}
                                        />
                                    </div>
                                    <div className="contact__form-textarea">
                                        <Textarea onChangeHandler={this.onChangeHandler} value={this.state.message} />
                                    </div>

                                    <div className="contact_form-select">
                                        <Select name="profession" onChangeHandler={this.onChangeHandler}
                                                value={this.state.profession}>
                                            {options}
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </AppContext.Consumer>
            </Provider>
        );
    }
}
