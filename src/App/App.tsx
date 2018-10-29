import React, { Component, Fragment } from "react";
import { About } from "../Pages/About/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Contact } from "../Pages/Contact/Contact";
import { faTimes, faCheck, faSearch, faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';
import { Home } from "../Pages/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Career } from "../Pages/Career/Career";
import "./app.less";
import { Layout } from '../Components/Layout/Layout';

library.add(faCheck, faEnvelope, faSearch, faChevronDown, faTimes, faFacebook, faLinkedin, faGithub, faSkype);

export class App extends Component {

    public render() {
        return (
            <Router>
                <Fragment>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/career" render={() => (
                        <Layout render={Career} />)
                    } />
                    <Route exact path="/about" render={() => (
                        <Layout render={About} />
                    )} />
                    <Route exact path="/contact" render={() => (
                        <Layout render={Contact} />
                    )} />
                </Fragment>
            </Router>
        );
    }
}
