import React, { Component } from "react";
import { toolsFromPast, toolsCurrent, toolsWishList } from '../../experience-items.json';
import { translate } from "react-i18next";
import { Image } from "../../Components/Image/Image";
import { Provider, AppContext } from '../../App/Provider';
import './about.less';
import { Title } from '../../Components/Title/Title';

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
                                <Image src={context.avatar}
                                       alt={context.ceo}
                                       title={context.ceo}
                                />
                                <div className="about__content">

                                    <div className="about__text">
                                        <p className="cite">{t("about.experience")}</p>
                                        <p className="cite">{t("about.codingIsFun")}</p>
                                        <p className="cite">{t("about.interestedIn")}</p>
                                    </div>

                                    <div className="about__tools">

                                        <div className="about__tools-used">
                                            <Title markup={'h2'} title={t('about.pastToolsTitle')} />
                                            {
                                                Object.keys(toolsFromPast).map((tool) => (
                                                    <Image src={toolsFromPast[tool]}
                                                           title={tool}
                                                           alt={tool} />
                                                ))
                                            }
                                        </div>

                                        <div className="about__tools-current">
                                            <Title markup={'h2'} title={t('about.presentToolsTitle')} />
                                            {
                                                Object.keys(toolsCurrent).map((tool) => (
                                                    <Image src={toolsCurrent[tool]} alt={tool} title={tool} />
                                                ))
                                            }
                                        </div>

                                        <div className="about__tools-learned">
                                            <Title markup={'h2'} title={t('about.futureToolsTitle')} />
                                            {
                                                Object.keys(toolsWishList).map((tool) => (
                                                    <Image src={toolsWishList[tool]} alt={tool} title={tool} />
                                                ))
                                            }
                                        </div>
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
