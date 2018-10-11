import React, { Component } from "react";
import { translate } from "react-i18next";
import { Image } from "../../Components/Image/Image";
import { AppContext, Provider } from "../../App/Provider";

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
                            </div>
                        )
                    }
                </AppContext.Consumer>
            </Provider>
        );
    }
}
