import React, { Component } from "react";
import { About } from "../Pages/About/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Contact } from "../Pages/Contact/Contact";
import { faCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { Home } from "../Pages/Home/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { AppContext, Provider } from "./Provider";
import { Portfolio } from "../Pages/Portfolio/Portfolio";
import "./app.less";

library.add(faCheck, faSearch);

export class App extends Component {

    public render() {
        return (
            <Provider>
                <Router>
                    <div className={"hello"}>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <AppContext.Consumer>
                            {
                                (context) => (
                                    <Footer {...context} />
                                )
                            }
                        </AppContext.Consumer>
                    </div>
                </Router>
            </Provider>
        );
    }
}
