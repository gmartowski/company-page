import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './app.less';
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Portfolio } from '../Pages/Portfolio/Portfolio';
import { Contact } from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';

class App extends Component {

    state = {
        company: {
            name: 'StabSoft',
            ceo: 'Grzegorz Martowski',
            street: 'Kokosowa',
            flat: '1/16',
            postal: '54-060',
            city: 'Wrocław',
            phone: '693-881-676',
            email: 'kontakt@stabsoft.pl'
        }
    };

    render() {
        const {company} = this.state;
        return (
            <Router>
                <div className={'hello'}>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Footer {...company} />
                </div>
            </Router>
        );
    }
}

export default App;
