import React, { Component } from 'react';
import { ParticlesWrapper } from '../../Components/Particles/Particles';
import { Tile } from '../../Components/Tile/Tile';
import './home.less';
import { Button } from "../../Components/Button/Button";
import { Input } from "../../Components/Input/Input";

class Home extends Component {

    state = {
        value: ''
    };

    onClickHandler = (event) => {
        console.log(event.target.value);
    };

    onChangeHandler = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <div className="home">
                <ParticlesWrapper />
                <Input onChangeHandler={this.onChangeHandler} value={this.state.value} />
                <Input onChangeHandler={this.onChangeHandler} value={this.state.value} />
                <Button onClickHandler={this.onClickHandler}>Click me</Button>
                <div className="home__tiles-wrapper">
                    <Tile backgroundColor="orange" companyName="FunMedia" fontColor="white" technologicalStack="JS, LESS, jQuery" />
                    <Tile backgroundColor="blue" companyName="Credit Suisse" fontColor="white" technologicalStack="JS, LESS, jQuery" />
                    <Tile backgroundColor="green" companyName="Avra" fontColor="white" technologicalStack="JS, LESS, jQuery" />
                    <Tile backgroundColor="orange" companyName="The Green Line" fontColor="white" technologicalStack="JS, LESS, jQuery" />
                </div>
            </div>
        );
    }
}

export default Home;
