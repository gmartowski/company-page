import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ParticlesWrapper } from '../Components/Particles/Particles';
import { Tile } from '../Components/Tile/Tile';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <ParticlesWrapper />
                <div className="home__tiles-wrapper">
                    <Tile backgroundColor="orange" companyName="FunMedia" fontColor="white" technologicalStack="JS, LESS, jQuery"/>
                    <Tile backgroundColor="blue" companyName="Credit Suisse" fontColor="white" technologicalStack="JS, LESS, jQuery"/>
                    <Tile backgroundColor="green" companyName="Avra" fontColor="white" technologicalStack="JS, LESS, jQuery"/>
                    <Tile backgroundColor="orange" companyName="The Green Line" fontColor="white" technologicalStack="JS, LESS, jQuery"/>
                </div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
