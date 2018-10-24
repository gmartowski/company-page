import React, { Component } from "react";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./particles.less";
import { particlesProps } from './particlesProps';

export class ParticlesWrapper extends Component {

    public render() {
        return (
            <div>
                <h1 style={{position: "absolute", top: "50%", color: "#fff", width: '100%'}}>
                    <div style={{textAlign: 'center', fontSize: '50px'}}>Front-end Developer</div>
                    <div style={{textAlign: 'center', fontSize: '14px'}}>
                        #frontenddeveloper, #reactjsenthusiast, #webdev
                    </div>
                    <div style={{textAlign: 'center', fontSize: '30px', marginTop: '100px'}}>Zobacz moje portfolio</div>
                    <div style={{textAlign: 'center', fontSize: '60px'}}>
                        <FontAwesomeIcon icon={["fas", "chevron-down"]} />
                    </div>
                </h1>
                <Particles {...particlesProps} />
            </div>
        );
    }
}
