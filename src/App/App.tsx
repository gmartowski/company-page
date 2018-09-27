import * as React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './app.less';
import {Header} from "../Components/Header/Header";
// import { Footer } from './Components/Footer/Footer';
// import Home from './Pages/Home/Home';
// import { Portfolio } from './Pages/Portfolio/Portfolio';
// import About from './Pages/About/About';
// import { Contact } from './Pages/Contact/Contact';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={'hello'}>
                    <Header />
                </div>
            </Router>
        );
    }
}

export default App;
