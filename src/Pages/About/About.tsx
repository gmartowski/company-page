import React, { Component } from "react";
import { translate } from "react-i18next";
import { Image } from "../../Components/Image/Image";
import { Provider, AppContext } from '../../App/Provider';
import './about.less';

@translate("common")
export class About extends Component {

    public render() {

        const {t} = this.props;

        return (
            <Provider>
                <AppContext>
                    {
                        (context) => (
                            <div className="about">
                                <Image src={context.avatar}
                                       alt={context.ceo}
                                       title={context.ceo}
                                />
                                <div className="about__content">
                                    {t("about.content")}
                                </div>
                            </div>
                        )
                    }
                </AppContext>
            </Provider>
        );
    }
}
