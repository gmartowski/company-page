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
                                    <div className="about__tools">

                                        <div className="about__tools-used">
                                            <h2>Technologie z którymi pracowałem: </h2>
                                            <Image src={require("../../images/angular.png")}
                                                   title="AngularJS"
                                                   alt="AngularJS" />
                                            <Image src={require("../../images/jquery.png")}
                                                   title="jQuery"
                                                   alt="jQuery" />
                                            <Image src={require("../../images/wordpress.png")}
                                                   title="Wordpress"
                                                   alt="Wordpress" />

                                            <Image src={require("../../images/grunt.png")}
                                                   title="Grunt"
                                                   alt="Grunt" />

                                            <Image src={require("../../images/gulp.png")}
                                                   title="Gulp"
                                                   alt="Gulp" />
                                        </div>

                                        <div className="about__tools-current">
                                            <h2>Technologie jakich teraz używam: </h2>
                                            <Image src={require("../../images/js.png")}
                                                   title="Javascript"
                                                   alt="Javascript" />

                                            <Image src={require("../../images/html5.png")}
                                                   title="Html5"
                                                   alt="Html5" />

                                            <Image src={require("../../images/css3.png")}
                                                   title="CSS3"
                                                   alt="CSS3" />

                                            <Image src={require("../../images/reactjs.png")}
                                                   title="ReactJS"
                                                   alt="ReactJS" />

                                            <Image src={require("../../images/webpack.png")}
                                                   title="Webpack"
                                                   alt="Webpack" />

                                            <Image src={require("../../images/yarn.png")}
                                                   title="Yarn"
                                                   alt="Yarn" />

                                            <Image src={require("../../images/jest.png")}
                                                   title="Jest"
                                                   alt="Jest" />


                                            <Image src={require("../../images/enzyme.png")}
                                                   title="Enzyme"
                                                   alt="Enzyme" />

                                            <Image src={require("../../images/scrum.png")}
                                                   title="Scrum"
                                                   alt="Scrum" />
                                        </div>
                                        <div className="about__tools-learned">
                                            <h2>Czego się obecnie uczę:</h2>
                                            <Image src={require("../../images/nodejs.png")}
                                                   title="Cypress"
                                                   alt="Cypress" />

                                            <Image src={require("../../images/cypress.png")}
                                                   title="Cypress"
                                                   alt="Cypress" />

                                            <Image src={require("../../images/mongodb.png")}
                                                   title="Mongo DB"
                                                   alt="Mongo DB" />
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
