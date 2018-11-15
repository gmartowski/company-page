import React, { Component } from "react";
import { toolsCurrent } from "../../experience-items.json";
import { translate } from "react-i18next";
import { Image } from "../../Components/Image/Image";
import { Provider, AppContext } from "../../App/Provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor } from "../../Components/Anchor/Anchor";
import "./about.less";

interface IAboutProps {
    t: void;
}

@translate("common")
export class About extends Component<IAboutProps> {

    public render() {
        const { t } = this.props;

        return (
                <Provider>
                    <AppContext>
                        {
                            (context) => (
                                    <div className="about" dataRandomElement="123345455" id="about">

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
                                                <p className="cite">{t("about.experience1")}</p>
                                                <p className="cite">{t("about.experience2")}</p>
                                                <p className="cite">{t("about.experience3")}</p>
                                                <p className="cite">{t("about.codingIsFun")}</p>
                                                <p className="cite">{t("about.interestedIn")}</p>
                                            </div>

                                            <div className="about__curriculum-vitae">
                                                <Anchor href={`http://stabsoft.pl/docs/${t("about.cvFile")}`} target="_blank">
                                                    <FontAwesomeIcon icon={["fas", "file-pdf"]} />
                                                </Anchor>
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
