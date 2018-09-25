import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.less';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import { Portfolio } from './Pages/Portfolio';
import About from './Pages/About';
import { Contact } from './Pages/Contact';

export class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Navbar />
                    <Route exact component={Home} path="/" />
                    <Route component={Portfolio} path="/portfolio" />
                    <Route component={About} path="/about" />
                    <Route component={Contact} path="/contact" />
                    <Footer />
                </Fragment>
            </Router>
        );
    }
}
