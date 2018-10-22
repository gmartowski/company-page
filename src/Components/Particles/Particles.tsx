import React, { Component } from "react";
import Particles from "react-particles-js";
import "./particles.less";
import { particlesProps} from './particlesProps'

export class ParticlesWrapper extends Component {

    public render() {
        return (
            <div>
                <h1 style={{position: "absolute", top: "50%", color: "#fff", width: '100%'}}>
                    <div style={{textAlign: 'center', fontSize: '50px'}}>Grzegorz Martowski</div>
                    <div style={{textAlign: 'center', fontSize: '60px'}}>#frontenddeveloper</div>
                </h1>
                <Particles {...particlesProps} />
            </div>
        );
    }
}
