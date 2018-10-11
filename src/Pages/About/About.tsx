import React, { Component } from "react";
import { translate } from "react-i18next";
import { Image } from "../../Components/Image/Image";
import { AppContext, Provider } from "../../App/Provider";
import { Portal } from '../../Components/Portal/Portal';
import { Modal } from '../../Components/Modal/Modal';

@translate("common")
export class About extends Component {

    public render() {

        const {t} = this.props;
        return (
            <Provider>
                <AppContext.Consumer>
                    {
                        (context) => (
                            <div className="about">
                                <Image src={context.avatar}
                                       alt={context.ceo}
                                       title={context.ceo}
                                />
                                {t("about.content")}
                                <Portal>
                                    <Modal />
                                </Portal>
                            </div>
                        )
                    }
                </AppContext.Consumer>
            </Provider>
        );
    }
}
