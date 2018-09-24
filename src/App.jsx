import React, { Component } from 'react';
import 'spectre.css';
import { Header } from './Components/Header/Header';

window.onload = function() {
    Particles.init({
        selector: '.background',
        color: '#ffffff',
        connectParticles: true
    });
};

export class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
            </div>
        );
    }
}
