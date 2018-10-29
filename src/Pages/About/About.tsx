import React, { Component } from "react";
import { toolsCurrent } from '../../experience-items.json';
import { translate } from "react-i18next";
import { Image } from "../../Components/Image/Image";
import { Provider, AppContext } from '../../App/Provider';
import './about.less';
import { Users } from '../../Components/Users/Users';
import { HomeSlider } from '../../Components/Slider/Slider';

interface IAboutProps {
    t: void
}

@translate("common")
export class About extends Component<IAboutProps> {

    public render() {

        const {t} = this.props;

        return (
            <Provider>
                <AppContext>
                    {
                        (context) => (
                            <div className="about">

                                <div className="about__bio">
                                    <Image src={context.avatar}
                                           alt={context.ceo}
                                           title={context.ceo}
                                    />
                                    <div className="about__tools-current">
                                        {
                                            Object.keys(toolsCurrent).map((tool) => (
                                                <Image src={toolsCurrent[tool]} alt={tool} title={tool} />
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className="about__content">

                                    <div className="about__text">
                                        <p className="cite">{t("about.experience")}</p>
                                        <p className="cite">{t("about.codingIsFun")}</p>
                                        <p className="cite">{t("about.interestedIn")}</p>
                                    </div>

                                    <div className="about__tools">

                                        <Users render={HomeSlider} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </AppContext>
            </Provider>
        );
    }
}
