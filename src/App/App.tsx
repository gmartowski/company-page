import React, { Component, Fragment } from "react";
import { About } from "../Pages/About/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Contact } from "../Pages/Contact/Contact";
import { faTimes, faCheck, faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { Home } from "../Pages/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { AppContext, Provider } from "./Provider";
import { Career } from "../Pages/Career/Career";
import "./app.less";

library.add(faCheck, faSearch, faChevronDown, faTimes, faFacebook, faLinkedin);

export class App extends Component {

    public render() {
        return (
            <Provider>
                <Router>
                    <>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/career" component={Career} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <AppContext.Consumer>
                            {
                                (context) => (
                                    <Footer {...context} />
                                )
                            }
                        </AppContext.Consumer>
                    </>
                </Router>
            </Provider>
        );
    }
}
