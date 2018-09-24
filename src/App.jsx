import React, { Component } from 'react';
import 'spectre.css';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { ParticlesWrapper } from './Components/Particles/Particles';

export class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <ParticlesWrapper />
                <Footer />
            </div>
        );
    }
}
