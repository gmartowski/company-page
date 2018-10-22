import React, { Component } from "react";
import { ParticlesWrapper } from "../../Components/Particles/Particles";
import { Tile } from "../../Components/Tile/Tile";
import "./home.less";
import { Users } from '../../Components/Users/Users';
import { HomeSlider } from '../../Components/Slider/Slider';


export class Home extends Component {

    public render() {

        return (
            <div className="home">

                <ParticlesWrapper />
                <Users render={HomeSlider} />

                <div className="home__tiles-wrapper">
                    <Tile backgroundColor="orange"
                          companyName="FunMedia"
                          fontColor="white"
                          technologicalStack="JS, LESS, jQuery"
                    />
                    <Tile backgroundColor="blue"
                          companyName="Credit Suisse"
                          fontColor="white"
                          technologicalStack="JS, LESS, jQuery"
                    />
                    <Tile backgroundColor="green"
                          companyName="Avra"
                          fontColor="white"
                          technologicalStack="JS, LESS, jQuery"
                    />
                    <Tile backgroundColor="orange"
                          companyName="The Green Line"
                          fontColor="white"
                          technologicalStack="JS, LESS, jQuery"
                    />
                </div>
            </div>
        );
    }
}
