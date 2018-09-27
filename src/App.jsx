import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.less';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import { Portfolio } from './Pages/Portfolio/Portfolio';
import About from './Pages/About/About';
import { Contact } from './Pages/Contact/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
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

export default App;
