import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Header from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Portfolio } from '../Pages/Portfolio/Portfolio';
import Contact from '../Pages/Contact/Contact';
import { Home } from '../Pages/Home/Home';
import { About } from '../Pages/About/About';
import { Provider, AppContext } from "./Provider";
import './app.less';

export class App extends Component {

    render() {
        return (
            <Provider>
                <Router>
                    <div className={'hello'}>
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

library.add(faCheck);
